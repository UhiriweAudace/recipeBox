import React, { useState, useEffect } from "react";
import { Row, Image, Col } from "antd";
import { v4 } from "uuid";
import "./App.scss";
import { VALUES, RECIPES_USERNAME } from "./constants";
import { Recipe } from "./types";
import MainHeader from "./components/MainHeader";
import RecipeList from "./components/RecipeList";
import RecipeBody from "./components/RecipeBody";
import RecipeModal from "./components/RecipeModal";
import UserSvg from "./assets/user.svg";
import NotFound from "./components/NotFound";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [selected, setSelected] = useState<Recipe | null>(null);
  const [form, setform] = useState<Recipe>({ id: "", name: "", ingredients: [""], direction: [""] });

  useEffect(() => {
    localStorage.setItem(RECIPES_USERNAME, localStorage.getItem(RECIPES_USERNAME) || JSON.stringify(VALUES));
    const data = localStorage.getItem(RECIPES_USERNAME);
    data && setRecipes(JSON.parse(data));
    !selected && data && data !== "null" && data !== "undefined" && setSelected(JSON.parse(data)[0]);
  }, [selected]);

  const handleOk = (): void => {};
  const onchange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    if (name === "name") setform({ ...form, name: value });
    if (name === "ingredients") setform({ ...form, ingredients: value.split("\\") });
    if (name === "direction") setform({ ...form, direction: value.split("\\") });
  };

  const onSubmitHandler = (ev: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    ev.preventDefault();
    const data = recipes;
    if (data) {
      data.push(Object.assign({ ...form }, { id: v4() }));
      localStorage.setItem(RECIPES_USERNAME, JSON.stringify(data));
      setSelected(Object.assign({ ...form }, { id: data && data[data.length - 1].id }));
    } else {
      const info = [];
      info.push(Object.assign({}, { ...form, id: v4() }));
      localStorage.setItem(RECIPES_USERNAME, JSON.stringify(info));
      const recipesData = localStorage.getItem(RECIPES_USERNAME);
      recipesData && setRecipes(JSON.parse(recipesData));
      recipesData && setSelected(JSON.parse(recipesData)[0]);
    }
    setform({ id: "", name: "", ingredients: [""], direction: [""] });
    setOpen(false);
    setIsDeleted(false);
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
    setform({ id: "", name: "", ingredients: [""], direction: [""] });
    setOpen(false);
    setIsDeleted(false);
  };

  const onDeleteHandler = (ev: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    ev.preventDefault();
    recipes?.forEach((value, index) => {
      if (value.id === selected?.id) {
        delete recipes[index];
      }
    });
    const data = recipes?.filter((value) => value != null);
    localStorage.setItem(RECIPES_USERNAME, JSON.stringify(data));
    setSelected(null);
    setform({ id: "", name: "", ingredients: [""], direction: [""] });
    setEdit(false);
    setOpen(false);
    setIsDeleted(false);
  };

  return (
    <div className="App">
      <MainHeader />
      {!recipes || !recipes.length ? (
        <NotFound open={open} setOpen={setOpen} setEdit={setEdit} setIsDeleted={setIsDeleted} />
      ) : (
        <Row>
          <Col xs={24} sm={24} lg={4}></Col>
          <RecipeList recipes={recipes} selected={selected} setSelected={setSelected} />
          <RecipeBody
            selected={selected}
            setOpen={setOpen}
            open={open}
            setEdit={setEdit}
            setForm={setform}
            setIsDeleted={setIsDeleted}
          />
        </Row>
      )}
      <RecipeModal
        open={open}
        setOpen={setOpen}
        form={form}
        setform={setform}
        onchange={onchange}
        handleOk={handleOk}
        edit={edit}
        setEdit={setEdit}
        isDeleted={isDeleted}
        setIsDeleted={setIsDeleted}
        selected={selected}
        onSubmitHandler={onSubmitHandler}
        onUpdateHandler={onUpdateHandler}
        onDeleteHandler={onDeleteHandler}
      />
      <div>
        <Image className="user-svg" src={UserSvg} width={200} />
      </div>
    </div>
  );
}

export default App;
