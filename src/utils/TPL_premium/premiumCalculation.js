import {
  TarifRC,
  TarifVOL,
  TarifDM,
  incendie,
  excess_cd_loading,
  excess_md_theft,
  glass_breakage,
  occupants_rates_and_load,
  codeTypes,
  durationRates,
  discount_rates,
  TarifOccupant,
} from "./tables";

export class PremiumCalculator {
  constructor(
    vehicleTypeUseCode, // B13 ex: "4-Car_Voiture/Sedan/Saloon-Private"
    ratingYear, // K6 or I10 ex: 2025
    numberOfSeats, // B15 ex: 5
    numberOfOccupantsToBeCovered, // B16 ex: 5
    sumInsuredPerOccupant, // B17 ex: 3
    valueOfTheVehicle, // B18 ex: 15000000
    isDeductible, // B19 ex: false
    typeOfClient, // B21 ex: "Private"
    periodOfInsurance, // B23 ex: "7,1-12 Month"
    manufaturingYear, // B14 ex: 2021
    isTplCovered, // E13 ex: true
    isOccupantCovered, // E14 ex: true
    isMaterialDamageCovered, // E16 ex: true
    isTheftCovered, // E17 ex: true
    isFireCovered, // E18 ex: true
    // vehicle, // vehicle info
    adminFee // ex: 2500
  ) {
    // this.vehicleType = vehicleType; // B13 from retail quotation
    // this.vehicleClass = vehicleType; // f17 from retail pricing settings
    this.CODETYPE = vehicleTypeUseCode; // H17 rom retail pricing settings
    this.RATING_YEAR = ratingYear; // K6 from retail quotation
    this.numberOfSeats = numberOfSeats; // B15 from retail quotation: total number of seats in the vehicle including the driver seat
    this.numberOfOccupantsToBeCovered = numberOfOccupantsToBeCovered; // B16 from retail quotation
    this.sumInsuredPerOccupant = sumInsuredPerOccupant; // B17 from retail quotation
    this.valueOfTheVehicle = valueOfTheVehicle; // B18 from retail quotation
    this.isDeductible = isDeductible; // B19 from retail quotation
    this.isTplCovered = isTplCovered; // E13 from retail quotation
    this.isOccupantCovered = isOccupantCovered; // E14 from retail quotation
    this.typeOfClient = typeOfClient; // B21 can be Private or Government
    this.isMaterialDamageCovered = isMaterialDamageCovered; // E16 from retail quotation
    this.isTheftCovered = isTheftCovered; // E17 from retail quotation
    this.isFireCovered = isFireCovered; // E18 from retail quotation
    this.periodOfInsurance = periodOfInsurance; // B23 from retail quotation
    this.YEAR = ratingYear; // I10 from retail pricing settings
    this.manufaturingYear = manufaturingYear; // B14 from retail quotation
    this.H19 = this.calculateH19();
    this.duration_range = periodOfInsurance;
    this.duration_days = this.getDurationDays();
    this.rate = this.getRate();
    // this.vehicle = vehicle;
    this.adminFee = adminFee;
  }

  // getCodeType() {
  //   const type = codeTypes.find((type) => type.motorType === this.vehicleClass);
  //   return type ? type.codeType : null;
  // }

  calculateH19() {
    const age = this.YEAR - this.manufaturingYear;
    return age > 10 ? 11 : age > 5 ? 10 : 5;
  }

  getDurationDays() {
    return durationRates.find((rate) => rate.duration === this.duration_range)
      .days;
  }

  getRate() {
    return durationRates.find((rate) => rate.days === this.duration_days).rate;
  }
  calculateSumInsuredForOccupants() {
    let { amount, medicalFee } = TarifOccupant.find(
      (tarifOc) => tarifOc.occupantCode === this.sumInsuredPerOccupant
    );
    return {
      totalAccidentalDeath: amount, // =+VLOOKUP(C23,occupants,3,0)
      totalPermanentDisability: amount, // =+VLOOKUP(C23,occupants,3,0)
      medicalFee, // =+VLOOKUP(C23,occupants,4,0)
    };
  }

  calculateNetTplPremiumBase() {
    let tarifRc;

    if (this.H19 > 10) {
      tarifRc = TarifRC(this.numberOfSeats).find(
        (rc) => rc.codeType === this.CODETYPE
      )["Rc>10ans"];
    } else if (this.H19 > 5) {
      tarifRc = TarifRC(this.numberOfSeats).find(
        (rc) => rc.codeType === this.CODETYPE
      )["Rc>5<=10ans"];
    } else {
      tarifRc = TarifRC(this.numberOfSeats).find(
        (rc) => rc.codeType === this.CODETYPE
      )["Rc<=5ans"];
    }

    const premiumBase = tarifRc * this.rate;
    return premiumBase;
  }

  calculateTplPremium() {
    const NET_PREMIUM_BASE = this.calculateNetTplPremiumBase();
    const NET_PREMIUM = NET_PREMIUM_BASE;
    const TPL_PREMIUM = this.isTplCovered ? NET_PREMIUM : 0;
    return TPL_PREMIUM;
  }

  calculateNetOccupantsPremiumBase() {
    const tarifOccupantCode = this.sumInsuredPerOccupant; // C23 = B17 (ranging from 1 to 5)
    const netOccupantsPremiumBase =
      TarifOccupant.find(
        (tarifOc) => tarifOc.occupantCode === tarifOccupantCode
      ).amount *
      occupants_rates_and_load.find((rate) => rate.codeType === this.CODETYPE)
        .occupant *
      this.numberOfOccupantsToBeCovered *
      this.rate; // G28 =+VLOOKUP(C23,SIOCC,2,0)*VLOOKUP(H17,OccRates,4,0)*F23*D15
    return netOccupantsPremiumBase;
  }

  calculateOccupantPremium() {
    const netOccupantsPremiumBase = this.calculateNetOccupantsPremiumBase();
    const DISCOUNT_CODE = 6; // E24 = ranges from 1 to 6.
    const discountFactor = discount_rates.find(
      (rate) => rate.id === DISCOUNT_CODE
    ).discountFactor; // F24 =+VLOOKUP(E24,DiscountRate,2,0)
    const netOccupantsPremium = netOccupantsPremiumBase * discountFactor; // G29 =+G28*$F$24
    const occupantPremium =
      this.isOccupantCovered && this.isTplCovered ? netOccupantsPremium : 0; // F14 = IF(AND(E14="Yes",E13="Yes"),'Retail Pricing Settings'!G29,0)
    return occupantPremium;
  }

  calculateNetSeatsPremiumBase() {
    const seatsLoad = occupants_rates_and_load.find(
      (load) => load.codeType === this.CODETYPE
    ).seats;
    const netBaseSeatsPremium = seatsLoad * this.numberOfSeats * this.rate; // H28 =VLOOKUP(H17,SeatsLoad,5,0)*F22*D15
    return netBaseSeatsPremium;
  }

  calculateSeatsPremium() {
    const netBaseSeatsPremium = this.calculateNetSeatsPremiumBase();
    const DISCOUNT_CODE = 6; // E24 = ranges from 1 to 6.
    const discountFactor = discount_rates.find(
      (rate) => rate.id === DISCOUNT_CODE
    ).discountFactor; // F24 =+VLOOKUP(E24,DiscountRate,2,0)
    const netSeatsPremium = netBaseSeatsPremium * discountFactor; // H29 =+H28*$F$24;
    const seatsPremium = netSeatsPremium; // F15 ='Retail Pricing Settings'!H29

    return seatsPremium;
  }

  calculateNetMaterialDamagePremiumBase() {
    let vehicleAge = this.RATING_YEAR - this.manufaturingYear; // E19 =+I10-C19
    let realValueOfTheVehicle = vehicleAge <= 15 ? this.valueOfTheVehicle : 0; // C22 =IF(E19<=15,'Retail Quotation'!B18,0)
    let netBaseMaterialDamagePremium = 1 * realValueOfTheVehicle * this.rate; // D28 =+IF($H$19>10,VLOOKUP($H$17,TarifDM,4,0),IF($H$19>5,VLOOKUP($H$17,TarifDM,3,0),VLOOKUP(H17,TarifDM,2,0)))*$C$22*$D$15

    if (this.H19 > 10) {
      netBaseMaterialDamagePremium *= TarifDM.find(
        (dm) => dm.codeType === this.CODETYPE
      )["DM>10ans"];
    } else if (this.H19 > 5) {
      netBaseMaterialDamagePremium *= TarifDM.find(
        (dm) => dm.codeType === this.CODETYPE
      )["DM>5<=10ans"];
    } else {
      netBaseMaterialDamagePremium *= TarifDM.find(
        (dm) => dm.codeType === this.CODETYPE
      )["DM<=5ans"];
    }

    return netBaseMaterialDamagePremium;
  }

  calculateMaterialDamagePremium() {
    const netBaseMaterialDamagePremium =
      this.calculateNetMaterialDamagePremiumBase();
    const DISCOUNT_CODE = 6; // E24 = ranges from 1 to 6.
    const discountFactor = discount_rates.find(
      (rate) => rate.id === DISCOUNT_CODE
    ).discountFactor; // F24 =+VLOOKUP(E24,DiscountRate,2,0)
    const netMaterialDamagePremium =
      netBaseMaterialDamagePremium * discountFactor; // D29 =+D28*$F$24

    let materialDamagePremium = 0; // F16 =IF(AND(E16="Yes",E13="Yes"),'Retail Pricing Settings'!D29,0)
    if (this.isMaterialDamageCovered && this.isTplCovered) {
      materialDamagePremium = netMaterialDamagePremium;
    } else {
      materialDamagePremium = 0;
    }

    return materialDamagePremium;
  }

  calculateNetTheftPremiumBase() {
    let vehicleAge = this.RATING_YEAR - this.manufaturingYear; // E19 =+I10-C19
    let realValueOfTheVehicle = vehicleAge <= 15 ? this.valueOfTheVehicle : 0; // C22 =IF(E19<=15,'Retail Quotation'!B18,0)
    let netBaseTheftPremium = realValueOfTheVehicle * this.rate; // E28 =+IF($H$19>10,VLOOKUP($H$17,TarifVol,4,0),IF($H$19>5,VLOOKUP($H$17,TarifVol,3,0),VLOOKUP(H17,TarifVol,2,0)))*$C$22*$D$15

    if (this.H19 > 10) {
      netBaseTheftPremium *= TarifVOL.find(
        (vol) => vol.codeType === this.CODETYPE
      )["VOL>10ans"];
    } else if (this.H19 > 5) {
      netBaseTheftPremium *= TarifVOL.find(
        (vol) => vol.codeType === this.CODETYPE
      )["VOL>5<=10ans"];
    } else {
      netBaseTheftPremium *= TarifVOL.find(
        (vol) => vol.codeType === this.CODETYPE
      )["VOL<=5ans"];
    }

    return netBaseTheftPremium;
  }

  calculateTheftPremium() {
    const netBaseTheftPremium = this.calculateNetTheftPremiumBase();
    const DISCOUNT_CODE = 6; // E24 = ranges from 1 to 6.
    const discountFactor = discount_rates.find(
      (rate) => rate.id === DISCOUNT_CODE
    ).discountFactor; // F24 =+VLOOKUP(E24,DiscountRate,2,0)
    const netTheftPremium = netBaseTheftPremium * discountFactor; // E29 =+E28*$F$24

    let theftPremium = 0; // F17 =IF(AND(E17="Yes",E13="Yes"),'Retail Pricing Settings'!E29,0)
    if (this.isTheftCovered && this.isTplCovered) {
      theftPremium = netTheftPremium;
    } else {
      theftPremium = 0;
    }

    return theftPremium;
  }

  calculateNetFirePremiumBase() {
    let vehicleAge = this.RATING_YEAR - this.manufaturingYear; // E19 =+I10-C19
    let realValueOfTheVehicle = vehicleAge <= 15 ? this.valueOfTheVehicle : 0; // C22 =IF(E19<=15,'Retail Quotation'!B18,0)
    let netBaseFirePremium = 1 * realValueOfTheVehicle * this.rate; // E28 =+IF($H$19>10,VLOOKUP($H$17,TarifIncendie,4,0),IF($H$19>5,VLOOKUP($H$17,TarifIncendie,3,0),VLOOKUP(H17,TarifIncendie,2,0)))*$C$22*$D$15

    if (this.H19 > 10) {
      netBaseFirePremium *= incendie.find(
        (inc) => inc.codeType === this.CODETYPE
      )["INCENDIE>10ans"];
    } else if (this.H19 > 5) {
      netBaseFirePremium *= incendie.find(
        (inc) => inc.codeType === this.CODETYPE
      )["INCENDIE>5<=10ans"];
    } else {
      netBaseFirePremium *= incendie.find(
        (inc) => inc.codeType === this.CODETYPE
      )["INCENDIE<=5ans"];
    }

    return netBaseFirePremium;
  }

  calculateFirePremium() {
    const netBaseFirePremium = this.calculateNetFirePremiumBase();
    const DISCOUNT_CODE = 6; // E24 = ranges from 1 to 6.
    const discountFactor = discount_rates.find(
      (rate) => rate.id === DISCOUNT_CODE
    ).discountFactor; // F24 =+VLOOKUP(E24,DiscountRate,2,0)
    const netFirePremium = netBaseFirePremium * discountFactor; // F29 =+F28*$F$24

    let firePremium = 0; // F18 =IF(AND(E18="Yes",E13="Yes"),'Retail Pricing Settings'!F29,0)
    if (this.isFireCovered && this.isTplCovered) {
      firePremium = netFirePremium;
    } else {
      firePremium = 0;
    }

    return firePremium;
  }

  calculateMinimumLoad() {
    let vehicleAge = this.RATING_YEAR - this.manufaturingYear; // E19 =+I10-C19
    let minimumLoad = 0;
    if (vehicleAge <= 15) {
      minimumLoad =
        excess_cd_loading.find((load) => load.codeType === this.CODETYPE)[
          "Excess-min. Loading"
        ] * this.rate; // F39 ==IF(E19<=15,VLOOKUP(H17,BI2:BK39,3,0)*D15,0)
    }
    return minimumLoad;
  }

  calculateLoad() {
    const materialDamagePremium = this.calculateMaterialDamagePremium();
    const theftPremium = this.calculateTheftPremium();
    const firePremium = this.calculateFirePremium();
    console.log("MATERIAL_DAMAGE_PREMIUM ... ", materialDamagePremium);
    console.log("THEFT_PREMIUM ... ", theftPremium);
    console.log("FIRE_PREMIUM ... ", firePremium);
    const load = (materialDamagePremium + theftPremium + firePremium) * 0.1; // F40 =SUM(D29:F29)*10/100
    return load;
  }

  calculateApplicableLoad() {
    const minimumLoad = this.calculateMinimumLoad();
    const load = this.calculateLoad();
    const applicableLoad = load > minimumLoad ? load : minimumLoad; // F41 =(IF(F40>F39,F40,F39))
    console.log("APPLICABLE_LOAD ... ", applicableLoad, minimumLoad, load);
    return applicableLoad;
  }

  calculateOtfPremium() {
    const materialDamagePremium = this.calculateMaterialDamagePremium();
    const theftPremium = this.calculateTheftPremium();
    const firePremium = this.calculateFirePremium();
    const applicableLoad = this.calculateApplicableLoad();

    let otfPremium = materialDamagePremium + theftPremium + firePremium; // F19 =IF(AND(B19="No",B21="Government",E13="Yes",B18>0),SUM(F16:F18)+'Retail Pricing Settings'!F41,SUM('Retail Quotation'!F16:F18))
    if (
      !this.isDeductible &&
      this.typeOfClient === "Government" &&
      this.isTplCovered &&
      this.valueOfTheVehicle > 0
    ) {
      otfPremium += applicableLoad;
    }

    return otfPremium;
  }

  calculateNetPremium() {
    const tplPremium = this.calculateTplPremium();
    const occupantPremium = this.calculateOccupantPremium();
    const seatsPremium = this.calculateSeatsPremium();
    const otfPremium = this.calculateOtfPremium();
    const netPremium = tplPremium + occupantPremium + seatsPremium + otfPremium;

    console.log("TPL_PREMIUM ... ", tplPremium);
    console.log("OCCUPANT_PREMIUM ... ", occupantPremium);
    console.log("SEATS_PREMIUM ... ", seatsPremium);
    console.log("OTF_PREMIUM ... ", otfPremium);
    console.log("NET_PREMIUM ... ", netPremium);

    return netPremium;
  }

  calculateVat() {
    const netPremium = this.calculateNetPremium();
    const vat = ((netPremium + this.adminFee) * 18) / 100;
    return vat; 
  }

  calculateSgf() {
    const tplPremium = this.calculateTplPremium();
    const sgf = (tplPremium * 10) / 100;
    return sgf;
  }

  calculateTotalChargeablePremium() {
    const netPremium = this.calculateNetPremium();
    // const tplPremium = this.calculateTplPremium();

    const vat = this.calculateVat();
    const sgf = this.calculateSgf();
    const totalChargeablePremium = netPremium + this.adminFee + vat + sgf;
    console.log("TOTAL_CHARGEABLE_PREMIUM ... ", totalChargeablePremium);

    return totalChargeablePremium;
  }
}
