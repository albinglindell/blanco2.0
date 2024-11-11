import React from "react";
import faq from "../../assets/faq.json";
import { Collapse, Flex, Typography } from "antd";

const {Title} = Typography

function Faq() {
  return (
    <div className="faqPage">
        <div className="faqContainer">
          <Flex style={{width:"70%"}}>
            <Title style={{color:"white"}}>FAQ</Title>
          </Flex>
            <Collapse ghost className="faq" items={faq} />
        </div>
    </div>
  );
}

export default Faq;
