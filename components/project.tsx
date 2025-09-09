import ProjectCard from "./ui/project-card";

export default function Project() {
  return (
    <section id="projects" className="py-12 px-16 text-center">
      <h2 className="text-4xl font-bold mb-6">My Projects</h2>
      <p className="text-lg opacity-80 mb-12">
        A selection of applications and experiments I’ve built using TypeScript,
        Node.js, React, and more.
      </p>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
        <ProjectCard
          title="Full stack messaging app"
          description="A real-time chat app where users can sign up, log in, and instantly exchange messages using modern web technologies."
          imgUrl="/app1.png"
          githubLink="https://github.com/forge34/messaging-app-frontend"
          skills={["React", "NodeJs", "Web sockets", "Postgres"]}
        />
        <ProjectCard
          title="Game collection website"
          description="A platform to create, share, and play custom games with an intuitive interface and real-time collaboration features."
          imgUrl="/app2.png"
          githubLink="https://github.com/forge34/game-nest"
          skills={["React", "NodeJs", "IGDB", "Postgres" , "Express" , "ShadCN/UI"]}
        />
      </div>
    </section>
  );
}
