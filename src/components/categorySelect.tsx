"use client";
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
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SelectionValue extends React.HTMLAttributes<HTMLElement> {}

type SelectValueType = SelectionValue & string[];

export function MobileMenuTabs({
  value,
  ...props
}: {
  value: SelectValueType[];
}) {
  const router = useRouter();
  return (
    <Select
      onValueChange={(value) => router.push(`?category=${value}`)}
      {...props}
    >
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
