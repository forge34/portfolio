import Image from "next/image";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="flex flex-col  items-center py-12 px-8 text-center"
      >
        <div className="max-w-3xl flex flex-col gap-4">
          <p className="text-primary font-light text-shadow-md text-shadow-primary/30">
            Hello, my name is
          </p>
          <h1 className="text-4xl font-bold">Mohamed Abdeltawab</h1>
          <blockquote className="text-xl font-light italic opacity-90">
            “Build it simple. Test it fast. Learn from it always.”
          </blockquote>

          <p className="opacity-80 text-lg leading-relaxed">
            I am a Full-stack developer specializing in TypeScript, Node.js, and
            React, with experience in PostgreSQL, API development, and real-time
            features. I build reliable, maintainable applications and deliver
            solutions that meet deadlines.
          </p>

          <div className="flex flex-col gap-4 mt-8">
            <h3 className="text-2xl font-semibold">Technologies I use</h3>
            <div className="flex flex-wrap justify-center gap-5">
              <Image src="/react-logo.svg" alt="React" width={32} height={32} />
              <Image src="/node.svg" alt="Node.js" width={48} height={48} />
              <Image
                src="/expresss.svg"
                alt="Express"
                width={32}
                height={32}
                className="invert-100"
              />
              <Image
                src="/next.svg"
                alt="Next.js"
                width={64}
                height={64}
                className="invert-100"
              />
              <Image src="/docker.svg" alt="Docker" width={32} height={32} />
              <Image
                src="/github.svg"
                alt="Github"
                width={48}
                height={12}
                className="scale-75"
              />
              <Image src="/postgres.svg" alt="Github" width={32} height={32} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-left">
            <div className="p-4 bg-primary/10 rounded-lg">
              <h4 className="font-semibold mb-2">Back-end APIs</h4>
              <p className="text-sm opacity-80">
                Building scalable REST with Node.js & Express.
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
        </div>
      </section>
    </>
  );
}
