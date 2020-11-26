import React from "react";
import { Col } from "antd";
import { RecipeListProps } from "../types";

export default function RecipeList({ recipes, selected, setSelected }: RecipeListProps) {
  return (
    <Col xs={24} sm={8} lg={8} className="left-side">
      <div className="list">
        {recipes &&
          recipes.map((recipe) => {
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
