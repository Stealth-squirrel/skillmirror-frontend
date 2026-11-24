import { Link } from "react-router-dom";

export const TestsPage = () => {
  return (
    <div>
      <h1>Тесты</h1>
      <p>Здесь вы можете пройти тестирование по выбранным направлениям. Проверьте свои знания и узнайте, какие темы стоит подтянуть.</p>
      
      <div className="card" style={{ marginTop: '20px', maxWidth: '400px' }}>
        <h3>Базовый тест по Frontend</h3>
        <p>20 вопросов • 15 минут</p>
        <Link to="/test" className="btn-small" style={{ border: 'none', cursor: 'pointer' }}>Начать тест</Link>
      </div>
    </div>
  );
};