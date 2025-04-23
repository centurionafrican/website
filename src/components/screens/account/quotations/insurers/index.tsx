import { Icon } from "@/components/atoms";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { useQuotation } from "@/contexts/quotation-context";
import { useFetch } from "@/hooks";
import { cn } from "@/lib/utils";
import { fetchInsurers } from "@/services/insurer";
import { IInsurer } from "@/types/insurer.interface";
import React from "react";

const Insurers = ({ onChangeStep }) => {
  const { quotationData, setQuotationData } = useQuotation();

  const { data: insurersData } = useFetch(["insurers"], () =>
    fetchInsurers(false)
  );

  const onSelect = (insurer: IInsurer) => {
    setQuotationData({ ...quotationData, insurer });
    onChangeStep();
  };
  const insurers: IInsurer[] = insurersData?.response || [];
  return (
    <div className="p-4 border border-gray-100 rounded-lg flex flex-col gap-4">
      <div className="px-4 sm:px-0 flex flex-col">
        <h3 className="text-base/7 font-semibold text-gray-900">
          Insurance company
        </h3>
        <div className="text-sm">
          We have partnered with all insurance company to bring you the company
          of your choice
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        {insurers
          // .filter((insurance) => insurance.favorite)
          .map((insurer) => (
            <div
              key={insurer.id}
              className={cn(
                "flex flex-row gap-3 border border-gray-100 justify-center items-center hover:bg-gray-50 cursor-pointer rounded-xl",
                quotationData?.insurer?.id === insurer.id && " border-primary"
              )}
              onClick={() => onSelect(insurer)}
            >
              <Avatar className="m-2">
                <AvatarImage
                  src={`https://res.cloudinary.com/drdkbc9gs/image/upload/v1739191163/${insurer?.avatar_url}`}
                  alt={insurer.name}
                />
                <AvatarFallback>
                  {insurer.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">{insurer.display}</div>
              <div className="p-2 text-2xl text-muted">
                <Icon name="arrow-right" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Insurers;
