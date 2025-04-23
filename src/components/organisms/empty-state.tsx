"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import EmptyStateImage from "@/assets/images/empty-state.svg"

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
  label?: string;
  reset?: () => void;
  children?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  label = "Remove all filters",
  children,
}) => {
  const router = useRouter();

  return (
    <div
      className="
        min-h-80
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <Image src={EmptyStateImage} alt="Empty state" width={100} height={100} />
      <h2 className="text-2xl font-normal">{title}</h2>
      <h3 className="text-md font-normal text-muted">{subtitle}</h3>
      <div className="w-48 mt-4 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default EmptyState;
