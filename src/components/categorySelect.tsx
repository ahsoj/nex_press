import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectionValue extends React.HTMLAttributes<HTMLElement> {}

type SelectValueType = SelectionValue & string[];

export function MobileMenuTabs({
  value,
  ...props
}: {
  value: SelectValueType[];
}) {
  return (
    <Select {...props}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>ALL NEWS</SelectLabel>
          {value.map(([label, value], idx) => (
            <SelectItem key={idx} value={label}>
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
