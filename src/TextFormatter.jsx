import React from "react";
import PropTypes from "prop-types";

function CrossBrowserTextComponent({ text }) {
  return (
    <span
      style={{
        whiteSpace: "normal",
        overflowWrap: "break-word",
        hyphens: "none",
        textAlign: "justify",
      }}
    >
      {text}
    </span>
  );
}

CrossBrowserTextComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CrossBrowserTextComponent;