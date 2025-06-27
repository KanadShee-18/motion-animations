import { SectionNav } from "@/components/section-nav";

const page = () => {
  return (
    <div className="relative text-white overflow-x-hidden scroll-smooth">
      <div className="flex flex-col items-center justify-center gap-y-3 py-5 ">
        <h1 className="text-4xl md:text-5xl text-indigo-300 font-bold text-center">
          Motion.Div used Animated Components
        </h1>
        <p className="mt-2 text-lg text-slate-400">
          This is a Next.js application showcasing motion design with Motion.dev
        </p>
        <div>
          <a
            target="_blank"
            href="https://motion.dev"
            className="text-blue-400 hover:underline"
          >
            Learn more about Motion Dev
          </a>
        </div>
      </div>
      <div className="px-10">
        <SectionNav />
      </div>
    </div>
  );
};
export default page;
