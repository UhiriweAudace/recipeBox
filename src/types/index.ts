import React from "react";
export type Recipe = {
  id: number | string;
  name: string;
  ingredients: string[];
  direction: string[];
};

export type RecipeModalProps = {
  form: Recipe;
  setform: React.Dispatch<React.SetStateAction<Recipe>>;
  selected?: Recipe | null;
  open: boolean;
  edit?: boolean;
  setEdit: (value: boolean) => void;
  isDeleted?: boolean;
  setIsDeleted: (value: boolean) => void;
  handleOk: () => void;
  setOpen: (value: boolean) => void;
  onSubmitHandler: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onUpdateHandler: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onDeleteHandler: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onchange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export type RecipeListProps = {
  recipes: Recipe[] | null;
  selected: Recipe | null;
  setSelected: (recipe: Recipe) => void;
};

export type RecipeBodyProps = {
  selected: Recipe | null;
  setEdit: (value: boolean) => void;
  setOpen: (value: boolean) => void;
  setForm: (selected: Recipe) => void;
  setIsDeleted: (value: boolean) => void;
  open: boolean;
};
