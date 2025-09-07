export default function About() {
  return (
    <section id="about" className="flex flex-row gap-16 mx-12">
      <div className="flex flex-col p-4 rounded-xl gap-2">
        <p className="text-primary font-light text-shadow-md text-shadow-primary/30">
          Hello, my name is
        </p>
        <h1 className="text-3xl font-bold">Mohamed Abdeltawab</h1>
        <h1 className="text-2xl font-light">
          Build it simple. Test it fast. Learn from it always.
        </h1>
      </div>
      <p className="flex-1 opacity-80 text-wrap break-words text-lg">
        i am a Full-stack developer with TypeScript, Node.js, and React, with
        experience in PostgreSQL, API development, and real-time features. I
        build reliable, maintainable applications and deliver solutions that
        meet deadlines.
      </p>
    </section>
  );
}
