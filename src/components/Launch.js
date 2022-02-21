import React, { useState } from "react";
import KeyboardDoubleArrowRightRounded from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import KeyboardDoubleArrowLeftRounded from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";

const LaunchTitle = ({ name, index, flickr }) => {
  return (
    <div className="text-center mt-5 mb-5 px-3 ">
      <span className="launch-title">{name}</span>
      <br />
      <span className="launch-counter">
        {index}/{flickr.original.length - 1}
      </span>
    </div>
  );
};

const RandomButton = ({ setIndex, flickr }) => {
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="px-5 mt-4 mb-5 d-flex justify-content-center  ">
      <button
        className="launch-random-button "
        onClick={() => setIndex(getRandomNumber(0, flickr.original.length - 1))}
      >
        Random picture
      </button>
    </div>
  );
};

const LaunchItem = ({ index, flickr, setIndex, name }) => {
  return (
    <div className="row px-5 mt-5 align-items-center">
      <div className="col-2 col-xs-2 col-sm-2 col-md-3 col-lg-3  d-flex justify-content-center">
        <button
          className="launch-toggle-button align-middle"
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            } else if (index === 0) {
              setIndex(flickr.original.length - 1);
            }
          }}
        >
          <KeyboardDoubleArrowLeftRounded />
        </button>
      </div>
      <div className="col-8 col-xs-8 col-sm-8 col-md-6 col-lg-6 d-flex justify-content-center">
        {flickr.original.length > 0 ? (
          <img
            className="img-fluid launch-picture"
            src={flickr?.original[index]}
            alt={name}
          />
        ) : (
          "No picture available"
        )}
      </div>
      <div className="col-2 col-xs-2 col-sm-2 col-md-3 col-lg-3 d-flex justify-content-center">
        <button
          className="launch-toggle-button"
          onClick={() => {
            if (index < flickr.original.length - 1) {
              setIndex(index + 1);
            } else if (index === flickr.original.length - 1) {
              setIndex(0);
            }
          }}
        >
          <KeyboardDoubleArrowRightRounded />
        </button>
      </div>
    </div>
  );
};

const Launch = ({ name, links }) => {
  const { flickr } = links;
  const [index, setIndex] = useState(0);

  return (
    <section className="launch-section  ">
      <LaunchTitle name={name} index={index} flickr={flickr} />
      <LaunchItem
        name={name}
        index={index}
        flickr={flickr}
        setIndex={setIndex}
      />
      <RandomButton flickr={flickr} setIndex={setIndex} />
    </section>
  );
};

export default Launch;
