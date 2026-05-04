"use client";
import { getPath, IMAGES } from "@/app/lib/assets";
import Image from "next/image";
import "../../app/styles/home.css";
import Button from "../buttons";
import ListItem from "../labels";
import CardWrapper from "../wrapper";
export const Landing = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-20 lg:gap-30">
      <CardWrapper isHero>
        <Image
          src={getPath("logo.svg")}
          alt="logo.svg"
          width={192.86}
          height={36}
          className="lg:mb-20 mb:mb-16 mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex-1">
            <h1 className="text-preset-1 mb-6 bg-gradient-text">
              Join the ultimate tech book club
            </h1>
            <p className="text-preset-5 text-neutral-700 mb-8">
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>

            <Button
              label="REVIEW MEMBERSHIP OPTIONS"
              iconPath={IMAGES.arrowDown}
            />
            <div className="flex gap-3 mt-5 items-center">
              <Image
                src={getPath("image-avatars.webp")}
                alt="image-avatars.webp"
                width={110}
                height={40}
                className="h-10"
              />
              <div className="flex flex-col gap-1">
                <div className="flex">
                  <Image
                    src={getPath("icon-star.svg")}
                    alt="icon-star.svg"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={getPath("icon-star.svg")}
                    alt="icon-star.svg"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={getPath("icon-star.svg")}
                    alt="icon-star.svg"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={getPath("icon-star.svg")}
                    alt="icon-star.svg"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={getPath("icon-star.svg")}
                    alt="icon-star.svg"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={getPath("icon-star.svg")}
                    alt="icon-star.svg"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-preset-7 text-neutral-700 ">
                  200+ developers joined already
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={getPath("image-hero-desktop.webp")}
              alt="image-hero-desktop.webp"
              width={540}
              height={606}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </CardWrapper>
      <CardWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src={getPath("image-read-together-desktop.webp")}
              alt="image-read-together-desktop.webp"
              width={560}
              height={520}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-preset-2 text-neutral-900 mb-6">
              Read together, grow together
            </h1>
            <div className="flex flex-col gap-6">
              <ListItem text="Monthly curated tech reads selected by industry experts" />
              <ListItem text="Virtual and in-person meetups for deep-dive discussions" />
              <ListItem text="Early access to new tech book releases" />
              <ListItem text="Author Q&A sessions with tech thought leaders" />
            </div>
          </div>
        </div>
      </CardWrapper>
      <CardWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex-1">
            <h1 className="text-preset-2 text-neutral-900 mb-6">
              Not your average book <span className="highlight-word">club</span>
            </h1>
            <p className="text-preset-5-semibold text-neutral-700">
              Connect with a community that speaks your language - from{" "}
              <strong>Python</strong> to <strong>TypeScript</strong> and
              everything in between. Our discussions blend technical depth with
              practical applications.
            </p>
          </div>
          <div>
            <Image
              src={getPath("image-not-average-desktop.webp")}
              alt="image-not-average-desktop.webp"
              width={560}
              height={520}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};
