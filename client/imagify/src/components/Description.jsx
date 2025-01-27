import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>

      <p className="text-gray-500 mb-8 ">Turn your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center ">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg "
        />
        <div className="">
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            quas tenetur facere pariatur ex commodi, a debitis sequi vero hic
            eius, assumenda quae eveniet, repellat deleniti molestiae ratione
            sit dignissimos amet vel ut minima animi? Eius earum culpa nesciunt
            tempora quis!
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            nulla beatae accusantium doloribus maxime, quod nam odit quasi
            cupiditate porro dolorum incidunt illum exercitationem corporis ad,
            quidem architecto, ipsa officia neque consequuntur voluptas.
            Corporis fuga magnam voluptates eos eveniet illum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
