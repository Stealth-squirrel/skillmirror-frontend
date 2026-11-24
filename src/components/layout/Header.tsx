import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
  // Функция для формирования классов (добавляет класс 'active', если страница открыта)
  const getNavClass = ({ isActive }: { isActive: boolean }) => 
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <header className="header">
      <Link to="/" className="logo">
        <span className="logo-skill">Skill</span>
        <span className="logo-mirror">Mirror</span>
      </Link>
      
      <nav className="main-nav">
        <NavLink to="/" className={getNavClass} end>Главная</NavLink>
        <NavLink to="/specialties" className={getNavClass}>Специальности</NavLink>
        <NavLink to="/tests" className={getNavClass}>Тесты</NavLink>
        <NavLink to="/progress" className={getNavClass}>Прогресс</NavLink>
        <NavLink to="/profile" className={getNavClass}>Профиль</NavLink>
      </nav>

      <div className="header-auth">
        <Link to="/register" className="btn-login">Вход / Регистрация</Link>
      </div>
    </header>
  );
};