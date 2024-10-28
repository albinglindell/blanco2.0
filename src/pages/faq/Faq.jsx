import React from "react";
import faq from "../../assets/faq.json";
import { Collapse } from "antd";
function Faq() {
  return (
    <div className="faqPage">
        <div className="faqContainer">
            <Collapse ghost className="faq" items={faq} />
        </div>
    </div>
  );
}

export default Faq;
