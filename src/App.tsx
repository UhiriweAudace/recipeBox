import React, { useState, useEffect } from "react";
import { Row } from "antd";
import "./App.scss";
import { values, RECIPES_USERNAME } from "./constants";
import { Recipe } from "./types";
import MainHeader from "./components/MainHeader";
import RecipeList from "./components/RecipeList";
import RecipeBody from "./components/RecipeBody";
import RecipeModal from "./components/RecipeModal";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [selected, setSelected] = useState<Recipe | null>(null);
  const [form, setform] = useState<Recipe>({ id: "", name: "", ingredients: [""], direction: [""] });

  useEffect(() => {
    localStorage.setItem(RECIPES_USERNAME, localStorage.getItem(RECIPES_USERNAME) || JSON.stringify(values));
    const data = localStorage.getItem(RECIPES_USERNAME);
    setRecipes(JSON.parse(data || ""));
    setSelected(JSON.parse(data || "")[0]);
  }, []);

  const handleOk = (): void => {};
  const onchange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    if (ev.target.name === "name") setform({ ...form, name: ev.target.value });
    if (ev.target.name === "ingredients") setform({ ...form, ingredients: ev.target.value.split("\\") });
    if (ev.target.name === "direction") setform({ ...form, direction: ev.target.value.split("\\") });
  };

  const onSubmitHandler = (ev: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    ev.preventDefault();
    const data = recipes;
    data?.push({ ...form, id: data.length });
    localStorage.setItem(RECIPES_USERNAME, JSON.stringify(data));
    setSelected(form);
    setOpen(false);
  };

  const onUpdateHandler = (ev: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    ev.preventDefault();
    recipes?.forEach((value, index) => {
      if (value.id === selected?.id) {
        recipes[index].name = form.name;
        recipes[index].ingredients = form.ingredients;
        recipes[index].direction = form.direction;
      }
    });
    localStorage.setItem(RECIPES_USERNAME, JSON.stringify(recipes));
    setSelected(form);
    setOpen(false);
  };

  return (
    <div className="App">
      <MainHeader />
        <Row>
          <RecipeList recipes={recipes} selected={selected} setSelected={setSelected} />
          <RecipeBody selected={selected} setOpen={setOpen} open={open} setEdit={setEdit} setForm={setform} />
          <RecipeModal
            open={open}
            setOpen={setOpen}
            form={form}
            onSubmitHandler={onSubmitHandler}
            onchange={onchange}
            handleOk={handleOk}
            edit={edit}
            setEdit={setEdit}
            selected={selected}
            onUpdateHandler={onUpdateHandler}
          />
        </Row>
    </div>
  );
}

export default App;
