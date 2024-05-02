import React from "react";
import style from "./NewTask.module.css";

function NewTask() {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <div className={style.titleText}>Create Task</div>
          <div className={style.exitIcon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#404040"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#404040"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <form className={style.formContainer} action="">
          <div className={style.InputContainer}>
            <label className={style.label} htmlFor="name">
              Name Task
            </label>
            <input
              className={style.inputName}
              type="text"
              name=""
              id=""
              placeholder="Type your Task"
            />
          </div>
          <div className={style.InputContainer}>
            <label className={style.label} htmlFor="name">
              Progress
            </label>
            <input
              className={style.inputProgress}
              type="text"
              name=""
              id=""
              placeholder="70%"
            />
          </div>

          <div className={style.buttonContainer}>
            <button className={style.buttonCencel}>Cencel</button>
            <button className={style.buttonNew}>Create Task</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewTask;
