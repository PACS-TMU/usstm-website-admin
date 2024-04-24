import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center max-w-4xl mx-auto">
      <div className="flex gap-8 justify-center items-center">
        <a
          href="https://pacstmu.ca"
          target="_blank"
          rel="noreferrer"
          className="w-1/2 md:w-1/4 flex justify-center items-center"
        >
          <Image
            src="/pacs.png"
            alt="PACS Logo"
            width={500}
            height={500}
            className="w-full md:w-3/4 h-auto "
          />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a href="https://usstm.ca"
          target="_blank"
          rel="noreferrer"
          className="w-1/2 md:w-1/4">
          <Image
            src="/usstm.png"
            alt="USSTM Logo"
            width={500}
            height={500}
            className="w-3/4 md:w-1/2 h-auto md:ml-4"
          />
        </a>
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Manage the USSTM Website by just adding{" "}
        <span
          className="font-bold"
        >
          admin
        </span>{" "}
        to the{" "}
        <span
          className="font-bold"
        >
          URL
        </span>.
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-8" />
    </div>
  );
}
