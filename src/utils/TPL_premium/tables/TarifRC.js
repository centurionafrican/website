const calculateTarrifRc = (base, multiplier, numberOfSeats, increment) => {
  return base * multiplier + (numberOfSeats - 1) * increment;
};

const generateTarrifRc = (numberOfSeats) => [
  {
    motorType: "1-Motorcycle/Tricycle-Private",
    codeType: 1,
    "Rc<=5ans": 39000,
    "Rc>5<=10ans": 48750,
    "Rc>10ans": 58500,
  },
  {
    motorType: "2-Motorcycle/Tricycle-Taxi",
    codeType: 2,
    "Rc<=5ans": 103606,
    "Rc>5<=10ans": 129508,
    "Rc>10ans": 155409,
  },
  {
    motorType:
      "3-Motorcycle/Tricycle-Commercial/Transport of Goods/Driving School/Driving School",
    codeType: 3,
    "Rc<=5ans": 103606,
    "Rc>5<=10ans": 129508,
    "Rc>10ans": 155409,
  },
  {
    motorType: "4-Car_Voiture/Sedan/Saloon-Private",
    codeType: 4,
    "Rc<=5ans": 57600,
    "Rc>5<=10ans": 72000,
    "Rc>10ans": 86400,
  },
  {
    motorType: "5-Car_Voiture/Sedan/Saloon-Taxi",
    codeType: 5,
    "Rc<=5ans": 131400,
    "Rc>5<=10ans": 164250,
    "Rc>10ans": 197100,
  },
  {
    motorType: "6-Car_Voiture/Sedan/Saloon-for Hire",
    codeType: 6,
    "Rc<=5ans": 131400,
    "Rc>5<=10ans": 164250,
    "Rc>10ans": 197100,
  },
  {
    motorType:
      "7-Car_Voiture/Sedan/Saloon-Commercial/Transport of Goods/Driving School",
    codeType: 7,
    "Rc<=5ans": 150900,
    "Rc>5<=10ans": 188625,
    "Rc>10ans": 226350,
  },
  {
    motorType: "8-Jeep/SUV-Private",
    codeType: 8,
    "Rc<=5ans": 76200,
    "Rc>5<=10ans": 95250,
    "Rc>10ans": 114300,
  },
  {
    motorType: "9-Jeep/SUV-Taxi",
    codeType: 9,
    "Rc<=5ans": 131400,
    "Rc>5<=10ans": 164250,
    "Rc>10ans": 197100,
  },
  {
    motorType: "10-Jeep/SUV-for Hire",
    codeType: 10,
    "Rc<=5ans": 131400,
    "Rc>5<=10ans": 164250,
    "Rc>10ans": 197100,
  },
  {
    motorType: "11-Jeep/SUV-Commercial/Transport of Goods/Driving School",
    codeType: 11,
    "Rc<=5ans": 150900,
    "Rc>5<=10ans": 188625,
    "Rc>10ans": 226350,
  },
  {
    motorType: "12-Minibus/Van-Private",
    codeType: 12,
    "Rc<=5ans": 129600,
    "Rc>5<=10ans": 162000,
    "Rc>10ans": 194400,
  },
  {
    motorType: "13-Minibus/Van-Taxi",
    codeType: 13,
    "Rc<=5ans": calculateTarrifRc(153600, 1, numberOfSeats, 14000),
    "Rc>5<=10ans": calculateTarrifRc(153600, 1.25, numberOfSeats, 14000),
    "Rc>10ans": calculateTarrifRc(153600, 1.5, numberOfSeats, 14000),
  },
  {
    motorType: "14-Minibus/Van-for Hire",
    codeType: 14,
    "Rc<=5ans": 153600,
    "Rc>5<=10ans": 192000,
    "Rc>10ans": 230400,
  },
  {
    motorType: "15-Minibus/Van-Commercial/Transport of Goods/Driving School",
    codeType: 15,
    "Rc<=5ans": 165990,
    "Rc>5<=10ans": 207488,
    "Rc>10ans": 248985,
  },
  {
    motorType: "16-Bus-Private",
    codeType: 16,
    "Rc<=5ans": 207000,
    "Rc>5<=10ans": 258750,
    "Rc>10ans": 310500,
  },
  {
    motorType: "17-Bus-Taxi",
    codeType: 17,
    "Rc<=5ans": calculateTarrifRc(153600, 1, numberOfSeats, 14000),
    "Rc>5<=10ans": calculateTarrifRc(153600, 1.25, numberOfSeats, 14000),
    "Rc>10ans": calculateTarrifRc(153600, 1.5, numberOfSeats, 14000),
  },
  {
    motorType: "18-Bus-for Hire",
    codeType: 18,
    "Rc<=5ans": 153600,
    "Rc>5<=10ans": 192000,
    "Rc>10ans": 230400,
  },
  {
    motorType: "19-Bus-Commercial/Transport of Goods/Driving School",
    codeType: 19,
    "Rc<=5ans": 165990,
    "Rc>5<=10ans": 207488,
    "Rc>10ans": 248985,
  },
  {
    motorType: "20-School Bus",
    codeType: 20,
    "Rc<=5ans": calculateTarrifRc(153600, 1, numberOfSeats, 5000),
    "Rc>5<=10ans": calculateTarrifRc(153600, 1.25, numberOfSeats, 5000),
    "Rc>10ans": calculateTarrifRc(153600, 1.5, numberOfSeats, 5000),
  },
  {
    motorType: "21-Pickup_Camionnette-Private",
    codeType: 21,
    "Rc<=5ans": 86100,
    "Rc>5<=10ans": 107625,
    "Rc>10ans": 129150,
  },
  {
    motorType: "22-Pickup_Camionnette-for Hire",
    codeType: 22,
    "Rc<=5ans": 150900,
    "Rc>5<=10ans": 188625,
    "Rc>10ans": 226350,
  },
  {
    motorType:
      "23-Pickup_Camionnette-Commercial/Transport of Goods/Driving School",
    codeType: 23,
    "Rc<=5ans": 150900,
    "Rc>5<=10ans": 188625,
    "Rc>10ans": 226350,
  },
  {
    motorType:
      "24-Truck – Camion-Commercial/Transport of Goods/Driving School (Non-Flammable)",
    codeType: 24,
    "Rc<=5ans": 226800,
    "Rc>5<=10ans": 283500,
    "Rc>10ans": 340200,
  },
  {
    motorType:
      "25-Truck – Camion-Commercial/Transport of Goods/Driving School (Flammable)",
    codeType: 25,
    "Rc<=5ans": 272160,
    "Rc>5<=10ans": 340200,
    "Rc>10ans": 408240,
  },
  {
    motorType:
      "26-Tractor – Tracteur-Commercial/Transport of Goods/Driving School (Non-Flammable)",
    codeType: 26,
    "Rc<=5ans": 226800,
    "Rc>5<=10ans": 283500,
    "Rc>10ans": 340200,
  },
  {
    motorType:
      "27-Tractor – Tracteur-Commercial/Transport of Goods/Driving School (Flammable)",
    codeType: 27,
    "Rc<=5ans": 272160,
    "Rc>5<=10ans": 340200,
    "Rc>10ans": 408240,
  },
  {
    motorType:
      "28-Lorry>= 5 tonnes – Grande Camionnette-Commercial/Transport of Goods/Driving School (Non-Flammable)",
    codeType: 28,
    "Rc<=5ans": 226800,
    "Rc>5<=10ans": 283500,
    "Rc>10ans": 340200,
  },
  {
    motorType:
      "29-Lorry>= 5 tonnes – Grande Camionnette-Commercial/Transport of Goods/Driving School (Flammable)",
    codeType: 29,
    "Rc<=5ans": 272160,
    "Rc>5<=10ans": 340200,
    "Rc>10ans": 408240,
  },
  {
    motorType:
      "30-Special Truck (HOWO, SHACMAN, FUSO,FAW)-Commercial/Transport of Goods/Driving School (Non-Flammable)",
    codeType: 30,
    "Rc<=5ans": 378000,
    "Rc>5<=10ans": 472500,
    "Rc>10ans": 567000,
  },
  {
    motorType:
      "31-Special Truck (HOWO, SHACMAN, FUSO,FAW)-Commercial/Transport of Goods/Driving School (Flammable)",
    codeType: 31,
    "Rc<=5ans": 453600,
    "Rc>5<=10ans": 567000,
    "Rc>10ans": 680400,
  },
  {
    motorType:
      "32-Trailer – Remorque-Commercial/Transport of Goods/Driving School (Non-Flammable)",
    codeType: 32,
    "Rc<=5ans": 129600,
    "Rc>5<=10ans": 162000,
    "Rc>10ans": 194400,
  },
  {
    motorType:
      "33-Trailer – Remorque-Commercial/Transport of Goods/Driving School (Flammable)",
    codeType: 33,
    "Rc<=5ans": 155520,
    "Rc>5<=10ans": 194400,
    "Rc>10ans": 233280,
  },
  {
    motorType:
      "34-Semi Trailer – Semi Remorque-Commercial/Transport of Goods/Driving School (Non-Flammable)",
    codeType: 34,
    "Rc<=5ans": 129600,
    "Rc>5<=10ans": 162000,
    "Rc>10ans": 194400,
  },
  {
    motorType:
      "35-Semi Trailer – Semi Remorque-Commercial/Transport of Goods/Driving School (Flammable)",
    codeType: 35,
    "Rc<=5ans": 155520,
    "Rc>5<=10ans": 194400,
    "Rc>10ans": 233280,
  },
  {
    motorType:
      "36-Special vehicle/Vehicules speciaux_JEEP CAT-Private (Ambulance, Hearse,…)",
    codeType: 36,
    "Rc<=5ans": 76200,
    "Rc>5<=10ans": 95250,
    "Rc>10ans": 114300,
  },
  {
    motorType:
      "37-Special vehicle/Vehicules speciaux_JEEP CAT-Commercial/Transport of Goods/Driving School",
    codeType: 37,
    "Rc<=5ans": 150900,
    "Rc>5<=10ans": 188625,
    "Rc>10ans": 226350,
  },
  {
    motorType:
      "38-Special Vehicle/Engins speciaux_TRUCK CAT-Commercial/Transport of Goods/Driving School",
    codeType: 38,
    "Rc<=5ans": 226800,
    "Rc>5<=10ans": 283500,
    "Rc>10ans": 340200,
  },
];

export default generateTarrifRc;
