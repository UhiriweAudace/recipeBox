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
      <div className="list">
        {recipes &&
          recipes.map((recipe, index) => {
            return (
              <div
                key={recipe.id}
                className={recipe.name === selected?.name ? "active" : ""}
                onClick={() => setSelected(recipe)}
              >
                {recipe.name}
              </div>
            );
          })}
      </div>
    </Col>
  );
}
