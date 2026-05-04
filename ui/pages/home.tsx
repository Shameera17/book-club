"use client";
import { IMAGES } from "@/app/lib/assets";
import Button from "../buttons";
import CardWrapper from "../wrapper";

export const Landing = () => {
  return (
    <div>
      <CardWrapper isHero>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex-1">
            <h1 className="text-preset-1 text-neutral-900 mb-6">
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
          </div>
          <div></div>
        </div>
      </CardWrapper>
    </div>
  );
};
