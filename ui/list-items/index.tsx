"use client";
import { getPath } from "@/app/lib/assets";
import Image from "next/image";

interface Box1Props {
  index: number;
  text: string;
  showArrow?: boolean;
}

export const ListItem1 = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-4.5">
      <Image
        src={getPath("icon-check.svg")}
        alt="icon-check.svg"
        width={28}
        height={28}
      />
      <p className="text-preset-5 text-neutral-700">{text}</p>
    </div>
  );
};

export const ListItem2 = ({ index, text, showArrow = true }: Box1Props) => {
  return (
    <div className="w-full lg:w-[226.5px] flex flex-col gap-6">
      <div className="flex justify-between">
        <p className="text-preset-6 text-neutral-900 h-10 w-10 rounded-4 border-2 border-neutral-900 flex items-center justify-center">
          {index}
        </p>
        {showArrow && (
          <Image
            src={getPath("pattern-arrow.svg")}
            alt="pattern-arrow.svg"
            width={76.74}
            height={20.51}
            className="rounded-lg hidden lg:block"
          />
        )}
      </div>
      <div>
        <p className="text-preset-6 text-neutral-900">{text}</p>
      </div>
    </div>
  );
};
