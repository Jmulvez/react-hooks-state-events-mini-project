import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      <h2>{tasks.text}</h2>
    </div>
  );
}

export default TaskList;
