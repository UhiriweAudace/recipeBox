import React from "react";
import { Row, Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { NotFoundProps } from "../interfaces";

const NotFound:React.FC<NotFoundProps> = ({ open, setOpen, setEdit, setIsDeleted }) => {
  return (
    <Row className="flex-center">
      <div className="not-found">
        <p className="text text-2">No Recipe Found</p>
        <Button
          key="submit"
          type="primary"
          className="btn btn-dark"
          loading={false}
          onClick={() => {
            setOpen(!open);
            setEdit(false);
            setIsDeleted(false);
          }}
        >
          <PlusCircleFilled />
          Add new recipe
        </Button>
      </div>
    </Row>
  );
};

export default NotFound;
