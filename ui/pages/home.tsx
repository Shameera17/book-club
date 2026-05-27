"use client";
import { getPath, IMAGES } from "@/app/lib/assets";
import Image from "next/image";
import "../../app/styles/home.css";
import Button from "../buttons";
import { ListItem1, ListItem2, ListItem3 } from "../list-items";
import { CardWrapper, CardWrapper1 } from "../wrapper";
export const Landing = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-20 lg:gap-30">
      <CardWrapper isHero isPatternBackground>
        <Image
          src={getPath("logo.svg")}
          alt="logo.svg"
          width={192.86}
          height={36}
          className="lg:mb-20 mb:mb-16 mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
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
              className="rounded-lg w-full h-full min-1022:[w-540px] object-cover object-top"
              style={{ maxHeight: "606px" }}
            />
          </div>
        </div>
      </CardWrapper>
      <CardWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src={getPath("image-read-together-desktop.webp")}
              alt="image-read-together-desktop.webp"
              width={560}
              height={520}
              className="rounded-lg w-full h-full min-1022:[w-540px] min-[580px]:max-[1022px]:object-cover min-[580px]:max-[1022px]:object-top"
              style={{ maxHeight: "520px" }}
            />
          </div>
          <div className="flex-1">
            <h1 className="text-preset-2 text-neutral-900 mb-6">
              Read together, grow together
            </h1>
            <div className="flex flex-col gap-6">
              <ListItem1 text="Monthly curated tech reads selected by industry experts" />
              <ListItem1 text="Virtual and in-person meetups for deep-dive discussions" />
              <ListItem1 text="Early access to new tech book releases" />
              <ListItem1 text="Author Q&A sessions with tech thought leaders" />
            </div>
          </div>
        </div>
      </CardWrapper>
      <CardWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
          <div className="relative">
            <Image
              src={getPath("image-not-average-desktop.webp")}
              alt="image-not-average-desktop.webp"
              width={560}
              height={520}
              className="rounded-lg w-full h-full min-1022:[w-540px] object-cover min-[580px]:max-[1022px]:object-top"
              style={{ maxHeight: "520px" }}
            />
          </div>
        </div>
      </CardWrapper>
      <CardWrapper>
        <CardWrapper1 isPatternBackground className1="rounded-12">
          <h1 className="w-full lg:w-lg lg:mx-auto text-preset-2 text-neutral-900 text-center">
            Your tech reading journey
          </h1>
          <div className="flex flex-col lg:flex-row gap-12 mt-8 md:mt-12 lg:mt-16 justify-center">
            <ListItem2 index={1} text="Choose your membership tier" />
            <ListItem2 index={2} text="Get your monthly book selection" />
            <ListItem2 index={3} text="Join our discussion forums" />
            <ListItem2
              index={4}
              text="Attend exclusive meetups"
              showArrow={false}
            />
          </div>
        </CardWrapper1>
      </CardWrapper>
      <CardWrapper>
        <h1 className="w-full lg:mx-auto text-preset-2 text-neutral-900 text-center">
          Membership options
        </h1>
        <div className="flex  flex-wrap gap-6 items-center  justify-center mt-8 md:mt-12 lg:mt-16">
          <ListItem3
            title={"Starter"}
            price={"19"}
            info={["1 book/month", "Online forums"]}
            button={{
              label: "SUBSCRIBE NOW",
              action: () => {},
            }}
          />
          <ListItem3
            title={"Pro"}
            price={"49"}
            info={["2 books/month", "Virtual meetups"]}
            isPro
            button={{
              label: "SUBSCRIBE NOW",
              action: () => {},
            }}
          />
          <ListItem3
            title={"Enterprise"}
            price={"Custom"}
            info={["Team access", "Private sessions"]}
            button={{
              label: "TALK TO US",
              action: () => {},
            }}
          />
        </div>
      </CardWrapper>
      <CardWrapper>
        <div className="flex  items-center justify-center">
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
        <h1 className="w-full lg:mx-auto text-preset-3 text-neutral-900 text-center mt-8 md:mt-12 lg:mt-16">
          {` "This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions are
          gold!"`}
        </h1>
        <p className="w-full lg:mx-auto text-preset-5 text-neutral-700 text-center mt-8 md:mt-12 lg:mt-16">
          Sarah Chen, Software Architect
        </p>
      </CardWrapper>
      <CardWrapper className2="bg-neutral-900 rounded-tl-4 rounded-tr-4 pt-12 px-4 md:pt-16 md:px-[32px] lg:pt-20 lg:px-[135px]">
        <h1 className="w-full lg:mx-auto text-preset-2 text-neutral-100 text-center">
          Ready to debug your reading list?
        </h1>
        <div className="flex flex-col gap-3 mt-10 mb-16  items-center">
          <Button
            borderColor="border-neutral-0"
            textColor="text-neutral-0"
            label="REVIEW MEMBERSHIP OPTIONS"
            iconPath={IMAGES.arrowUp}
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
        <div className="w-full h-px bg-neutral-700" />
        <div className="flex flex-col md:flex-row md:justify-between items-center py-6 gap-4">
          <p className="text-preset-7 text-neutral-0 text-center mt-6">
            &copy; 2024 Tech Book Club. All rights reserved.
          </p>
          <span className="flex gap-6">
            <Image
              src={getPath("logo-bluesky.svg")}
              alt="logo-bluesky.svg"
              width={22}
              height={22}
            />
            <Image
              src={getPath("logo-linkedin.svg")}
              alt="logo-linkedin.svg"
              width={22}
              height={22}
            />
          </span>
        </div>
      </CardWrapper>
    </div>
  );
};
