import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "testimonial", "contact", "work", "skills"].map(
        (item, i) => (
          <a
            href={`#${item}`}
            key={item + i}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
