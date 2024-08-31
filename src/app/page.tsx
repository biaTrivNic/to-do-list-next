import React from 'react';
import { TaskList } from '@/components/Tasks';
import './styles/reset.css';
import './styles/theme.css';
import styles from './styles/Home.module.css';
import Header from '@/components/Header/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <TaskList />
        </div>
      </main>
    </>
  );
};

export default Home;
