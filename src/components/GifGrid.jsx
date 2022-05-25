import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { useAutoAnimate } from "@formkit/auto-animate/react";
//import { getGifs } from "../helpers/getGifs";

function GifGrid({ category }) {
  const { data: images, loading } = useFetchGifs(category);
  const [parent] = useAutoAnimate();
  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}
      <div ref={parent} className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}

GifGrid.propTypes = {};

export default GifGrid;
