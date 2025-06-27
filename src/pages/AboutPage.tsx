function AboutPage() {
  return (
    <div className="px-6 md:px-12 py-12 flex flex-col items-start text-white max-w-3xl mx-auto space-y-6">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
        Hey! I’m Ritik Modi,
      </h1>

      {/* Paragraphs */}
      <p className="text-lightText sm:text-lg leading-relaxed">
        A dedicated Software Engineer and Freelance Web Developer, currently in my 4th year of B.Tech in Computer Science at JECRC University.
      </p>

      <p className="text-lightText sm:text-lg leading-relaxed">
        I specialize in building modern, responsive, and high-performance web applications using the MERN stack, TypeScript, and a wide range of web technologies. Whether it's designing pixel-perfect UIs or developing robust backend systems, I love transforming ideas into real-world digital solutions.
      </p>

      <p className="text-lightText sm:text-lg leading-relaxed">
        With a strong foundation in problem-solving, data structures, and algorithms, I thrive on challenges and continuously seek opportunities to learn and grow. I'm also actively working on freelance projects, helping businesses and startups build and scale their online presence.
      </p>

      <p className="text-lightText sm:text-lg leading-relaxed">
        When I’m not coding, you’ll find me exploring new tech trends or optimizing code just for fun.
      </p>

      {/* Final call to action */}
      <a href="/contact">
      <p className="text-blue-400 sm:text-lg font-semibold border border-blue-500 px-2 py-1 rounded">
        Let’s build something awesome together 🚀
      </p>
      </a>
    </div>
  );
}

export default AboutPage;
