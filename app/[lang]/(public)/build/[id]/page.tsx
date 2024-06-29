import { Text } from "@/ui/atoms";
import React from "react";
import SectionImage1 from "@/images/01_2-Photo.png";
import Image from "next/image";
import SumpSlider from "@/ui/molecules/sump-carosul";

function DesignDetails() {
  return (
    <div className="space-y-10 mt-10">
      <SumpSlider />

      <Text as="h1">Shaheen</Text>
      <div>
        <ul className="space-y-4">
          <li>
            <strong>Location: </strong>
            Al Soudah, Saudi Arabia
          </li>
          <li>
            <strong>Scope: </strong>
            Design & Build
          </li>
          <li>
            <strong>Year: </strong>
            2019
          </li>
          <li>
            <strong>Status: </strong>
            Complete
          </li>
          <li>
            <strong>Team: </strong>
            Khalid Henaidy, Asia Khan, Ahmed Frehat, Tahir Tuffaha, Abdalrhman
            Yassin, Abdulrahman Abdullah
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-10 items-center">
        <Image
          src={SectionImage1}
          alt="section-image"
          className="w-full h-full object-cover"
        />
        <div>
          <Text as="h4">Briefing:</Text>
          <Text as="span">
            In this project we were given a unique opportunity to propose a
            challenging design that should be scalable, replicable, sustainable
            and reversible.
            <br />
            <br />
            Having a minimal foot print, impact on the site and vegetation
            should be reduced to a minimum. And to provide an exceptional
            experience.
            <br />
            <br />
            At 3000m altitude, the top of Jebel Sawda is one of the highest
            locations in Saudi Arabia.
            <br />
            <br />
            The western side of the mountain has retained most of its natural
            roughed terrain and vegetation, has extensive views, humid weather
            and low temperatures during most of the year.
          </Text>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 items-center">
        <div>
          <Text as="h4">Architectural Solution:</Text>
          <Text as="span">
            First. Locations, on the edge of the mountain cliff that will be
            accessible by a walkway.
            <br />
            <br />
            Second. In order to achieve a more delicate presence on the
            landscape the shelter’s footprint is split into units that are then
            merged into a single more complex geometry.
            <br />
            <br />
            Third. Reproduction and variation. Various prototypes where designed
            to allow different combinations.
            <br />
            <br />
            Fourth. Positioning. The V shape of the cabin will open up towards
            the view whilst allowing a reducing its physical shape on the rear
            side, giving the impression of a much smaller structure than it
            actually is.
          </Text>
        </div>
        <Image
          src={SectionImage1}
          alt="section-image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default DesignDetails;
