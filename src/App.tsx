import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';

import { HomePage } from './pages/HomePage';
import { AuthPage } from './pages/AuthPage';
import { SpecialtiesPage } from './pages/SpecialtiesPage';
import { TestsPage } from './pages/TestsPage';
import { TestPage } from './pages/TestPage';
import { ProgressPage } from './pages/ProgressPage';
import { ProfilePage } from './pages/ProfilePage';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Экран регистрации без Header */}
        <Route path="/register" element={<AuthPage />} />

        {/* Все остальные экраны обернуты в AppShell (с Header) */}
        <Route path="/" element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="specialties" element={<SpecialtiesPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="tests" element={<TestsPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;