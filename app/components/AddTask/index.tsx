import React from "react";
import style from "./addTask.module.css";

function AddTask() {
  return (
    <div>
      <div className={style.popup}>
        <div className={style.title}>Create Task</div>

        <form className={style.form} action="">
          <label className={style.label} htmlFor="taskName">
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            className={style.input}
            placeholder="Type your Task"
          />
          <label className={style.label} htmlFor="progress">
            Progress
          </label>
          <input
            type="text"
            id="progress"
            className={style.inputProgress}
            placeholder="70%"
          />
          <div className={style.button}>
            <button className={style.buttonCencel}>Cencel</button>
            <button className={style.buttonSave}>Save Task</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
