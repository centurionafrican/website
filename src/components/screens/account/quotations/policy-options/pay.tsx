import {
  Button,
  Input,
  Label,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Alert,
} from "@/components/atoms";
import React, { useState } from "react";
import { initializeQuotationPayment } from "@/services/quotations";
import { useMutate } from "@/hooks/useAPiCall";
import { toast } from "sonner";

const Pay = ({ open, momo_qr_code = "00000", onOpenChange, quotationId }) => {
  const [momoRefCode, setMomoRefCode] = useState("");

  const { mutate, error, isError } = useMutate(
    ({ id, reference_number }: { id: string; reference_number: string }) =>
      initializeQuotationPayment(id, reference_number),
    {
      onSuccess: () => {
        toast.success("Payment initialized successfully");
        onOpenChange(false);
      },
    }
  );

  const handleSubmit = () => {
    mutate({ id: quotationId, reference_number: momoRefCode });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pay with MOMO Code</DialogTitle>
        </DialogHeader>
        <div className="text-secondary bg-secondary/10 p-4 rounded-lg text-sm">
          <dt>*182*8*1*{momo_qr_code}#</dt>
          <dt>Prime Insurance</dt>
        </div>
        <div className="text-sm">
          <dt>Have you already paid using "Prime Insurance" momo code?</dt>
        </div>
        <div>
          <div className="flex-1 flex justify-between flex-col gap-2">
            <Label htmlFor="momo_ref_code">
              Provide MOMO reference code number
            </Label>
            <Input
              id="momo_ref_code"
              type="text"
              placeholder="MOMO reference code number"
              value={momoRefCode}
              onChange={(e) => setMomoRefCode(e.target.value)}
            />
            {isError && <Alert variant={"danger"}>{error?.message}</Alert>}
          </div>
        </div>
        <div className="text-sm flex flex-col gap-1">
          <dt>Send proof of payment on WhatsApp or call this number:</dt>
          <dt className="text-secondary flex gap-3 text-sm">
            <a href="https://wa.me/250788867447" className="hover:underline">
              Whatsapp: +250795577324
            </a>
            <a href="tel:+250795577324" className="hover:underline">
              Call: +250795577324
            </a>
          </dt>
        </div>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button
            variant="default"
            onClick={handleSubmit}
            disabled={!momoRefCode}
          >
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Pay;
