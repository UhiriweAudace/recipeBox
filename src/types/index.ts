export interface Recipe {
  id: number | string;
  name: string;
  ingredients: string[];
  direction: string[];
}

export interface RecipeModalProps {
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
}

export interface RecipeListProps {
  recipes: Recipe[] | null;
  selected: Recipe | null;
  setSelected: (recipe: Recipe) => void;
}

export interface RecipeBodyProps {
  selected: Recipe | null;
  setEdit: (value: boolean) => void;
  setOpen: (value: boolean) => void;
  setForm: (selected: Recipe) => void;
  setIsDeleted: (value: boolean) => void;
  open: boolean;
}

export interface NotFoundProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  setEdit: (value: boolean) => void;
  setIsDeleted: (value: boolean) => void;
}
