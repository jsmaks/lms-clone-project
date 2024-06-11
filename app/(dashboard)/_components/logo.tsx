import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="cursor-pointer">
      <Image
        className="inline-block h-[130px] w-[130px]"
        alt="logo"
        src="/logo.svg"
        priority
        width={130}
        height={130}
      />
    </Link>
  );
};

export default Logo;
