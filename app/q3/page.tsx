import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TwoSumForm from "@/features/q3/components/TwoSumForm";
import { cn } from "@/lib/utils";
import React from "react";

const Q3 = () => {
  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0F0F1A] via-[#1A1A2E] to-[#202040]"
      )}
    >
      <Card className={cn("w-full max-w-md shadow-lg border-none pt-3 px-3")}>
        <CardHeader className="flex flex-col items-center text-center space-y-7 pb-10">
          <h1 className={cn("text-2xl font-semibold")}>Two Sum II</h1>
        </CardHeader>
        <CardContent>
          <TwoSumForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Q3;
