import { getPath } from "@/app/lib/assets";
import Image from "next/image";

const ListItem = ({ text }: { text: string }) => {
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

export default ListItem;
