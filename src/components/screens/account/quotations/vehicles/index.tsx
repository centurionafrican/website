import { useQuotation } from "@/contexts/quotation-context";
import { useFetch } from "@/hooks";
import { fetchVehicles } from "@/services/vehicles";
import { IVehicle } from "@/types/vehicle.interface";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import EmptyState from "@/components/organisms/empty-state";
import { cn } from "@/lib/utils";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/atoms";

const Vehicles = ({ onChangeStep }) => {
  const router = useRouter();
  const [selectedVehicleId, setSelectedVehicleId] = React.useState<string>();
  const { quotationData, setQuotationData } = useQuotation();

  const { data: vehiclesData } = useFetch(["vehicles"], () => fetchVehicles());

  useEffect(() => {
    if (Object.values(quotationData).length > 0) {
      setQuotationData(quotationData);

      setSelectedVehicleId(
        quotationData.vehicle?.id ||
          quotationData?.policy_items?.[0]?.vehicle.id
      );
    }
  }, [quotationData]);

  const vehicles: IVehicle[] = vehiclesData?.response || [];
  const onSelect = (vehicle: IVehicle) => {
    // if (vehicle.status === "active") {
    setQuotationData({ ...quotationData, vehicle });
    onChangeStep();
    // }
  };

  return (
    <>
      {vehicles.length !== 0 && (
        <div>
          <div className="p-4 border border-gray-100 rounded-lg flex flex-col gap-4">
            <div className="px-4 sm:px-0 flex flex-col">
              <h3 className="text-base/7 font-semibold text-gray-900 flex">
                <span className="flex-1">Select vehicle</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push("/account/vehicles/create")}
                  className="w-fit"
                >
                  Add new vehicle
                </Button>
              </h3>
            </div>

            <div className="flex flex-col gap-2 ">
              {vehicles.map((vehicle: IVehicle, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-row gap-3 border border-gray-100 justify-center items-center hover:bg-gray-50 cursor-pointer rounded-lg p-3",
                    selectedVehicleId === vehicle.id && "border-primary"
                  )}
                  onClick={() => {
                    // if (vehicle.status === "active") {
                    onSelect(vehicle);
                    // }
                  }}
                >
                  <div className="flex-1">
                    <div className="">{vehicle.plateNumber}</div>
                    <div className="text-xs text-muted">
                      {vehicle.make?.name} | {vehicle.model} | {vehicle.year} |
                      Seats: {vehicle.seats}
                    </div>
                  </div>
                  <div className="p-2 text-2xl text-muted">
                    <Button variant="secondary">Select</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {vehicles.length === 0 && (
        <EmptyState
          title="No vehicles yet!"
          subtitle="Register your vehicle to get started!"
        >
          <Button onClick={() => router.push("/account/vehicles/create")}>
            Get started now
          </Button>
        </EmptyState>
      )}
    </>
  );
};

export default Vehicles;
