// TaskCard.tsx

import React from "react";
import style from "./TaskCard.module.css";

interface TaskCardProps {
  taskName?: string;
  progress?: number; // Menambah prop untuk menentukan progres tugas
}

function TaskCard({ taskName, progress }: TaskCardProps) {
  const progressBarWidth = progress && progress <= 100 ? progress * 2 : 0; // Mengubah nilai progres menjadi lebar progress bar

  return (
    <div
      className={`${style.container} ${
        progress === 100 ? style.containerComplete : ""
      }`}
    >
      <div className={`${style.title} ${!taskName ? style.noTask : ""}`}>
        {taskName ? taskName : "No Task"}
      </div>

      {progress !== undefined && (
        <div className={style.progressBar}>
          <div className={style.progressContainer}>
            <div
              className={`${style.progress} ${
                progress === 100
                  ? style.progressComplete
                  : style.progressIncomplete
              } ${progress >= 90 ? style.rounded : ""}`}
              style={{
                width: "100%",
                maxWidth: progress === 100 ? "100%" : `${progressBarWidth}px`,
              }}
            />
          </div>
          {progress < 100 && (
            <div className={style.progressText}>{`${progress}%`}</div>
          )}
          {progress === 100 && (
            <div className={style.icon}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_9230_37)">
                  <path
                    d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                    fill="#43936C"
                  />
                  <path
                    d="M5.6001 7.89098L7.2001 9.49098L10.2911 6.40002"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9230_37">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 16) rotate(-90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TaskCard;
