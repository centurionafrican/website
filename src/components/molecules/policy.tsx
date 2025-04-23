"use client";
import * as React from "react";
import { Button, Icon } from "@/components/atoms";
import { useRouter } from "next/navigation";
import { IPolicy } from "@/types";
import { formatDate } from "@/utils";

interface PolicyProps {
  policy: IPolicy;
  props?: any;
}

const Policy = ({ policy, ...props }: PolicyProps) => {
  const router = useRouter();
  return (
    <>
      <div
        {...props}
        className="bg-white flex flex-row items-center justify-center border border-gray-200/80 p-4 gap-4 rounded-md shadow"
      >
        <div className="h-12 w-12 bg-white text-sm flex rounded-full items-center justify-center border border-accent">
          {policy?.insurer?.name.charAt(0) || "P"}
        </div>
        <div className="flex-1 flex flex-col">
          {/* <div className="text-xs text-muted">
            {policy?.certificate || "-"}
          </div> */}
          <div>{policy?.policyItem.vehicle.plateNumber}</div>
          <div className="text-xs text-muted flex gap-2">
            <div className="flex items-center gap-2">
              <Icon name="date-start" />
              <span>{formatDate(policy?.start_date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="date-end" />
              <span>{formatDate(policy?.end_date)}</span>
            </div>
          </div>
        </div>
        <div className="font-semibold px-3">
          {policy?.amount.toLocaleString()} RWF
        </div>
        <div className="text-lg font-semibold">
          <Button
            onClick={() => router.push("/")}
            variant="outline"
            size="default"
          >
            <Icon name="arrow-right" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Policy;
