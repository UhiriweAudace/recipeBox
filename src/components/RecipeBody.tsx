import React from "react";
import { PlusCircleFilled, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Col, Row, Button } from "antd";
import { Recipe } from "../types";

type Props = {
  selected: Recipe | null;
  setOpen: (value: boolean) => void;
};

export default function RecipeBody({ selected, setOpen }: Props) {
  return (
    <Col xs={24} sm={16} lg={16} className="right-side">
      <h5>{selected?.name}</h5>
      <div>
        <div>
          <div className="info-header">
            <span>ingredients:</span>
            <span onClick={(e) => setOpen(!open)}>
              <PlusCircleFilled />
            </span>
          </div>
          <ul>
            {selected?.ingredients.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>
        <div>
          <span>directions:</span>
          <ol>
            {selected?.direction.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ol>
        </div>
      </div>
      <Row className="buttons">
        <Button>
          <EditOutlined />
          Edit
        </Button>
        <Button>
          <DeleteOutlined /> Delete
        </Button>
      </Row>
    </Col>
  );
}
