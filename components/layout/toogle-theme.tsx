import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface ToggleThemeProps {
  className?: string;
}

export const ToggleTheme = ({ className }: ToggleThemeProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="icon"
      variant="ghost"
      className={cn("rounded-full", className)}
      aria-label="Changer le theme"
    >
      <Moon className="size-5 dark:hidden" />
      <Sun className="hidden size-5 dark:block" />
    </Button>
  );
};
