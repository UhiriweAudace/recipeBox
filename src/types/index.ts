export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  direction: string[];
}

export interface RecipeModalProps {
  open: boolean;
  edit?: boolean;
  isDeleted?: boolean;
  form: Recipe;
  setform: React.Dispatch<React.SetStateAction<Recipe>>;
  selected?: Recipe | null;
  errors: Errors;
  handleOk: () => void;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  open: boolean;
  selected: Recipe | null;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setForm: (selected: Recipe) => void;
}

export interface NotFoundProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Errors {
  name: string | null;
  ingredients: string | null;
  direction: string | null;
}
