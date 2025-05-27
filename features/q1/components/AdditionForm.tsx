"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { additionFormSchema, AdditionFormSchemaT } from "../data/schema";

const AdditionForm = () => {
  const [total, setTotal] = useState(0);

  const form = useForm<AdditionFormSchemaT>({
    resolver: zodResolver(additionFormSchema),
    defaultValues: {
      firstNumber: "",
      secondNumber: "",
    },
  });

  const onSubmit = async (values: AdditionFormSchemaT) => {
    const { firstNumber, secondNumber } = values;
    const total = parseInt(firstNumber) + parseInt(secondNumber);
    setTotal(total);
  };

  return (
    <section id="sum-form">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="firstNumber"
            render={({ field }) => (
              <FormItem className={cn("space-y-2")}>
                <FormControl>
                  <Input
                    placeholder="First Number"
                    {...field}
                    onChange={(e) => {
                      let value = e.target.value;

                      // Only allow digits
                      if (!/^\d*$/.test(value)) return;

                      // Prevent multiple leading zeros like "00", "000", etc.
                      if (value.length > 1 && value.startsWith("0")) {
                        value = value.replace(/^0+/, "");
                        if (value === "") value = "0"; // Fallback to single 0 if all leading zeros are removed
                      }

                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="secondNumber"
            render={({ field }) => (
              <FormItem className={cn("space-y-2")}>
                <FormControl>
                  <Input
                    placeholder="Second Number"
                    {...field}
                    onChange={(e) => {
                      let value = e.target.value;

                      // Only allow digits
                      if (!/^\d*$/.test(value)) return;

                      // Prevent multiple leading zeros like "00", "000", etc.
                      if (value.length > 1 && value.startsWith("0")) {
                        value = value.replace(/^0+/, "");
                        if (value === "") value = "0"; // Fallback to single 0 if all leading zeros are removed
                      }

                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className={cn("flex flex-row space-x-2 justify-end")}>
            <Button
              type="button"
              variant="destructive"
              onClick={() => {
                form.reset();
                setTotal(0);
              }}
              className={cn("w-20 flex items-center justify-center")}
            >
              Reset
            </Button>
            <Button
              type="submit"
              className={cn("w-20 flex items-center justify-center")}
            >
              Add
            </Button>
          </div>
          <div className={cn("flex flex-col justify-start space-y-1")}>
            <div className={cn("text-xl font-medium")}>Total:</div>
            <div className={cn("text-2xl font-semibold text-indigo-600")}>
              {total}
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default AdditionForm;
