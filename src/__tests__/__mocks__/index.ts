export interface Recipe {
    [x: string]: string | string[];
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
    setform: jest.EmptyFunction;
    selected?: Recipe | null;
    errors: Errors;
    handleOk: jest.EmptyFunction;
    setEdit: jest.EmptyFunction;
    setIsDeleted: jest.EmptyFunction;
    setOpen: jest.EmptyFunction;
    onSubmitHandler: jest.EmptyFunction;
    onUpdateHandler: jest.EmptyFunction;
    onDeleteHandler: jest.EmptyFunction;
    onchange: jest.EmptyFunction
}

export interface RecipeListProps {
    recipes: Recipe[] | null;
    selected: Recipe | null;
    setSelected:jest.EmptyFunction
}

export interface RecipeBodyProps {
    open: boolean;
    selected: Recipe | null;
    setEdit: jest.EmptyFunction;
    setIsDeleted: jest.EmptyFunction;
    setOpen: jest.EmptyFunction;
    setForm: jest.EmptyFunction;
}

export type NotFoundProps = Pick<RecipeBodyProps, 'open' | 'setOpen' | 'setEdit' | 'setIsDeleted'>

export interface Errors {
    name: string | null;
    ingredients: string | null;
    direction: string | null;
}
