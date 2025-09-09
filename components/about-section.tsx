import Image from "next/image";

const technologies = [
  { name: "React", src: "/react-logo.svg", size: 32 },
  { name: "Node.js", src: "/node.svg", size: 48 },
  { name: "Express.js", src: "/expresss.svg", size: 32, invert: true },
  { name: "Next.js", src: "/next.svg", size: 64, invert: true },
  { name: "Docker", src: "/docker.svg", size: 32 },
  { name: "GitHub", src: "/github.svg", size: 32, scale: 0.75 },
  { name: "PostgreSQL", src: "/postgres.svg", size: 32 },
];

export default function About() {
  const highlights = [
    "Built a real-time chat app.",
    "Developed and deployed multiple full-stack applications with Node.js & React",
    "Contributor to open-source projects on GitHub",
  ];

  return (
    <section id="about" className="flex flex-col items-center py-24 px-8">
      <div className="max-w-3xl flex flex-col gap-6">
        <p className="text-primary font-light text-shadow-md text-shadow-primary/30">
          Hello, my name is
        </p>
        <h1 className="text-3xl font-bold">Mohamed Abdeltawab</h1>
        <blockquote className="text-lg font-light italic opacity-90">
          “Build it simple. Test it fast. Learn from it always.”
        </blockquote>

        <p className="text-2xl leading-relaxed">
          I am a Full-stack developer passionate about building scalable,
          maintainable, and reliable web applications. I enjoy solving complex
          problems and turning ideas into real-world solutions that users love.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-3">Highlights</h3>
          <ul className="list-disc list-inside space-y-1 text-lg">
            {highlights.map((item, idx) => (
              <li key={idx} className="opacity-90">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-3">Technologies I use</h3>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-full shadow-sm hover:bg-primary/20 transition-colors"
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={tech.size}
                  height={tech.size}
                  className={`${tech.invert ? "invert-100" : ""} ${
                    tech.scale ? `scale-[${tech.scale}]` : ""
                  }`}
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-4 bg-primary/10 rounded-lg">
            <h4 className="font-semibold mb-2">Back-end APIs</h4>
            <p className="text-sm opacity-80">
              Building scalable RESTful APIs with Node.js & Express.
            </p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg">
            <h4 className="font-semibold mb-2">Real-time Features</h4>
            <p className="text-sm opacity-80">
              WebSocket-powered chat, notifications, and live updates.
            </p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg">
            <h4 className="font-semibold mb-2">Databases</h4>
            <p className="text-sm opacity-80">
              PostgreSQL schema design, optimization, and migrations.
            </p>
          </div>
        </div>

        <p className="mt-8 text-lg leading-relaxed">
          I am currently exploring DevOps practices and cloud deployments,
          focusing on making development workflows more efficient . I enjoy
          collaborating with teams, participating in code reviews, and
          constantly learning new technologies to stay ahead in the fast-paced
          web development world.
        </p>

        <p className="mt-6 text-lg font-medium">
          Feel free to{" "}
          <a href="#contact" className="text-primary underline">
            reach out
          </a>
          or check my
          <a
            href="https://github.com/yourusername"
            className="text-primary underline"
            target="_blank"
          >
            GitHub
          </a>{" "}
          to explore my work.
        </p>
      </div>
    </section>
  );
}
