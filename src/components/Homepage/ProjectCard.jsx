import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


export default function ProjectCard() {
    return (
      <div className="bg-white h-full flex-1 shadow-md md:shadow-lg rounded-lg md:rounded-xl p-4">
        <div className="h-[60%] w-full">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            transitionTime={1000}
          >
            <img
              className="w-full object-contain max-h-[200px] md:max-h-[300px]"
              src="https://i.pinimg.com/736x/83/e4/69/83e46997bf083f95fee0c213bdaae979.jpg"
              alt="project"
            />
            <img
              className=" w-full object-contain max-h-[200px] md:max-h-[300px]"
              src="https://i.pinimg.com/564x/e0/3c/e3/e03ce3ebc6c50dc1c056c22b637685dc.jpg"
              alt="project"
            />
            <img
              className=" w-full object-contain max-h-[200px] md:max-h-[300px]"
              src="https://i.pinimg.com/736x/1a/a4/71/1aa471c0aaccabe79ab43e37ae8072cb.jpg"
              alt="project"
            />
          </Carousel>
          <div className="w-full p-4">
            <div className="w-full flex flex-row justify-between">
              <h1 className="text-xl font-semibold">My Project</h1>
              <p className="text-sm text-gray-500">sept 2022 - current</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              quis nemo labore neque at! Rerum delectus accusantium consequuntur
              natus distinctio nulla sit exercitationem, numquam, tempora minus
              veritatis quis pariatur dicta?
            </p>
          </div>
        </div>
      </div>
    );
}
