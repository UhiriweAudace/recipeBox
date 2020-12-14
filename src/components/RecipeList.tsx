import React from "react";
import { Col } from "antd";
import { RecipeListProps } from "../interfaces";

const RecipeList: React.FC<RecipeListProps> = ({ recipes, selected, setSelected }) => {
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
                {recipe.name.charAt(0).toUpperCase() + recipe.name.substring(1).toLowerCase()}
              </div>
            );
          })}
      </div>
    </Col>
  );
};

export default RecipeList;
