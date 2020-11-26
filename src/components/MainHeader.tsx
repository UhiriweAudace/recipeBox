import React from "react";
import { SisternodeOutlined } from "@ant-design/icons";

export default function MainHeader() {
  return (
    <header>
      <div className="__main_header">
        <SisternodeOutlined />
        <span className="info">Recipe Box</span>
      </div>
    </header>
  );
}
