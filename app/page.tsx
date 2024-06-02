import React, { Suspense } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Copy,
} from "@phosphor-icons/react/dist/ssr/index";
import { Accordion, AccordionItem } from "@/components/collapsible";
import { MusicCard, ReadingCard } from "@/components/hover-card";
import Contact, {
  ContactCopyItem,
  ContactItem,
} from "@/components/contact-link";
import { experiences, photos } from "@/content";
import LinkPrimitive from "@/components/link-primitive";
import getLastPlayed from "@/lib/spotify";
import Filter from "bad-words";
import Gallery from "@/components/gallery";
import Section from "@/components/section";
import Skeleton from "@/components/skeleton";

export const dynamic = "force-dynamic";

const Photography = () => {
  return (
    <>
      <Section heading="Photography" className="shrink-0">
        <div className="flex flex-col gap-y-1.5">
          <p>
            I enjoy taking photos, here are a few of my recent ones.
          </p>
        </div>
      </Section>
      <Gallery photos={photos} />
    </>
  );
};

const Items = () => {
  return (
    <Section>
      <h1 className="font-medium flex items-center gap-x-1.5">
        <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
        Charlie (@cunjur)
      </h1>
      <p className="mt-1 text-gray-9">
        Infrastructure, Software Engineer, and Machine Learning.
      </p>
      <div className="flex flex-col mt-4 gap-y-2">
        <p>
          I like building simple software to solve complex problems. My <LinkPrimitive
            href="https://twitter.com/messages/compose?recipient_id=422058392"
            external
          >DM's</LinkPrimitive> are open.
        </p>
        <div className="flex gap-x-6 mt-2 items-center">
          <LinkPrimitive href="/about" variant="route">
            Learn a bit more
            <ArrowRight size={12} aria-hidden={true} />
          </LinkPrimitive>
          <ContactItem icon={<Copy />} className="text-sm">
            <ContactCopyItem title="Email me" copy="charlie@multiorb.net" />
          </ContactItem>
        </div>
      </div>
    </Section>
  );
};

const Experience = () => {
  return (
    <Section heading="Experience">
      <Accordion className="flex flex-col w-[calc(100%+16px)] -mx-2">
        {experiences.map((role) => (
          <React.Fragment key={role.company}>
            <AccordionItem
              role={role.role}
              company={role.company}
              range={role.range}
              description={role.description}
              skills={role.skills}
            />
            <div className="h-px bg-gray-12 w-[calc(100%-16px)] mx-auto" />
          </React.Fragment>
        ))}
      </Accordion>
    </Section>
  );
};

const Projects = () => {
  return (
    <Section heading="Projects">
      <ul className="flex flex-col gap-y-6">
      <li>
          <p>
            <LinkPrimitive
              href="https://multiorb.net"
              external
            >
              Multiorb
            </LinkPrimitive>{" "}
            is a platform to help businesses access and manage their services in a more efficient way.
          </p>
          <div className="flex items-center mt-3 gap-x-4">
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://multiorb.net"
              target="_blank"
            >
              Live{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
            <a
              href="https://github.com/multiorb"
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>

        <li>
          <p>
            <LinkPrimitive href="https://github.com/name/obsidian-template" external>
              Obsidian-Template
            </LinkPrimitive>{" "}
            is my template when starting a new Obisdian.md vault.
          </p>
          <div className="flex items-center mt-2 gap-x-4">
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://github.com/name/obsidian-template"
              target="_blank"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>
        
        <li>
          <p>
            <LinkPrimitive
              href="https://github.com/name/safe-transmission"
              external
            >
              Safe Transmission
            </LinkPrimitive>{" "}
            is used to protect transmissions of data over HTTP by sending encrypted json data between client and server.
          </p>
          <div className="flex items-center mt-3 gap-x-4">
            <a
              href="https://github.com/name/safe-transmission"
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>
      </ul>
    </Section>
  );
};

const Currently = async () => {
  const { data: song } = await getLastPlayed();
  const filter = new Filter();

  const recent = song.is_playing ? song.item : song.items[0].track;
  const track = {
    title: filter.clean(recent.name),
    artist: recent.artists
      .map((_artist: { name: string }) => _artist.name)
      .shift(),
    songUrl: recent.external_urls.spotify,
    coverArt: recent.album.images[0].url,
    previewUrl: recent.preview_url,
  };

  return (
    <>
      <p>
        Listening to{" "}
        <MusicCard {...track}>
          <LinkPrimitive href={track.songUrl} external popover>
            {track.title}
          </LinkPrimitive>
        </MusicCard>{" "}
        by {track.artist}.
      </p>
    </>
  );
};

const Footer = () => {
  return (
    <Section>
      <div className="max-w-xs mt-12 text-sm text-gray-11 md:mt-0">
        You can view the code {" "} <LinkPrimitive href="https://github.com/name/website" external>here</LinkPrimitive>.
      </div>
    </Section>
  );
};

export default function Home() {
  return (
    <div className="justify-center md:flex animate-in fade-in duration-500">
      <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6">
        <Items />
        <Section heading="Recently">
          <Suspense
            fallback={
              <div className="flex flex-wrap items-center gap-x-1">
                Listening to <Skeleton className="inline-flex w-24 h-4" /> by{" "}
                <Skeleton className="inline-flex w-24 h-4" />.
              </div>
            }
          >
            <Currently />
          </Suspense>
        </Section>
        <Contact />
        <Experience />
        <Projects />
        <Photography />
        <Footer />
      </div>
    </div>
  );
}
