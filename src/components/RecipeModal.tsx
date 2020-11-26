import React from "react";
import { Button, Input, Modal } from "antd";
import { RecipeModalProps } from "../types";

export default function RecipeModal({
  form,
  selected,
  open,
  handleOk,
  setOpen,
  onSubmitHandler,
  onUpdateHandler,
  onchange,
  edit,
  setEdit,
}: RecipeModalProps) {
  const onCancelHandler = () => {
    setOpen(!open);
    setEdit(false);
  };

  return (
    <Modal
      title={!edit ? "Add a new recipe into the box" : "Edit this recipe information"}
      visible={open}
      maskClosable={false}
      onOk={handleOk}
      onCancel={onCancelHandler}
      footer={[
        <Button
          key="submit"
          type="primary"
          className="btn btn-dark"
          loading={false}
          onClick={(ev: React.MouseEvent<HTMLElement, MouseEvent>) =>
            !edit ? onSubmitHandler(ev) : onUpdateHandler(ev)
          }
        >
          {!edit ? "Submit" : "Update"}
        </Button>,
      ]}
    >
      <Input
        placeholder="Enter a recipe name"
        name="name"
        allowClear
        value={form?.name}
        onChange={(ev) => onchange(ev)}
        onError={() => "Error"}
      />
      <Input.TextArea
        placeholder="Enter a recipe ingredients"
        name="ingredients"
        value={form?.ingredients.join("\\")}
        onChange={(ev) => onchange(ev)}
        className="mt-1"
      />
      <Input.TextArea
        placeholder="Enter a recipe direction"
        name="direction"
        value={form?.direction.join("\\")}
        onChange={(ev) => onchange(ev)}
      />
    </Modal>
  );
}
