import React from "react";
import style from "./DeleteTask.module.css";

function DeleteTask() {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <div className={style.exitIcon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z"
                stroke="#E11428"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={style.titleText}>Delete Task</div>
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
          <div className={style.text}>
            Are you sure want to delete this task? your action can’t be
            reverted.
          </div>
          <div className={style.buttonContainer}>
            <button className={style.buttonCencel}>Cencel</button>
            <button className={style.buttonNew}>Delete Task</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default DeleteTask;
