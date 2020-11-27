import React from "react";
import { SisternodeOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

export default function MainHeader() {
  return (
    <header>
      <div className="__main_header">
        <Row>
          <Col xs={0} sm={0} lg={4}></Col>
          <Col xs={24} sm={20} lg={16}>
            <SisternodeOutlined />
            <span className="info">Recipe Box</span>
          </Col>
        </Row>
      </div>
    </header>
  );
}
