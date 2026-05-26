"use client";
import { getPath } from "@/app/lib/assets";
import Image from "next/image";
import Button from "../buttons";

interface Box1Props {
  index: number;
  text: string;
  showArrow?: boolean;
}

export const ListItem1 = ({
  text,
  imageDimention,
}: {
  text: string;
  imageDimention?: number;
}) => {
  return (
    <div className="flex items-center gap-4.5">
      <Image
        src={getPath("icon-check.svg")}
        alt="icon-check.svg"
        width={imageDimention || 28}
        height={imageDimention || 28}
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

export const ListItem3 = ({
  title,
  price,
  info,
  isPro = false,
  button,
}: {
  title: string;
  price: string;
  info: string[];
  isPro?: boolean;
  button: {
    label: string;
    action: () => void;
  };
}) => {
  return (
    // <div className={`w-full lg:w-[350px] h-max max-h-[${isPro ? proMaxheight : maxheight}px] lg:max-h-[${isPro ? proMaxheight : maxheight}px]  bg-white rounded-lg p-6 flex flex-col gap-6 ${isPro ? "border-2 border-neutral-900" : "border border-neutral-300"}`}>
    <div
      className={`p-6 border-2 border-neutral-200 rounded-lg 
       w-full sm:w-[340px]
      ${isPro ? " min-[1353px]:py-10 min-[1353px]:px-6" : "p-6"}`}
    >
      <div className="flex flex-col gap-6">
        <p className="text-preset-4 text-neutral-900">{title}</p>
        <span className="flex items-center gap-2">
          <p className="text-preset-3 text-neutral-900">{price}</p>
          {Number(price) > 0 && (
            <p className="text-preset-5 text-neutral-900">/month</p>
          )}
        </span>
        <div className="w-full h-px bg-neutral-200" />
        <div className="flex flex-col gap-4">
          {info.map((item, index) => (
            <ListItem1 key={index} text={item} imageDimention={24} />
          ))}
        </div>
      </div>
      <Button
        label={button.label}
        onClick={button.action}
        className="w-full mt-8"
      />
    </div>
  );
};
