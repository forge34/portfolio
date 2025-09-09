"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section
      id="contact"
      className="py-16 flex flex-col items-center justify-center gap-10"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="opacity-80">Let’s build something amazing together 🚀</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-lg w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className="px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />

        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/80 transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="flex gap-6">
        <Link
          href="https://github.com/forge34"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            width={36}
            height={36}
            className="hover:opacity-80 transition"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/moh-abdeltawab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={36}
            height={36}
            className="hover:opacity-80 transition"
          />
        </Link>
      </div>
    </section>
  );
}
