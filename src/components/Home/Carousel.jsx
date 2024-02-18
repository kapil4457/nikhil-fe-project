import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Rating from "@mui/material/Rating";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const CarouselComp = ({ data }) => {
  return (
    <div className="w-full ">
      {data && (
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
          }}
          className="w-full h-[27rem]  md:h-[28rem] flex items-center"
        >
          <CarouselContent className="h-full">
            {data?.map((item, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5 h-[30rem] flex items-center w-full"
              >
                <div
                  className="h-[24rem] w-full md:h-[27rem] max-w-[20rem]  grid grid-rows-10 gap-2 border-2 border-white carousel-card"
                  style={{ borderRadius: "10px", overflow: "hidden" }}
                >
                  <div className="row-span-5 md:row-span-6 max-h-[100%] w-full p-2">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                      style={{ borderRadius: "10px" }}
                      alt={item?.name ? item?.name : item?.title}
                      className=" max-h-[100%] w-full"
                    />
                  </div>
                  <div className=" row-span-3 md:row-span-2 flex flex-col details p-2 gap-3">
                    <div className="flex gap-1 w-full justify-center">
                      <Rating
                        name="user-rating"
                        value={item?.vote_average / 2}
                        precision={0.1}
                        readOnly
                      />
                      ({item?.vote_count})
                    </div>
                    <div className="flex w-full items-center justify-center card-title">
                      {item?.name ? item?.name : item?.title}
                    </div>
                  </div>
                  <div className="row-span-2 flex items-center align-center w-full pl-3 pr-3">
                    <Button variant="default" className="w-full">
                      Read More
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
};

export default CarouselComp;
