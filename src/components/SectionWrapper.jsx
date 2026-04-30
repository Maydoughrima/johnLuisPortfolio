import React from "react";

const SectionWrapper = ({ children, className = "", id }) => {
  return (
    <section
      id={id}
      className={`px-[80px] py-[120px] w-full relative ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full h-full">{children}</div>
    </section>
  );
};

export default SectionWrapper;
