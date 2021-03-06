import React from "react";
import PropTypes from "prop-types";

function GifGridItem({ id, title, url }) {
  return (
    <div className="card ">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

GifGridItem.propTypes = {};

export default GifGridItem;
