"use client";
import * as React from "react";
import { Button, Icon } from "@/components/atoms";
import { useRouter } from "next/navigation";
import { IQuotation, IPolicyItem } from "@/types/quotation.interface";

interface QuotationProps {
  quotation?: IQuotation;
  props?: any;
}

const Quotation = ({ quotation, ...props }: QuotationProps) => {
  const router = useRouter();
  const policyItem: IPolicyItem =
    quotation?.policy_items[0] || ({} as IPolicyItem);
  return (
    <>
      <div
        {...props}
        className="flex flex-row items-center border border-gray-100/80 p-4 gap-4 rounded-md"
      >
        <div className="h-12 w-12 text-2xl bg-accent text-secondary flex rounded-full items-center justify-center">
          <Icon name="car" />
        </div>
        <div className="flex-1 flex flex-col">
          <div> {policyItem?.vehicle?.plateNumber}</div>
          <div className="text-xs text-muted">{quotation?.insurer?.name}</div>
        </div>

        <div className="font-semibold px-3">
          <span className="text-gray-400 font-thin">RWF</span>
          {quotation?.total_premium.toLocaleString()}
        </div>
        <div className="text-lg font-semibold">
          <Button
            size={"sm"}
            onClick={() => router.push(`/account/quotations/${quotation?.id}`)}
            variant="accent"
          >
            <Icon name="arrow-right" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Quotation;
