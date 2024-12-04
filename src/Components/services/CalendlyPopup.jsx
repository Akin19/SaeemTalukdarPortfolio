// step 1

import { PopupButton } from "react-calendly";

const CalendlyPopup = () => {
  return (
    <div>
      <PopupButton
        url="https://calendly.com/gmasad-swe/30min" // Replace with your link
        rootElement={document.getElementById("root")} // Attach to the React root
        text="Book a Meeting"
        className="custom-button"
      />
    </div>
  );
};

export default CalendlyPopup;

// Step 2

// import React from "react";

// const CalendlyEmbed = () => {
//   return (
//     <iframe
//       src="https://calendly.com/gmasad-swe/30min"
//       width="100%"
//       height="auto"
//       frameBorder="0"
//       title="Schedule a Meeting"
//     ></iframe>
//   );
// };

// export default CalendlyEmbed;
