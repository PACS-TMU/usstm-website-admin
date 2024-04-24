import Link from "next/link";
import Step from "./Step";

export default function Instructions() {
  return (
    <div className="max-w-4xl w-full">
      <ol className="flex flex-col gap-6 w-full">
        <Step title="Admin Console">
          <p>
            Head over to the 
          </p>
        </Step>
      </ol>
    </div>

  );
}
