"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/button";
import { Label } from "@/components/atoms/label";
import { useRouter } from "next/navigation";
import { useMutate } from "@/hooks/useAPiCall";
import { resendToken } from "@/services/auth";
import Image from "next/image";
import Alert from "@/components/atoms/alert";

function SignupSuccess({ email, ...props }) {
  const router = useRouter();
  const { mutate, status, isError, error, isSuccess } = useMutate(resendToken);

  const handleBackToLogin = () => {
    router.push("/login");
  };

  const handleResendVerificationEmail = () => {
    mutate({ email });
  };

  return (
    <div className={cn("flex flex-col gap-6 bg-white")} {...props}>
      <div className="flex-1">
        <div className="text-center mb-7 flex flex-col items-center gap-4">
          <Image
            src={"/reset-successful.svg"}
            width={300}
            height={400}
            alt="Signup success"
          />
          <Label className="text-3xl font-medium">
            You have registered successfully.
          </Label>
          <p className="text-gray-500 text-sm">
            Please check your email for further instructions on verifying your
            account.
          </p>
          <p className="text-gray-500 text-sm mt-4 mb-0">
            Didn't receive the email?
          </p>
          {isError && <Alert variant={"danger"}>{error?.message}</Alert>}
          {isSuccess && (
            <Alert variant={"success"}>
              Verification email resent successfully.
            </Alert>
          )}
          <Button type="submit" onClick={handleResendVerificationEmail}>
            Resend verification email
          </Button>
          <Button type="submit" onClick={handleBackToLogin} variant={"outline"}>
            Back to Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignupSuccess;
