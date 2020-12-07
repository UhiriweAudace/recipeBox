import { Recipe, Errors } from "../types";

const validateForm = (form: Recipe, errors: Errors, callback: (value: Errors) => void) => {
  const { name, ingredients, direction } = form;
  if (!name) {
    callback({ ...errors, name: "Recipe Name is required" });
    return false;
  }

  if (!ingredients.toString().trim().length) {
    callback({ ...errors, ingredients: "Recipe Ingredients are required" });
    return false;
  }
  if (!direction.toString().trim().length) {
    callback({ ...errors, direction: "Recipe directions are required" });
    return false;
  }
  return true;
};

export { validateForm };
