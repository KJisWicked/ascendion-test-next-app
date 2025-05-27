import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AdditionForm from "@/features/q1/components/AdditionForm";
import { cn } from "@/lib/utils";
import React from "react";

const Q1 = () => {
  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0F0F1A] via-[#1A1A2E] to-[#202040]"
      )}
    >
      <Card className={cn("w-full max-w-md shadow-lg border-none pt-3 px-3")}>
        <CardHeader className="flex flex-col items-center text-center space-y-7 pb-10">
          <h1 className={cn("text-2xl font-semibold")}>Adding Two Numbers</h1>
        </CardHeader>
        <CardContent>
          <AdditionForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Q1;
