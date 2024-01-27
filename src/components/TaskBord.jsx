import { useState } from "react";
import TaskAction from "./TaskAction";
import TaskList from "./TaskLIst";

export default function TaskBord() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to Learn React such than, I can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
  };

  const [task, setTask] = useState([defaultTask]);

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TaskList />
        </div>
      </div>
    </section>
  );
}
