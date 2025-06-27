import { Separator } from "@/components/ui/separator";
import profileImage from "@/assets/profile.jpeg";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 3,
        scale: { type: "spring", bounce: 0.3, duration: 2},
      }}
      className="flex flex-col items-start justify-center flex-1 h-full ml-4 sm:ml-10 gap-5 px-4 sm:px-0"
    >
      <div>
        <img
          src={profileImage}
          alt=""
          className="rounded-full border-2 w-28 sm:w-36 md:w-40 lg:w-44"
        />
      </div>

      <div className="text-white flex flex-col font-extrabold w-72 md:w-64 text-5xl sm:text-6xl md:text-7xl gap-6 sm:gap-10">
        <div>
          <h1>RITIK</h1>
          <h1 className="text-end">MODI</h1>
        </div>
        <Separator />
      </div>

      <div className="text-lightText font-bold text-xl sm:text-2xl md:text-3xl space-y-2">
        <h1>Software Engineer</h1>
        <h1 className="pl-5 sm:pl-20">& Freelance Web Developer</h1>
      </div>
    </motion.div>
  );
}

export default HomePage;
