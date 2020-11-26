import React from "react";
import { Recipe } from "../types";
import Modal from "antd/lib/modal/Modal";
import { Button, Input } from "antd";

type Props = {
  form: Recipe;
  open: boolean;
  handleOk: () => void;
  setOpen: (value: boolean) => void;
  onSubmitHandler: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onchange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function RecipeModal({ form, open, handleOk, setOpen, onSubmitHandler, onchange }: Props) {
  return (
    <Modal
      title="Add a new recipe into the box"
      visible={open}
      maskClosable={false}
      onOk={handleOk}
      onCancel={() => setOpen(!open)}
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={false}
          onClick={(ev: React.MouseEvent<HTMLElement, MouseEvent>) => onSubmitHandler(ev)}
        >
          Submit
        </Button>,
      ]}
    >
      <Input
        placeholder="Enter a recipe name"
        name="name"
        allowClear
        value={form?.name}
        onChange={(ev) => onchange(ev)}
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
