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
          taskCard={[
            <TaskCard
              key={1}
              taskName="Re-designed the zero-g doggie bags. No more spills!"
              progress={100}
            />,
            <TaskCard
              key={2}
              taskName="Re-designed the zero-g doggie bags. No more spills!"
              progress={30}
            />,
          ]}
        />
        <MainCard
          groupName="Grup Task 2"
          taskCard={[<TaskCard key={1} taskName="" />]}
        />
        {/* Tidak menyertakan prop taskName */}
        <MainCard
          groupName="Grup Task 3"
          taskCard={[
            <TaskCard
              key={1}
              taskName="Data Migration: Performance & Culture End Game"
              progress={60}
            />,
          ]}
        />
        <MainCard
          groupName="Grup Task 4"
          taskCard={[
            <TaskCard
              key={1}
              taskName="Bundle interplanetary analytics for improved transmission"
              progress={20}
            />,
          ]}
        />
      </div>
    </div>
  );
}

export default Page;
