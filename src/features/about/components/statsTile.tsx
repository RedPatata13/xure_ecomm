import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import Icon from "../../../components/icon/LucideIcon";
import { numberToAbbreviatedString } from "../helpers/numberToAbbreviatedString";

interface StatsTileProps {
  count: string | number;
  icon: LucideIcon;
  label: string;
  defaultActive?: boolean;
}

export default function StatsTile({
  count,
  icon,
  label,
  defaultActive = false,
}: StatsTileProps) {
  const [active, setActive] = useState(defaultActive);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(defaultActive)}
      className={`flex flex-col justify-center items-center gap-2.5 text-center px-5 py-4 rounded-lg border cursor-pointer select-none transition-colors duration-150 w-full h-full  ${
        active ? "bg-[#DB4444] border-[#DB4444]" : "bg-white border-gray-400"
      }`}
    >
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-colors duration-150 ${
          active ? "bg-white border-red-700/50" : "bg-black border-gray-300"
        } border-8 p-2`}
      >
        <Icon
          icon={icon}
          size={20}
          className={`transition-colors duration-150 ${
            active ? "text-black" : "text-white font-light"
          } w-full h-full`}
        />
      </div>

      <p
        className={`text-2xl font-medium transition-colors duration-150 ${
          active ? "text-white" : "text-gray-900"
        }`}
      >
        {typeof count === "number" ? numberToAbbreviatedString(count) : count}
      </p>

      <p
        className={`text-xs font-medium transition-colors duration-150 ${
          active ? "text-white" : "text-gray-700"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
