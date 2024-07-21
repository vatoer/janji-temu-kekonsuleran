import Image from "next/image";
import Link from "next/link";
import TopBarCollapseButton from "./topbar-collapse-button";

const TopBar = () => {
  return (
    <div className="bg-slate-100 w-full h-[76px] flex flex-row fixed inset-y-0 z-50">
      <div className="flex flex-row h-full gap-2 w-16 md:w-64 items-center ">
        <TopBarCollapseButton />
        <div className="h-full w-full hidden md:block">
          <Link
            href={"/"}
            className="realtive flex flex-row text-xl font-bold font-sans h-full justify-center items-center gap-2"
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={102}
              height={36}
              objectFit="contain" // Use "cover" to fill the area, "contain" to ensure the image fits within the dimensions.
              className="h-full absolute -top-2 left-12"
            />
          </Link>
        </div>
      </div>
      <div className="w-full p-2 md:p-0">NAVBAR HERE</div>
    </div>
  );
};

export default TopBar;
