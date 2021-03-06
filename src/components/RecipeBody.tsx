import React from "react";
import { PlusCircleFilled, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Col, Row, Button } from "antd";
import { RecipeBodyProps } from "../interfaces";

const RecipeBody: React.FC<RecipeBodyProps> = ({ selected, setOpen, open, setEdit, setForm, setIsDeleted }) => {
  return (
    <Col xs={24} sm={16} lg={12} className="right-side">
      <span className="text text-1">
        {selected && selected.name.charAt(0).toUpperCase() + selected.name.substring(1).toLowerCase()}
      </span>
      <div>
        <div>
          <div className="info-header">
            <span className="text text-2">Ingredients:</span>
            <span
              onClick={() => {
                setOpen(!open);
                setEdit(false);
                setIsDeleted(false);
              }}
            >
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
          <span className="text text-2">Directions:</span>
          <ol>
            {selected?.direction.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ol>
        </div>
      </div>
      <Row>
        <Button
          onClick={() => {
            setEdit(true);
            setOpen(true);
            selected && setForm(selected);
          }}
          className="btn btn-dark"
        >
          <EditOutlined />
          Edit
        </Button>
        <Button
          className="btn btn-dark"
          onClick={() => {
            setOpen(true);
            setIsDeleted(true);
          }}
        >
          <DeleteOutlined /> Delete
        </Button>
      </Row>
    </Col>
  );
};

export default RecipeBody;
