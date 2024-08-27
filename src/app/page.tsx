import React from 'react';
import { AddTask, TaskList, DeleteTask } from '@/components/Tasks';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Ola</h1>
          <AddTask />
          <TaskList />
      </div>
    </main>
  );
};

export default Home;
