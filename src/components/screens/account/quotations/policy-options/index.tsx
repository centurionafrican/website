import {
  Button,
  Icon,
  Input,
  Label,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms";
import { SearchableSelect } from "@/components/molecules";
import { useQuotation } from "@/contexts/quotation-context";
import { useUser } from "@/contexts/userContext";
import { useMutate } from "@/hooks";
import { createQuotation, updateQuotation } from "@/services/quotations";
import { durationRates } from "@/utils/TPL_premium/tables";
import {
  QuotationFormValues,
  quotationSchema,
} from "@/validations/quotation-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const periodOptions = durationRates.map((rate) => ({
  id: rate.duration,
  name: rate.description,
}));

const insuranceTypes = [
  { id: "third-party", name: "Third party insurance", selected: true },
  { id: "comprehensive", name: "Comprehensive insurance", selected: false },
];

const PolicyOptions = () => {
  const { quotationData } = useQuotation();
  const { user } = useUser();

  const router = useRouter();
  const queryClient = useQueryClient();

  const createQuotationMutation = useMutate(createQuotation, {
    onSuccess: (data: any) => {
      if (data.status === "error") {
        toast.error(data.message);
      } else {
        toast.success("Quotation is created successfully");
        queryClient.invalidateQueries({ queryKey: ["quotations"] });
        router.push(`/account/quotations/${data?.response?.quotation?.id}`);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateQuotationMutation = useMutate(updateQuotation, {
    onSuccess: (data) => {
      toast.success("Quotation is updated successfully");
      queryClient.invalidateQueries({ queryKey: ["quotations"] });
      router.push(`/account/quotations/${data?.response?.id}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors, isValid },
  } = useForm<QuotationFormValues>({
    resolver: zodResolver(quotationSchema),
    mode: "onTouched",
    defaultValues: {
      isDeductible: false,
      isTplCovered: true,
      isMaterialDamageCovered: true,
      isTheftCovered: true,
      isFireCovered: true,
      vehicle_value: 0,
      numberOfOccupantsToBeCovered:
        quotationData?.vehicle?.seats ||
        quotationData?.policy_items?.[0].vehicle?.seats,
      sumInsuredPerOccupant: 1,
      insurance_class: "third-party",
      ...quotationData,
      ...quotationData.policy_items?.[0],
      vehicle_use_code:
        quotationData.policy_items?.[0].vehicle_use_code.toString(),
    },
  });

  const handleInsuranceTypeChange = (type: "third-party" | "comprehensive") => {
    setValue("insurance_class", type);
    if (type === "third-party") {
      setValue("vehicle_value", 0);
      trigger(["vehicle_value"]);
    }
  };

  const calculatePremiums = (data: QuotationFormValues) => {
    const quotationPayload = {
      account_id: user.account.id,
      insurer_id: quotationData.insurer.id,
      period_pattern: data.period_pattern,
      start_date: data.start_date,
      type: data.type,
      items: [
        {
          vehicle_id: quotationData.vehicle.id,
          insurance_class: data.insurance_class,
          nbrOfOccupantsCovered: data.numberOfOccupantsToBeCovered,
          sumInsuredPerOccupant: data.sumInsuredPerOccupant,
          vehicle_use_code: Number(data.vehicle_use_code),
          seats: quotationData.vehicle?.seats,
          manufactureYear: quotationData.vehicle.year,
          isTplCovered: data.isTplCovered,
          isMaterialDamageCovered: data.isMaterialDamageCovered,
          isTheftCovered: data.isTheftCovered,
          isFireCovered: data.isFireCovered,
          vehicle_value: data.vehicle_value,
        },
      ],
    };
    if (quotationData.id) {
      updateQuotationMutation.mutate({
        ...quotationPayload,
        id: quotationData.id,
      });
    } else {
      createQuotationMutation.mutate(quotationPayload);
    }
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(calculatePremiums)}
      noValidate
    >
      <div className="p-4 border border-gray-100 rounded-lg flex flex-col gap-4">
        <div className="px-4 sm:px-0 flex flex-col">
          <h3 className="text-base/7 font-semibold text-gray-900">
            Policy options
          </h3>
        </div>
        <div className="flex w-full gap-2">
          {insuranceTypes.map((type) => (
            <div
              key={type.id}
              className={`p-2 flex-1 flex border-2 rounded-lg items-center cursor-pointer 
                  ${type.id === watch("insurance_class") ? "bg-green-50 border-green-300 hover:bg-green-200/30 hover:border-green-500" : "border-gray-100 hover:bg-gray-50/50"}
                  `}
              onClick={() =>
                handleInsuranceTypeChange(
                  type.id as "third-party" | "comprehensive"
                )
              }
            >
              <div className="flex-1 text-sm px-2">{type.name}</div>
              <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center border border-gray-100">
                {type.id === watch("insurance_class") ? (
                  <Icon name="check" />
                ) : (
                  <Icon name="minus" />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-4 mt-4 md:grid-cols-2">
          <div className="grid gap-2 lg:col-span-1">
            <SearchableSelect
              label="Select Vehicle Use"
              placeholder="Select vehicle use"
              options={
                quotationData.vehicle &&
                JSON.parse(quotationData.vehicle.vehicleType.use).map(
                  (use: any) => ({
                    id: use.number.toString(),
                    name: use.name,
                  })
                )
              }
              value={watch("vehicle_use_code")}
              onChange={(value) => {
                setValue("vehicle_use_code", value);
                trigger("vehicle_use_code");
              }}
            />
            {errors.vehicle_use_code && (
              <p className="text-red-500 text-xs">
                {errors.vehicle_use_code.message}
              </p>
            )}
          </div>
          <div className="flex-1">
            <SearchableSelect
              label="Period of Insurance"
              options={periodOptions}
              value={watch("period_pattern")}
              placeholder="Select Period of Insurance"
              onChange={(value) => {
                setValue("period_pattern", value);
                trigger("period_pattern");
              }}
            />
            {errors.period_pattern && (
              <p className="text-red-500 text-sm">
                {errors.period_pattern.message}
              </p>
            )}
          </div>
          <div className="flex-1 flex justify-between flex-col gap-2">
            <Label htmlFor="numberOfOccupantsToBeCovered">
              Number of occupants to be covered
            </Label>
            <Input
              id="numberOfOccupantsToBeCovered"
              type="number"
              {...register("numberOfOccupantsToBeCovered", {
                valueAsNumber: true,
              })}
              placeholder="Number of Occupants to be Covered"
              onBlur={() => trigger("numberOfOccupantsToBeCovered")}
            />
            {errors.numberOfOccupantsToBeCovered && (
              <p className="text-red-500 text-sm">
                {errors.numberOfOccupantsToBeCovered.message}
              </p>
            )}
          </div>
          <div className="flex-1 flex justify-between flex-col gap-2">
            <Label htmlFor="sumInsuredPerOccupant">
              Sum insured per occupant
            </Label>
            <Input
              id="sumInsuredPerOccupant"
              type="number"
              {...register("sumInsuredPerOccupant", { valueAsNumber: true })}
              placeholder="Sum Insured Per Occupant"
              onBlur={() => trigger("sumInsuredPerOccupant")}
            />
            {errors.sumInsuredPerOccupant && (
              <p className="text-red-500 text-sm">
                {errors.sumInsuredPerOccupant.message}
              </p>
            )}
          </div>
          <div className="flexd-1">
            <Label>Effective date </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full">
                  {watch("start_date")
                    ? format(watch("start_date"), "PPP")
                    : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  className="bg-white"
                  mode="single"
                  selected={new Date(watch("start_date"))}
                  onSelect={(date: Date | undefined) => {
                    date && setValue("start_date", date.toISOString());
                    trigger("start_date");
                  }}
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
            {errors.start_date && (
              <p className="text-red-500 text-sm">
                {errors.start_date.message}
              </p>
            )}
          </div>
          {watch("insurance_class") === "comprehensive" && (
            <div className="flex-1 flex justify-between flex-col gap-2">
              <Label htmlFor="vehicle_value">Value of the Vehicle</Label>
              <Input
                id="vehicle_value"
                type="number"
                {...register("vehicle_value", { valueAsNumber: true })}
                placeholder="Value of the Vehicle"
                onBlur={() => trigger("vehicle_value")}
              />
              {errors.vehicle_value && (
                <p className="text-red-500 text-sm">
                  {errors.vehicle_value.message}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="w-full">
        <Button variant="default" size="lg" type="submit" disabled={!isValid}>
          {(quotationData.id && "UPDATE") || "CREATE"} QUOTATION
        </Button>
      </div>
    </form>
  );
};

export default PolicyOptions;
