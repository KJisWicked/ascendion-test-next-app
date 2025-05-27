"use client";

import { useEffect } from "react";
import { cn } from "../lib/utils";

type Props = {
  error: Error & { digest?: string };
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={cn("flex items-center justify-center h-screen bg-black")}>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Something Went Wrong
        </h1>
        <button
          onClick={reset}
          className="px-6 py-2 text-black bg-white rounded-lg"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
