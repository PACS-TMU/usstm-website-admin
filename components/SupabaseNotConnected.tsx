"use client";

import CopiedMessage from "./CopiedMessage";
import Step from "./Step";
import { useState } from "react";
import CodeBlock from "./CodeBlock";

export default function SupabaseNotConnected() {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("pacs@usstm.ca,devops@pacstmu.ca,president@pacstmu.ca");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 5000);
  };

  return (
    <div className="max-w-4xl">
      <ol className="flex flex-col gap-6 animate-in flex-1 opacity-0 px-3 w-full">
        <Step title="System is down!">
          <p>
            You likely will not be able to see the login button on the top right of the page.
            This is because the Content-Management-System <CodeBlock>CMS</CodeBlock> is down. Please contact the PACS team to get it back up.
          </p>
        </Step>

        <Step title="Contact the PACS Team">
          <p>
            Contact{" "}
            <button
              className="underline text-highlight-dark hover:text-highlight ease-in-out duration-200"
                onClick={handleClick}
            >
              the PACS President and DevOps Lead:
            </button>{" "}
          </p>
          <ul className="list-disc my-2">
            <li className="mx-8">
              President: {" "}
              <button
                className="underline text-highlight-dark hover:text-highlight ease-in-out duration-200"
                onClick={handleClick}
              >
                president@pacstmu.ca
              </button>
            </li>
            <li className="mx-8">
              DevOps Lead: {" "}
              <button
                className="underline text-highlight-dark hover:text-highlight ease-in-out duration-200"
                onClick={handleClick}
              >
                devops@pacstmu.ca
              </button>
            </li>
          </ul>
          <p>
            so we can fix this as soon as possible.
          </p>
        </Step>

        <Step title="Sit tight and wait!">
          <p>
            We will fix the issue as soon as possible and let you know when the <CodeBlock>CMS</CodeBlock> is back up!
          </p>
        </Step>
      </ol>

      <CopiedMessage isCopied={isCopied} />
    </div>
  );
}
