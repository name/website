import { Link } from "@remix-run/react";
import React from "react";
import { Image } from "~/components/image";
import clsx from 'clsx';
import { CardHoverEffect, hoverClassName } from "~/components/hover-card";
import { SiLinkedin, SiKeybase } from "react-icons/si";


export default function Index() {
  return (
    <section className="body-font font-inter">
      <main className="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-16">
        <div className="p-200 col-span-4 flex items-center justify-center overflow-hidden rounded-2xl bg-orange-200 dark:border-orange-500 dark:bg-orange-500/20 dark:backdrop-blur-2xl md:col-span-4 md:h-52">
          <div className="flex flex-col items-center space-y-4 py-8 px-6 md:flex-row md:space-y-0 md:space-x-4">
            <Image src="me.jpg" alt="me" fit="cover" height={96}
              width={96}
              className="h-24 w-24 rounded-full border border-orange-500 object-cover" />

            <div className="space-y-1">
              <h1 className="text-center font-title text-xl font-bold tracking-tighter text-orange-900 dark:text-orange-300 dark:text-glow-orange-500/50 md:text-left">
                charlie maddex
              </h1>

              <p className="text-center text-orange-800 dark:text-orange-300/95 dark:text-glow-orange-500/50 md:text-left">
                21 y/o cloud architect
              </p>
              <p>
                <Link to="/blog" className="text-center text-orange-800 dark:text-orange-300/80 dark:text-glow-orange-500/30 md:text-left">blog ↗️</Link>{" "}
              </p>
            </div>
          </div>
        </div>

        <CardHoverEffect className="col-span-2 h-full">
          <Link to="https://www.linkedin.com/in/charliemaddex/"
            className={clsx(
              'flex h-full items-center justify-center rounded-2xl bg-blue-500 text-4xl text-white',
              hoverClassName,
            )}
          >
            <span className="sr-only">LinkedIn</span>
            <span className="transform-gpu transition group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
              <SiLinkedin />
            </span>
          </Link>
        </CardHoverEffect>

      </main>
    </section>
  );
}