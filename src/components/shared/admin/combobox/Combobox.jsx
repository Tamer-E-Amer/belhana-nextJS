"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Combobox = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen} style={{ width: "100%" }}>
      <PopoverTrigger asChild style={{ width: "100%" }}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between border-none outline-none"
        >
          {value
            ? data.find((category) => category.title === value)?.title
            : "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command style={{ width: "100%" }}>
          <CommandInput
            placeholder="Search category..."
            style={{ width: "100%" }}
          />
          <CommandList className="w-full ">
            <CommandEmpty style={{ width: "100%" }}>
              No category found.
            </CommandEmpty>
            <CommandGroup style={{ width: "100%" }}>
              {data.map((category) => (
                <CommandItem
                  key={category.id}
                  value={category.title}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  style={{ width: "100%" }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category.title ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {category.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
