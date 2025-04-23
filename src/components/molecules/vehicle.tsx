"use client";
import * as React from "react";
import { Button, Icon } from "../atoms";
import { useRouter } from "next/navigation";
import { IVehicle } from "@/types/vehicle.interface";

interface VehicleProps {
  vehicle?: IVehicle;
  props?: any;
}

const Vehicle = ({ vehicle, ...props }: VehicleProps) => {
  const router = useRouter();
  return (
    <div
      className="bg-white flex flex-row items-center justify-center border border-gray-200/80 p-4 gap-4 rounded-md cursor-pointer"
      {...props}
    >
      <div className="h-12 w-12 text-2xl bg-accent text-secondary flex rounded-full items-center justify-center">
        <Icon name="car" />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="font-medium">
          {vehicle?.plateNumber}/{vehicle?.year}
        </div>
        <div className="text-sm text-muted flex divide-x divide-gray-200">
          <span className="pr-2">{vehicle?.make?.name}</span>
          <span className="px-2">{vehicle?.model}</span>
          <span className="px-2">
            Seats:
            {vehicle?.seats}
          </span>
        </div>
      </div>
      <div className="text-lg font-semibold">
        <Button
          onClick={() => router.push(`vehicles/${vehicle?.id}`)}
          size="default"
          variant="muted"
        >
          <Icon name="arrow-right" />
        </Button>
      </div>
    </div>
  );
};

export default Vehicle;
