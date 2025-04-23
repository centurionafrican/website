"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { ReactNode } from "react";

interface CloudinaryUploadProps {
  children: ReactNode;
  onUpload: (publicId: string) => void;
}

export const CloudinaryUpload = ({
  children,
  onUpload,
}: CloudinaryUploadProps) => {
  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      options={{
        multiple: false,
      }}
      onSuccess={(result) => {
        if (typeof result.info !== "string" && result.info) {
          const { public_id, format } = result.info;
          onUpload((public_id + "." + format) as string);
        }
      }}
    >
      {({ open }) => {
        function handleOnClick() {
          open();
        }
        return <div onClick={handleOnClick}>{children}</div>;
      }}
    </CldUploadWidget>
  );
};

export const CloudinaryImage = ({
  publicId,
  width = 100,
  height = 100,
  sizes = "100vw",
}: {
  publicId: string;
  width?: number;
  height?: number;
  sizes?: string;
}) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const baseUrl = "https://res.cloudinary.com";
  const version = "v1739396420";

  return (
    <Image
      width={width}
      height={height}
      src={`${baseUrl}/${cloudName}/image/upload/${version}/${publicId}`}
      sizes={sizes}
      className="object-cover"
      alt={publicId}
    />
  );
};
