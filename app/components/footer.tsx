import Image from "next/image";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#181A20] bg-[#0C0D10]">
      <div className="mx-auto flex min-h-24 max-w-313.25 flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">

        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog logo"
            width={24}
            height={24}
          />

          <span className="text-xs font-bold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        <p className="text-center text-[11px] text-[#6F737D] sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;