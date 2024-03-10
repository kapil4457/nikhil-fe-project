import axios from "axios";
import React, { useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Box, Slider } from "@mui/material";
import Card from "../Card/Card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const Movies = () => {
  const [result, setResult] = useState(null);
  const [filters, setFilters] = useState({
    minRating: 0,
    above18: false,
    pageNo: 1,
  });
  const getMovies = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?include_video=true&language=en-US&page=${
        filters?.pageNo
      }&sort_by=primary_release_date.desc&vote_average.gte=${
        filters?.minRating * 2
      }&vote_count.gte=1`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_Access_Token_Auth}`,
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        setResult(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getMovies();
  }, [filters]);
  return (
    <>
      <div
        id="filters"
        className="filters w-full flex pl-10 pr-10 justify-between  items-center gap-10"
      >
        {/* <div id="kids-mode">
          <div className="flex items-center space-x-2">
            <Switch
              id="kids-mode"
              value={filters?.above18}
              onCheckedChange={(e) => {
                setFilters({
                  ...filters,
                  above18: e,
                });
              }}
            />
            <Label htmlFor="kids-mode">18+ Mode</Label>
          </div>
        </div> */}
        <div id="rating-range" className="flex gap-2 flex-col">
          <Label htmlFor="rating-min">Min Rating</Label>
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="rating-min"
              defaultValue={0}
              onChange={(e) => {
                setFilters({
                  ...filters,
                  minRating: e.target.value,
                });
              }}
              valueLabelDisplay="auto"
              step={0.2}
              min={0}
              max={5}
            />
          </Box>
        </div>
      </div>
      <div className=" flex flex-col gap-8 w-full p-10">
        <div className="result-cards">
          {result &&
            result?.results
              ?.filter((item) => {
                if (
                  item.adult === filters?.above18
                  //   &&
                  //   item?.vote_average / 2 >= filters?.minRating
                ) {
                  return item;
                }
              })
              .map((item, key) => (
                <>
                  <Card type="movie" item={item} key={key} />
                </>
              ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer"
                onClick={() => {
                  if (result) {
                    if (filters?.pageNo > 1) {
                      setFilters({
                        ...filters,
                        pageNo: filters?.pageNo - 1,
                      });
                    }
                  }
                }}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                className="cursor-pointer"
                onClick={() => {
                  if (result) {
                    if (filters?.pageNo < result?.total_pages) {
                      setFilters({
                        ...filters,
                        pageNo: filters?.pageNo + 1,
                      });
                    }
                  }
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default Movies;
