import { useState, useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import { Input } from "@/components/atoms/input";
import { Label } from "../atoms/label";

interface SearchableSelectProps {
  label: string;
  placeholder: string;
  options: { id: string; name: string }[];
  value: string;
  search?: boolean;
  onChange: (value: string) => void;
}

export function SearchableSelect({
  label,
  placeholder,
  options,
  value,
  search = false,
  onChange,
}: SearchableSelectProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredOptions(
        options.filter((option) =>
          option.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, options]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchTerm]);

  return (
    <div className="grid gap-2">
      <Label htmlFor={label}>{label}</Label>
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {search && (
            <div className="p-2">
              <Input
                type="text"
                placeholder="Search ..."
                className="w-full px-2 py-1.5 border rounded-md text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                ref={inputRef}
              />
            </div>
          )}
          {filteredOptions.map((option) => (
            <SelectItem value={option.id} key={option.id}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
