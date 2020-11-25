import React, { useState, useEffect } from "react";
import {
  SisternodeOutlined,
  PlusCircleFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Row, Col, Modal, Button, Input } from "antd";
import "./App.scss";

type Recipe = {
  name: string;
  ingredients: string[];
  direction: string[];
};

const values = [
  {
    name: "Pasta chocolate soup",
    ingredients: [
      "2 tablespoons butter ",
      "2 cloves garlic, minced",
      " 1 cup heavy cream",
      "3/4 teaspoon salt",
      " 1 teaspoon fresh-ground black pepper",
    ],
    direction: [
      "Quo expedita, tempora possimus voluptatum ",
      "cumque doloribus cupiditate iusto veritatis id facere non",
      "sequi eius similique!",
    ],
  },
  {
    name: "cassava plant oil",
    ingredients: [
      "2 tablespoons butter",
      " 4 cloves garlic, minced",
      " 3 cup heavy honey",
      " 1 1/2 teaspoon salt",
      " 1 teaspoon fresh-ground black pepper",
    ],
    direction: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Ab cumque voluptates ipsam exercitationem magni? ",
      "Quo expedita, tempora possimus voluptatum ",
      "cumque doloribus cupiditate iusto veritatis id facere non",
      "sequi eius similique!",
    ],
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [selected, setSelected] = useState<Recipe | null>(null);
  const [form, setform] = useState({
    name: "",
    ingredients: [""],
    direction: [""],
  });

  useEffect(() => {
    localStorage.setItem(
      "audace_recipes",
      localStorage.getItem("audace_recipes") || JSON.stringify(values)
    );
    const data: string | null = localStorage.getItem("audace_recipes");
    setRecipes(JSON.parse(data || ""));
    setSelected(JSON.parse(data || "")[0]);

  }, []);

  const selectedRecipe = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    recipe: Recipe
  ) => {
    setSelected(recipe);
  };

  const handleOk = () => {};
  const onchange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (ev.target.name === "name") {
      setform({
        name: ev.target.value,
        ingredients: [...form?.ingredients],
        direction: [...form?.direction],
      });
    }

    if (ev.target.name === "ingredients") {
      console.log(ev.target.value.split("\\"));
      setform({
        ...form,
        ingredients: ev.target.value.split("\\"),
      });
    }

    if (ev.target.name === "direction") {
      console.log(ev.target.value.split("\\"));
      setform({
        ...form,
        direction: ev.target.value.split("\\"),
      });
    }
  };

  const onSubmitHandler = (ev: React.MouseEvent<HTMLElement, MouseEvent>) => {
    ev.preventDefault();
    const data = recipes;
    data?.push(form);
    localStorage.setItem("audace_recipes", JSON.stringify(data));
    setSelected(form);
    setOpen(false);
  };
  return (
    <div className="App">
      <header>
        <div className="__main_header">
          <SisternodeOutlined />
          <span className="info">Recipe Box</span>
        </div>
      </header>
      <div>
        <Row>
          <Col xs={24} sm={8} lg={8} className="left-side">
            <p>
              {recipes &&
                recipes.map((recipe, index) => {
                  return (
                    <div key={index}>
                      <span
                        className={
                          recipe.name === selected?.name ? "active" : ""
                        }
                        onClick={(e) => selectedRecipe(e, recipe)}
                      >
                        {recipe.name}
                      </span>
                    </div>
                  );
                })}
            </p>
          </Col>
          <Col xs={24} sm={16} lg={16} className="right-side">
            <span>{selected?.name}</span>
            <div>
              <div>
                <div className="info-header">
                  <span>ingredients:</span>
                  <span onClick={(e) => setOpen(!open)}>
                    <PlusCircleFilled />
                  </span>
                </div>
                <ul>
                  {selected?.ingredients.map((value, index) => {
                    return <li key={index}>{value}</li>;
                  })}
                </ul>
              </div>
              <div>
                <span>directions:</span>
                <ol>
                  {selected?.direction.map((value, index) => {
                    return <li key={index}>{value}</li>;
                  })}
                </ol>
              </div>
            </div>
            <Row className="buttons">
              <Button>
                <EditOutlined />
                Edit
              </Button>
              <Button>
                <DeleteOutlined />
                Delete
              </Button>
            </Row>
          </Col>
          <Modal
            title="Add a new recipe into the box"
            visible={open}
            maskClosable={false}
            onOk={handleOk}
            onCancel={() => setOpen(!open)}
            footer={[
              <Button
                key="submit"
                type="primary"
                loading={false}
                onClick={(ev) => onSubmitHandler(ev)}
              >
                Submit
              </Button>,
            ]}
          >
            <Input
              placeholder="Enter a recipe name"
              name="name"
              allowClear
              value={form?.name}
              onChange={(ev) => onchange(ev)}
            />
            <Input.TextArea
              placeholder="Enter a recipe ingredients"
              name="ingredients"
              allowClear
              value={form?.ingredients.join("\\")}
              onChange={(ev) => onchange(ev)}
            />
            <Input.TextArea
              placeholder="Enter a recipe direction"
              name="direction"
              allowClear
              value={form?.direction.join("\\")}
              onChange={(ev) => onchange(ev)}
            />
          </Modal>
        </Row>
      </div>
    </div>
  );
}

export default App;
