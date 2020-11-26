import React from "react";
import { Col } from "antd";
import { Recipe } from "../types";

type Props = {
  recipes: Recipe[] | null;
  selected: Recipe | null;
  setSelected: (recipe: Recipe) => void;
};
export default function RecipeList({ recipes, selected, setSelected }: Props) {
  return (
    <Col xs={24} sm={8} lg={8} className="left-side">
      <p>
        {recipes &&
          recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <span className={recipe.name === selected?.name ? "active" : ""} onClick={() => setSelected(recipe)}>
                  {recipe.name}
                </span>
              </div>
            );
          })}
      </p>
    </Col>
  );
}
