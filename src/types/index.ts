export type Recipe = {
  id: number | string;
  name: string;
  ingredients: string[];
  direction: string[];
};

export type RecipeModalProps = {
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
  open: boolean;
};
