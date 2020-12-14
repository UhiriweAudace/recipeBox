import { Recipe, Errors } from "../interfaces";

const validateForm = (form: Recipe, setState: React.Dispatch<React.SetStateAction<Errors>>): boolean => {
  let error: Errors = { name: null, ingredients: null, direction: null };

  Object.keys(form).forEach((field) => {
    if (!form[field] || !form[field].toString().trim().length) {
      error = { ...error, [field]: `Recipe ${field} is required` };
    }
  });

  if (error.name || error.ingredients || error.direction) {
    setState(error);
    return false;
  }
  return true;
};

export { validateForm };
