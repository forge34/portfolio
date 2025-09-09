import Image from "next/image";

type ProjectCardProps = {
  title: string;
  imgUrl: string;
  description: string;
  githubLink?: string;
  skills?: string[];
};

export default function ProjectCard({
  title,
  description,
  githubLink,
  imgUrl,
  skills = [],
}: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-lg  hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="relative w-full h-48">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover object-top rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-3 px-4 py-3">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-start font-light opacity-80 leading-relaxed">
          {description}
        </p>
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary hover:brightness-135 border border-primary/40"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start px-4 py-2 text-sm font-medium rounded-md bg-slate-800/60 hover:bg-slate-700/70 border border-white/10 transition-colors"
          >
            Go to GitHub
          </a>
        )}
      </div>
    </div>
  );
}
