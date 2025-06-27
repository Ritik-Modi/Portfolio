import handleCopyEmail from "@/utils/handleCopyEmail";
import handleCopyNumber from "@/utils/handleCopyNumber";
function ResumePage() {
  return (
    <div className="px-6 md:px-12 py-12 max-w-3xl text-white space-y-6 mx-auto">
      {/* Name */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
        RITIK MODI
      </h1>

      {/* Contact */}
      <div className="text-lightText text-base sm:text-lg leading-relaxed space-x-2">
        <a onClick={handleCopyEmail} className="hover:underline">
          📧 ritikmodi755@gmail.com
        </a>
        <a >|</a>
        <a onClick={handleCopyNumber}>📞 +91 8619856363</a>
        <a >|</a>

        <a>📍 Jaipur, Rajasthan</a>
      </div>

      {/* Role Summary */}
      <div>
        <h2 className="font-semibold mb-2 text-white text-lg sm:text-xl">
          🧑‍💻 Computer Science Engineer
        </h2>
        <p className="text-lightText text-base sm:text-lg leading-relaxed">
          Aspiring Full-Stack Developer with hands-on experience in scalable web
          applications using the MERN stack. Proficient in RESTful API
          development, authentication, cloud deployment, and database
          management. Actively seeking internships/full-time roles in full-stack
          development.
        </p>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="font-semibold mb-2 text-white text-lg sm:text-xl">
          🏆 Achievements
        </h2>
        <ul className="list-disc list-inside text-lightText text-base sm:text-lg leading-relaxed space-y-2">
          <li>
            Smart India Hackathon (SIH) Finalist: Ranked in top 50 out of 200+
            teams, built a prototype in 24 hours, reached top 20 in the next
            round, awarded certificates.
          </li>
          <li>
            Dev-Crest Coding Community: Chapter Lead at JECRC University.
            Organized coding workshops, competitions, and events for fellow
            students.
          </li>
        </ul>
      </div>

      {/* Education */}
      <div>
        <h2 className="font-semibold mb-2 text-white text-lg sm:text-xl">
          📝 Education
        </h2>
        <ul className="list-disc list-inside text-lightText text-base sm:text-lg leading-relaxed space-y-1">
          <li>
            <strong>B.Tech in Computer Science Engineering</strong> — JECRC
            University — CGPA: 7.5
          </li>
          <li>Class 12 (RBSE) — 93.80% (2021)</li>
          <li>Class 10 (RBSE) — 80.83% (2019)</li>
        </ul>
      </div>
    </div>
  );
}

export default ResumePage;
