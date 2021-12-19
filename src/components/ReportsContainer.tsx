import React from 'react';
import Post from './Post';
import { reports } from '../reports';

const Reports = () => {
  const clickHandler = (id:string) => {
    const el = document.getElementById(`title-${id}`);
    if (el) {
      el.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  return (
    <>
      <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>
        Содержание страницы:
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {reports.map((report) => (
          <div className="scroll-title" onClick={() => clickHandler(report.id)}>
            {report.title}
          </div>
        ))}
      </div>
      {reports.map((report) => <Post post={report} key={report.id} />)}
    </>
  );
};

export default Reports;
