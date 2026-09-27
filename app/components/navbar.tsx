"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useFitlog } from "../context/fitlog-context";
import logo from "../assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, saved } = useFitlog();

  const isWorkoutsActive =
    pathname === "/" ||
    pathname.startsWith("/workouts");

  const isMyPlanActive =
    pathname === "/my-plan";

  return (
    <nav className="border-b border-[#181A20] bg-[#0C0D10]">
      <div className="mx-auto flex min-h-19 max-w-313.25 flex-wrap items-center justify-between gap-x-4 px-4 sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src={logo}
            alt="FitLog logo"
            width={32}
            height={32}
            priority
          />

          <span className="text-[18px] font-bold tracking-wide text-white sm:text-[20px]">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="order-3 flex w-full items-center justify-center gap-1 pb-3 sm:order-0 sm:w-auto sm:pb-0 md:gap-2">

          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-xs font-medium transition-colors sm:px-5 sm:text-[13px] ${
              isWorkoutsActive
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#92949B] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-xs font-medium transition-colors sm:px-5 sm:text-[13px] ${
              isMyPlanActive
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#92949B] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-6">

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5"
          >
            <span className="text-xs text-[#D5D6DA] sm:text-[13px]">
              Plan
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C2F800] px-1.5 text-[11px] font-bold text-[#0C0D10]">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5"
          >
            <span className="text-xs text-[#92949B] sm:text-[13px]">
              Saved
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#30333B] px-1.5 text-[11px] text-[#92949B]">
              {saved.length}
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;