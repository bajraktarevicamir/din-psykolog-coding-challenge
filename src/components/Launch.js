import React, { useState } from "react";

const Launch = ({ name, links }) => {
  const { flickr } = links;
  const [index, setIndex] = useState(0);

  return (
    <section className="h-100 ">
      <div className="text-center mt-5 mb-5 px-3 ">
        <span>{name}</span>
      </div>
      <div className="row px-5 mt-5  ">
        <div className="col-2 col-xs-2 col-sm-2 col-md-3 col-lg-3 d-flex justify-content-center">
          <button
            onClick={() => {
              if (index > 0) {
                setIndex(index - 1);
              } else if (index === 0) {
                setIndex(flickr.original.length - 1);
              }
            }}
          >
            Previous
          </button>
        </div>
        <div className="col-8 col-xs-8 col-sm-8 col-md-6 col-lg-6 d-flex justify-content-center">
          {flickr.original.length > 0 ? (
            <img
              className="img-fluid"
              src={flickr?.original[index]}
              alt={name}
            />
          ) : (
            "No picture available"
          )}
        </div>
        <div className="col-2 col-xs-2 col-sm-2 col-md-3 col-lg-3 d-flex justify-content-center">
          <button
            onClick={() => {
              if (index < flickr.original.length - 1) {
                setIndex(index + 1);
              } else if (index === flickr.original.length - 1) {
                setIndex(0);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Launch;
