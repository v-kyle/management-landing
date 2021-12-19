import React, { useState } from 'react';
import './assets/styles/common.scss';
import PostContainer from './components/PostContainer';
import ReportsContainer from './components/ReportsContainer';

const App = () => {
  const [pageNum, setPageNum] = useState<null | 0 | 1>(null);
  return (
    <div className="app">
      <div className="header" onClick={() => setPageNum(null)}>
        <div
          style={{
            minWidth: '80px',
            textAlign: 'center',
            visibility: pageNum !== null ? 'visible' : 'hidden',
          }}
        >
          Назад
        </div>
        <div style={{ margin: 'auto', paddingRight: '80px' }}>
          Основы менеджмента качества и управления бизнес-процессами
        </div>
      </div>
      <div className="main">
        {pageNum === null && (
          <div className="main-page-select">
            <div className="button _150 mr-16" onClick={() => setPageNum(0)}>
              Отчет о производстве стальных труб
            </div>
            <div className="button _150 ml-16" onClick={() => setPageNum(1)}>
              Полезная информация о курсе
            </div>
          </div>
        )}
        {pageNum === 0 && <ReportsContainer />}
        {pageNum === 1 && <PostContainer />}
      </div>
      <div className="footer">
        <div>Зуб Виталий, Михайлов Михаил, Никулин Леонид, гр. 8302</div>
        <div>2021 год</div>
      </div>
    </div>
  );
};

export default App;
