import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const AppShell = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="content-area">
        {}
        <Outlet /> 
      </main>
    </div>
  );
};