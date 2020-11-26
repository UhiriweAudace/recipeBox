import React from "react";
import { Button, Input, Modal } from "antd";
import { RecipeModalProps } from "../types";

export default function RecipeModal({
  form,
  setform,
  selected,
  open,
  handleOk,
  setOpen,
  onSubmitHandler,
  onUpdateHandler,
  onDeleteHandler,
  onchange,
  edit,
  setEdit,
  isDeleted,
  setIsDeleted,
}: RecipeModalProps) {
  const onCancelHandler = () => {
    setOpen(!open);
    setEdit(false);
    setIsDeleted(false);
    setform({ id: "", name: "", ingredients: [""], direction: [""] });
  };

  return (
    <Modal
      title={
        !edit && !isDeleted
          ? "Add a new recipe into the box"
          : !isDeleted
          ? "Edit this recipe information"
          : "Are you sure?"
      }
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
            !edit && !isDeleted ? onSubmitHandler(ev) : !isDeleted ? onUpdateHandler(ev) : onDeleteHandler(ev)
          }
        >
          {!edit && !isDeleted ? "Submit" : !isDeleted ? "Update" : "Yes, Delete it"}
        </Button>,
      ]}
    >
      {!isDeleted ? (
        <>
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
        </>
      ) : (
        <div className="text text-2">Do you want delete this recipe?</div>
      )}
    </Modal>
  );
}
