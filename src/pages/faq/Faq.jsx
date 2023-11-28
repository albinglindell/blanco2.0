import React from "react";
import faq from "../../assets/faq.json";
function Faq() {
  return (
    <div className="faqPage">
        <div className="faqContainer">
      {faq.map((f) => {
        return (
          <div className="faq">
            <h2>{f.title}</h2>
            <h3>{f.desc}</h3>
          </div>
        );
      })}
        </div>
    </div>
  );
}

export default Faq;
