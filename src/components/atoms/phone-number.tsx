"use client";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";

type PhoneNumberInputProps = {
  value?: string;
  onChange?: (value: string | undefined) => void;
  placeholder?: string;
};

const PhoneNumber: React.FC<PhoneNumberInputProps> = ({
  value = "",
  onChange,
  placeholder = "Enter phone number"
}) => {
  // Format the phone number to E.164 if needed
  const formatToE164 = (phoneNumber: string): string => {
    if (!phoneNumber) return "";
    if (phoneNumber.startsWith("+")) return phoneNumber;

    // Handle numbers that start with 0 (convert to Rwandan format)
    if (phoneNumber.startsWith("0")) {
      return `+250${phoneNumber.substring(1)}`;
    }

    // If it's just numbers without any prefix, add the country code
    return `+250${phoneNumber}`;
  };

  // Initialize with properly formatted phone number
  const [phone, setPhone] = useState<string>(formatToE164(value));

  useEffect(() => {
    // When value prop changes, format it properly
    setPhone(formatToE164(value));
  }, [value]);

  const handleChange = (newValue: string | undefined) => {
    setPhone(newValue || "");
    onChange?.(newValue);
  };

  return (
    <div className='flex flex-col w-full'>
      <PhoneInput
        international
        defaultCountry='RW'
        countryCallingCodeEditable={false}
        value={phone}
        onChange={handleChange}
        className='border text-sm h-9 rounded-md px-3 py-1.5 w-full focus:outline-none focus:ring-0 focus:border-transparent'
        placeholder={placeholder}
      />
    </div>
  );
};

export default PhoneNumber;
