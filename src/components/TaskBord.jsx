import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskList from "./TaskLIst";

export default function TaskBord() {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to Learn React such than, I can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
  };

  const [tasks, setTasks] = useState([defaultTasks]);

  const handleSearch = (searchInput) => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setTasks([...filtered]);
  };

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <SearchTask onSearch={handleSearch} />
          {tasks.map((task) => (
            <TaskList key={task.id} task={task} />
          ))}
        </div>
      </div>
    </section>
  );
}
