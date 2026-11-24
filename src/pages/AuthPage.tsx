import { useNavigate, Link } from 'react-router-dom';

export const AuthPage = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация успешной регистрации и переход на главную
    navigate('/'); 
  };

  return (
    <div className="auth-layout">
      <div className="auth-container">
        <div className="logo" style={{ marginBottom: '20px' }}>
          <span className="logo-skill">Skill</span>
          <span className="logo-mirror">Mirror</span>
        </div>
        <h2>Создай аккаунт</h2>
        <form onSubmit={handleRegister} className="auth-form">
          <input type="text" placeholder="Имя" required />
          <input type="email" placeholder="Почта" required />
          <input type="password" placeholder="Пароль" required />
          <button type="submit" className="btn-primary">Далее →</button>
        </form>
        <Link to="/" className="back-link">← На главную</Link>
      </div>
    </div>
  );
};