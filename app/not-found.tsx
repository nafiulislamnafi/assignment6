import Link from "next/link";

const NotFound = () => {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-313.25 items-center justify-center px-6 py-16">
      <div className="text-center">

        <p className="text-sm font-bold uppercase tracking-widest text-[#C2F800]">
          404
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase text-white sm:text-5xl">
          WORKOUT NOT FOUND
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#92949B]">
          The page or workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-md bg-[#C2F800] px-6 py-3 text-xs font-bold text-[#0C0D10]"
        >
          BACK TO WORKOUTS
        </Link>

      </div>
    </section>
  );
};

export default NotFound;