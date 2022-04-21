import React from "react";
import { TASKS, CATEGORIES } from "../data";

function Task({ tasks, categories }) {
  return (
    <div className="task">
      <div category={category} className="label">CATEGORY HERE</div>
      <div text={text} className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
