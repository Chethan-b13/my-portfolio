import React from "react";
import "@/styles/cards.scss";

const SmallCard = ({ children, styles, mobile = false }) => {
  const customStyle = {
    alignItems: styles?.alignItem || "center",
    width: styles?.width || "100%",
    height: styles?.height || "auto",
    minHeight: styles?.minHeight || "auto",
    padding: styles?.padding || "2rem",
    justifyContent: styles?.justifyContent || "center",
  };
  return (
    <div
      className={`${mobile && "mobilepadding"} smallCardContainer`}
      style={customStyle}
      id="skillsSection"
    >
      {children}
    </div>
  );
};

export default SmallCard;
