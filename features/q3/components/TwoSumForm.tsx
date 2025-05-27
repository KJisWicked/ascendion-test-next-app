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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { twoSumFormSchema, TwoSumFormSchemaT } from "../data/schema";
import { toast } from "sonner";

const AdditionForm = () => {
  const [explanation, setExplanation] = useState<React.ReactNode>("");
  const [output, setOutput] = useState<string>("");
  const [input, setInput] = useState<React.ReactNode>("");

  const form = useForm<TwoSumFormSchemaT>({
    resolver: zodResolver(twoSumFormSchema),
    defaultValues: {
      numArray: "",
      targetSum: "",
    },
  });

  const onSubmit = (values: TwoSumFormSchemaT) => {
    const targetSum = parseInt(values.targetSum);
    const numArray = parseNumberArrayInput(values.numArray);

    if (numArray !== null) {
      const stringResult = numArray.join(", ");
      const result = findTwoSum(numArray, targetSum);

      setInput(
        <div className={cn("flex flex-col space-y-1")}>
          <div className={cn("text-md font-medium text-indigo-600")}>
            {`numbers = [${stringResult}]`}
          </div>
          <div className={cn("text-md font-medium text-green-600")}>
            {`target = ${targetSum}`}
          </div>
        </div>
      );

      if (result) {
        const index1 = result[0] - 1;
        const index2 = result[1] - 1;

        const num1 = numArray[index1];
        const num2 = numArray[index2];

        setExplanation(
          <>
            The sum of {num1} and {num2} is {targetSum}. Therefore, index
            <sub>(1)</sub> = {result[0]}, index <sub>(2)</sub> = {result[1]}. We
            return [{result[0]}, {result[1]}].
          </>
        );
        setOutput(`[${result[0]}, ${result[1]}]`);
      } else {
        setExplanation(
          `There are no two numbers that add up to ${targetSum} in the array.`
        );
        setOutput("-");
      }
    } else {
      toast.error("Invalid Number Array Input Format");
    }
  };

  const findTwoSum = (nums: number[], target: number) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        return [left + 1, right + 1];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return null; // Return null if no two numbers add up to the target after loop ends
  };

  const parseNumberArrayInput = (input: string): number[] | null => {
    try {
      const nums = input
        .split(",")
        .map((v) => v.trim())
        .filter((v) => v !== "")
        .map(Number);

      if (!nums.every((n) => !isNaN(n))) return null;
      return nums.sort((a, b) => a - b);
    } catch {
      return null;
    }
  };

  return (
    <section id="sum-form">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="numArray"
            render={({ field }) => (
              <FormItem className={cn("space-y-2")}>
                <FormLabel>Numbers Array (comma-separated)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Example: 1,2,3,4"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value;

                      // Allow empty input
                      if (value === "") {
                        field.onChange(value);
                        return;
                      }

                      // Allow digits, commas and minus signs
                      if (!/^[\d,-]*$/.test(value)) return;

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
            name="targetSum"
            render={({ field }) => (
              <FormItem className={cn("space-y-2")}>
                <FormLabel>Target Sum</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Example: 6"
                    {...field}
                    onChange={(e) => {
                      let value = e.target.value;

                      // Allow only digits and an optional leading minus
                      if (!/^-?\d*$/.test(value)) return;

                      // Prevent multiple leading zeros (after optional minus)
                      const isNegative = value.startsWith("-");
                      let numericPart = isNegative ? value.slice(1) : value;

                      if (
                        numericPart.length > 1 &&
                        numericPart.startsWith("0")
                      ) {
                        numericPart = numericPart.replace(/^0+/, "");
                        if (numericPart === "") numericPart = "0";
                      }

                      if (numericPart === "0" && isNegative) {
                        value = "0"; // disallow -0, convert to 0
                      } else {
                        value = isNegative ? "-" + numericPart : numericPart;
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
                setInput("");
                setOutput("");
                setExplanation("");
              }}
              className={cn("w-20 flex items-center justify-center")}
            >
              Reset
            </Button>
            <Button
              type="submit"
              className={cn("w-20 flex items-center justify-center")}
            >
              Solve
            </Button>
          </div>

          <div className={cn("flex flex-col space-y-5")}>
            <div>
              <div className={cn("flex flex-col justify-start")}>
                <div className={cn("text-md font-semibold")}>Input:</div>
                {input}
              </div>
            </div>

            <div className={cn("flex flex-col justify-start space-x-1")}>
              <div className={cn("text-md font-semibold")}>Output:</div>
              <div className={cn("text-md font-medium text-pink-600")}>
                {output}
              </div>
            </div>

            <div className={cn("flex flex-col justify-start space-y-1")}>
              <div className={cn("text-md font-semibold")}>Explanation:</div>
              <div className={cn("text-sm font-medium text-orange-600")}>
                {explanation}
              </div>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default AdditionForm;
