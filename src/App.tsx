import React, { useState, useEffect } from "react";
import { SisternodeOutlined, PlusCircleFilled, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Row, Col, Modal, Button, Input } from "antd";
import "./App.scss";
import values from "./constants";
import { Recipe } from "./types";
import MainHeader from "./components/MainHeader";
import RecipeList from "./components/RecipeList";
import RecipeBody from "./components/RecipeBody";
import RecipeModal from "./components/RecipeModal";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [selected, setSelected] = useState<Recipe | null>(null);
  const [form, setform] = useState<Recipe>({ name: "", ingredients: [""], direction: [""] });

  useEffect(() => {
    localStorage.setItem("audace_recipes", localStorage.getItem("audace_recipes") || JSON.stringify(values));
    const data = localStorage.getItem("audace_recipes");
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
    const data = recipes?.push(form);
    localStorage.setItem("audace_recipes", JSON.stringify(data));
    setSelected(form);
    setOpen(false);
  };

  return (
    <div className="App">
      <MainHeader />
      <div>
        <Row>
          <RecipeList recipes={recipes} selected={selected} setSelected={setSelected} />
          <RecipeBody selected={selected} setOpen={setOpen} />
          <RecipeModal
            open={open}
            setOpen={setOpen}
            form={form}
            onSubmitHandler={onSubmitHandler}
            onchange={onchange}
            handleOk={handleOk}
          />
        </Row>
      </div>
    </div>
  );
}

export default App;
