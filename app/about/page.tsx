import Photo from "@/components/photo";
import LinkPrimitive from "@/components/link-primitive";
import { beliefs, bucketList, Status } from "@/content";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { Metadata } from "next/types";
import Section from "@/components/section";
import Gallery from "@/components/gallery";
import { ContactCopyItem } from "@/components/contact-link";

export const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "https://1λ.com/about",
  },
};

const bucketItem = cva(["self-start"], {
  variants: {
    status: {
      none: "",
      completed: ["line-through", "text-gray-11"],
      progress: [
        "before:content-['']",
        "before:w-1",
        "before:h-1",
        "before:bg-accent",
        "before:inline-flex",
        "before:-mt-px",
        "before:rounded-full",
        "before:animate-pulse",
        "before:mr-1",
        "flex",
        "items-center",
      ],
    },
  },
});

const BucketItem = ({
  item,
  status,
}: {
  item: string;
  status: keyof typeof Status;
}) => {
  return <li className={bucketItem({ status: Status[status] })}>{item}</li>;
};

const About = () => {
  return (
    <div className="justify-between md:flex animate-in fade-in duration-500">
      <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6">
        <Link
          href="/"
          className="flex gap-x-1 bg-accent text-gray-12 w-fit rounded-sm pl-0.5 pr-1 py-0.5 leading-none items-center hover:bg-accent/50 transition duration-100 mx-1 md:mx-4"
          aria-label="Back"
        >
          <ArrowLeft size={16} className="shrink-0" />
          <span className="text-sm font-medium">Index</span>
        </Link>
        <div className="my-1 md:my-4 lg:hidden">
          <Gallery
            photos={[
              {
                src: "/images/me1.jpg",
                alt: "",
              },
              {
                src: "/images/me2.jpg",
                alt: "",
              }
            ]}
          />
        </div>
        <Section heading="A bit more">
          <div className="space-y-4">
            <p>
              People will know me more by my online presence than in person. I build things on the web and share my thoughts on the internet.
            </p>

            <p>
              I enjoy reading and writing about technology and organizational behavior. I'm starting to get into running, learning Japanese, Korean, and Chinese.
            </p>
          </div>
        </Section>

      </div>
      <div className="hidden px-1 my-4 mt-10 lg:flex gap-x-2 md:px-4">
        <Photo
          src={"/images/me1.jpg"}
          alt=""
          priority
        />
        <Photo
          src={"/images/anothernight.jpg"}
          alt=""
          priority
        />
      </div>
    </div>
  );
};

/*
<Section heading="Beliefs">
  <ul className="flex flex-col gap-y-1">
    {beliefs.map((belief) => {
      return <li key={belief}>{belief}</li>;
    })}
  </ul>
</Section>
<Section heading="Bucket List">
  <ul className="flex flex-col gap-y-1">
    {bucketList.map((item) => {
      return (
        <BucketItem
          key={item.item}
          item={item.item}
          status={item.status}
        />
      );
    })}
  </ul>
</Section>
*/

export default About;
