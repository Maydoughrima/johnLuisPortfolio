import React from "react";

const SectionWrapper = ({ children, className = "", id }) => {
  return (
    <section
      id={id}
      className={`px-6 py-16 md:px-12 md:py-24 lg:px-[80px] lg:py-[120px] w-full relative ${className}`}
    >
      <div className="max-w-10xl mx-auto w-full h-full">{children}</div>
    </section>
  );
};



export default SectionWrapper;
