// Page.tsx
import React from "react";
import Navbar from "./components/Navbar";
import MainCard from "./components/MainCard";
import style from "./page.module.css";
import TaskCard from "./components/TaskCard";

function Page() {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        {/* Menyertakan TaskCard di setiap MainCard */}
        <MainCard
          groupName="Grup Task 1"
          taskCard={
            <TaskCard taskName="Re-designed the zero-g doggie bags. No more spills!" />
          }
        />
        <MainCard groupName="Grup Task 2" taskCard={<TaskCard />} />{" "}
        {/* Tidak menyertakan prop taskName */}
        <MainCard
          groupName="Grup Task 3"
          taskCard={
            <TaskCard taskName="Data Migration: Performance & Culture End Game" />
          }
        />
        <MainCard
          groupName="Grup Task 4"
          taskCard={
            <TaskCard taskName="Bundle interplanetary analytics for improved transmission" />
          }
        />
      </div>
    </div>
  );
}

export default Page;
