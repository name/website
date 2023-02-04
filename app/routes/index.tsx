import clsx from 'clsx';
import { Link } from "@remix-run/react";
import { Image } from "~/components/image";
import { Time } from "~/components/time";
import { CardHoverEffect, hoverClassName } from "~/components/hover-card";
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiKeybase, SiGithub, SiPrisma, SiMicrosoftazure, SiPhp, SiCsharp, SiYarn, SiGit, SiSpotify, SiMongodb, SiVisualstudiocode, SiDiscord, SiJavascript, SiGo, SiNodedotjs, SiTailwindcss, SiReact, SiRedis, SiDocker, SiTypescript, SiKubernetes, SiLinux } from "react-icons/si";

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
          <Link to="https://keybase.io/nagieth"
            className={clsx(
              'flex h-full items-center justify-center rounded-2xl bg-indigo-300 text-4xl text-white',
              hoverClassName,
            )}
          >
            <span className="sr-only">Keybase</span>
            <span className="transform-gpu transition group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
              <SiKeybase />
            </span>
          </Link>
        </CardHoverEffect>

        <div className="col-span-3 flex items-center justify-center rounded-2xl bg-fuchsia-200 p-6 text-white md:col-span-2">
          <div className="grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center">
            <SiTypescript size={24} />
            <SiDocker size={24} />
            <SiRedis size={24} />
            <SiKubernetes size={24} />
            <SiMicrosoftazure size={24} />
            <SiLinux size={24} />
            <SiPrisma size={24} />
            <SiReact size={24} />
            <SiTailwindcss size={24} />
            <SiNodedotjs size={24} />
            <SiGo size={24} />
            <SiJavascript size={24} />
            <SiYarn size={24} />
            <SiGit size={24} />
            <SiSpotify size={24} />
            <SiMongodb size={24} />
            <SiVisualstudiocode size={24} />
            <SiDiscord size={24} />
            <SiPhp size={24} />
            <SiCsharp size={24} />
          </div>
        </div>

        <Time></Time>

        <CardHoverEffect className="col-span-3 h-full md:col-span-3">
          <Link to="https://github.com/name"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
              hoverClassName,
            )}
          >
            <span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
              <Image
                src="me.jpg"
                alt="The Matrix scrolling characters effect"
                fit="cover"
                style={{ objectFit: 'cover' }}
                className="brightness-[0.7]"
              />
              <span className="absolute inset-0 bg-neutral-900/50" />
            </span>

            <span aria-hidden className="px-6 pt-6">
              <span className="flex justify-between">
                <SiGithub className="text-3xl" />
                <HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
              </span>
            </span>

            <span className="space-y-0.5 px-6 pb-6">
              <span className="block font-title font-bold">github</span>

              <span className="block text-sm">my open source work &amp; contributions</span>
            </span>
          </Link>
        </CardHoverEffect>
      </main>
    </section>
  );
}