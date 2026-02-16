import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
  crop?: boolean;
}

export const BrandLogo = ({
  className,
  priority = false,
  crop = false,
}: BrandLogoProps) => {
  const imageClassName = crop
    ? "h-full w-full object-cover object-left"
    : "h-auto w-full object-contain";

  return (
    <span className={cn("inline-flex items-center", crop && "overflow-hidden", className)}>
      <Image
        src="/logolight.png"
        alt="Elite Sports Coaching & Conseils"
        width={460}
        height={146}
        priority={priority}
        className={cn(imageClassName, "dark:hidden")}
      />
      <Image
        src="/logo.png"
        alt="Elite Sports Coaching & Conseils"
        width={460}
        height={146}
        priority={priority}
        className={cn("hidden dark:block", imageClassName)}
      />
    </span>
  );
};
