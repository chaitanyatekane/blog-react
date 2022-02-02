import "antd/dist/antd.css";
import { Button } from "antd";
import React from "react";

const Antdesign = () => {
  return (
    <div className="antdesign">
      <Button
        type="primary"
        href="https://www.github.com/chaitanyatekane"
        target="_blank"
        shape="round"
        block
      >
        Click Here
      </Button>
      <div className="antdesign-more">
        <Button danger>Default</Button>
      </div>
      <Button type="dashed" danger>
        Dashed
      </Button>
    </div>
  );
};

export default Antdesign;
