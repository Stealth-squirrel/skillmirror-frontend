import { Link } from 'react-router-dom';

export const SpecialtiesPage = () => {
  return (
    <div>
      <h1>Специальности</h1>
      <p>Выбери направление и начни подготовку прямо сейчас</p>
      
      <div className="cards-grid">
        <div className="card">
          <h3>Frontend</h3>
          <p>48 тем • 320 вопросов</p>
          <Link to="/test" className="btn-small">Начать →</Link>
        </div>
        <div className="card">
          <h3>Backend</h3>
          <p>52 темы • 410 вопросов</p>
          <Link to="/test" className="btn-small">Начать →</Link>
        </div>
      </div>
    </div>
  );
};