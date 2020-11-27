import React from "react";
import { Col } from "antd";
import { RecipeListProps } from "../types";

export default function RecipeList({ recipes, selected, setSelected }: RecipeListProps) {
  return (
    <Col xs={24} sm={8} lg={6} className="left-side">
      <div className="list">
        {recipes &&
          recipes.map((recipe) => {
            return (
              <div
                key={recipe.id}
                className={recipe.id === selected?.id ? "active" : ""}
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
