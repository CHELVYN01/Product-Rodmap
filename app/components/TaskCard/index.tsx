// TaskCard.tsx
import React from "react";
import style from "./TaskCard.module.css";

interface TaskCardProps {
  taskName?: string;
}

function TaskCard({ taskName }: TaskCardProps) {
  return (
    <div className={style.container}>
      <div className={`${style.title} ${!taskName ? style.noTask : ""}`}>
        {taskName ? taskName : "No Task"}
      </div>
    </div>
  );
}

export default TaskCard;
