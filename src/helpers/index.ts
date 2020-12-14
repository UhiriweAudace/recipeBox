import { Recipe, Errors } from "../interfaces";

const validateForm = (
  form: Recipe,
  errors: Errors,
  setState: React.Dispatch<React.SetStateAction<Errors>>
): boolean => {
  const { name, ingredients, direction } = form;
  if (!name) {
    setState({ ...errors, name: "Recipe Name is required" });
    return false;
  }

  if (!ingredients.toString().trim().length) {
    setState({ ...errors, ingredients: "Recipe Ingredients are required" });
    return false;
  }
  if (!direction.toString().trim().length) {
    setState({ ...errors, direction: "Recipe directions are required" });
    return false;
  }
  return true;
};

export { validateForm };
