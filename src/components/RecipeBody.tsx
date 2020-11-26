import React from "react";
import { PlusCircleFilled, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Col, Row, Button } from "antd";
import { Recipe } from "../types";

type Props = {
  selected: Recipe | null;
  setEdit: (value: boolean) => void;
  setOpen: (value: boolean) => void;
  setForm:(selected:Recipe)=>void;
  open: boolean;
};

export default function RecipeBody({ selected, setOpen, open, setEdit,setForm }: Props) {
  return (
    <Col xs={24} sm={16} lg={16} className="right-side">
      <h5>{selected?.name}</h5>
      <div>
        <div>
          <div className="info-header">
            <span>ingredients:</span>
            <span onClick={() => setOpen(!open)}>
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
        <Button
          onClick={() => {
            setEdit(true);
            setOpen(true);
            selected&&setForm(selected)
          }}
        >
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
