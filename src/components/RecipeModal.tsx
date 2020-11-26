import React from "react";
import { Recipe } from "../types";
import { Button, Input, Modal } from "antd";

type Props = {
  form: Recipe;
  selected?: Recipe | null;
  open: boolean;
  edit?: boolean;
  setEdit: (value: boolean) => void;
  handleOk: () => void;
  setOpen: (value: boolean) => void;
  onSubmitHandler: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onUpdateHandler: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onchange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

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
}: Props) {
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
        allowClear
        value={form?.ingredients.join("\\")}
        onChange={(ev) => onchange(ev)}
      />
      <Input.TextArea
        placeholder="Enter a recipe direction"
        name="direction"
        allowClear
        value={form?.direction.join("\\")}
        onChange={(ev) => onchange(ev)}
      />
    </Modal>
  );
}
