import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="lg:px-20 pt-8">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Image
            src="images/uifry.svg"
            width={100}
            height={20}
            alt="uifry financial bank"
            priority={true}
          />
          <nav className="flex justify-between items-center gap-6 pl-6 font-bold">
            <Link href="#home">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#features">Features</Link>
          </nav>
        </div>
        <div>
          <button>кнопка</button>
        </div>
      </div>
    </section>
  );
}
