import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <div
        className="title text-center fs-3 my-5 py-2"
        style={{ color: "rgb(244, 66, 96)", fontWeight: 600 }}
      >
        {title}
      </div>
    </>
  );
};

export default Title;
