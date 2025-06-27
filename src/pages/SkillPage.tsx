import { skills} from "@/data/skillDetails";
import * as motion from "motion/react-client"
function SkillPage() {
  return (
    <div className="px-6 md:px-12 py-12 max-w-5xl mx-auto text-white space-y-10">
      {skills.map((section, i) => (
        <div key={i} className="space-y-4">
          <h2 className="text-white font-bold text-lg sm:text-xl">
            • {section.category}
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {section.items.map((skill, j) => (
              <motion.div
               whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
                key={j}
                className="flex flex-col items-center justify-center gap-2"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-md object-contain"
                />
                <span className="text-lightText text-sm text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillPage;
