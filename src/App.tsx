import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskInput from './components/TaskInput';
import TaskCard from './components/TaskCard';
import Footer from './components/Footer';
import type { TaskCardProps } from './libs/types';

function App() {
  // Mock data for the tasks from the PDF
  const tasks: TaskCardProps[] = [
    {
      id: 1,
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: 2,
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: 3,
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: false,
    },
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Render Header Component */}
      <Header />

      <div className="d-flex flex-grow-1">
        {/* Render Sidebar Component and pass props */}
        <Sidebar userName="chanadda" type="admin" />

        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* Render TaskInput Component */}
            <TaskInput />
            
            {/* Render TaskCard Components using map and pass props */}
            <div className="m-2 p-0">
              {tasks.map((task) => (
                <TaskCard key={task.id} {...task} />
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Render Footer Component and pass props */}
      <Footer year="2025" fullName="warangkana chitwarangkana" studentId="660610792" />
    </div>
  );
}

export default App;
