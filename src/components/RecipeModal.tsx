import React, { useRef, useEffect } from "react";
import { Button, Input, Modal } from "antd";
import { RecipeModalProps } from "../types";
import { TextAreaRef } from "antd/lib/input/TextArea";

const RecipeModal: React.FC<RecipeModalProps> = (props) => {
  const recipeNameRef = useRef<Input>(null);
  const recipeIngredientRef = useRef<TextAreaRef>(null);
  useEffect(() => {
    recipeNameRef.current?.focus();
  }, []);

  const recipeNameKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      recipeIngredientRef.current!.focus();
    }
  };

  const onCancelHandler = () => {
    props.setOpen(!props.open);
    props.setEdit(false);
    props.setIsDeleted(false);
    props.setform({ id: "", name: "", ingredients: [""], direction: [""] });
  };

  return (
    <Modal
      title={
        !props.edit && !props.isDeleted
          ? "Add a new recipe into the box"
          : !props.isDeleted
          ? "Edit this recipe information"
          : "Are you sure?"
      }
      visible={props.open}
      maskClosable={false}
      onOk={props.handleOk}
      onCancel={onCancelHandler}
      footer={[
        <Button
          key="submit"
          type="primary"
          className="btn btn-dark"
          loading={false}
          onClick={(ev: React.MouseEvent<HTMLElement, MouseEvent>) =>
            !props.edit && !props.isDeleted
              ? props.onSubmitHandler(ev)
              : !props.isDeleted
              ? props.onUpdateHandler(ev)
              : props.onDeleteHandler(ev)
          }
        >
          {!props.edit && !props.isDeleted ? "Submit" : !props.isDeleted ? "Update" : "Yes, Delete it"}
        </Button>,
      ]}
    >
      {!props.isDeleted ? (
        <>
          <Input
            placeholder="Enter a recipe name"
            name="name"
            allowClear
            value={props.form?.name}
            onChange={(ev) => props.onchange(ev)}
            onError={() => "Error"}
            ref={recipeNameRef}
            onKeyDown={recipeNameKeyDown}
          />
          <Input.TextArea
            placeholder="Enter a recipe ingredients"
            name="ingredients"
            value={props.form?.ingredients.join("\\")}
            onChange={(ev) => props.onchange(ev)}
            className="mt-1"
            ref={recipeIngredientRef}
          />
          <Input.TextArea
            placeholder="Enter a recipe direction"
            name="direction"
            value={props.form?.direction.join("\\")}
            onChange={(ev) => props.onchange(ev)}
          />
        </>
      ) : (
        <div className="text text-2">Do you want delete this recipe?</div>
      )}
    </Modal>
  );
};

export default RecipeModal;
