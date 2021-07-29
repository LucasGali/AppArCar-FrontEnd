import React from 'react';
import Gauge from 'components/Charts/Gauge';
import Bar from 'components/Charts/Bar';
import Line from 'components/Charts/Line';
import NavBarComponent from 'components/NavBarComponent/NavBarComponent';
import Footer from 'components/Footer/Footer';
import text from 'utils/text';
import './Metrics.css'

const Metrics = () => {

  const sprintData = [
    {
      name: 'Planning Original',
      data: [46, 47, 54, 87, 89, 99],
    },
    {
      name: 'Update',
      data: [46, 55, 54, 117, 89, 130],
    },
    {
      name: 'Completado',
      data: [39, 40, 5, 66, 10, 130],
    },
    {
      name: 'Carryover',
      data: [0, 15, 49, 51, 79, 0],
    },
  ];

  const sprintCategories = [
    'Sprint 0',
    'Sprint 1',
    'Sprint 2',
    'Sprint 3',
    'Sprint 4',
    'Sprint 5',
  ];

  return (
    <div>
      <NavBarComponent isGuest={false} inRegistration={false} />
      <div data-testid="metrics-div-view" className="metrics-view">
        <div className="metrics-intro">
          <h1>{text.metrics.title}</h1>
          <p>{text.metrics.subtitle}</p>
        </div>
        <div className="first-metric">
          <div className="second-chart">
            <Gauge data={sprintData} categories={sprintCategories} />
          </div>
          <div className="second-chart">
            <Bar />            
          </div>
        </div>
        <div className="second-metric">
          <div className="second-chart">
            <Line />
          </div>
        </div>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Metrics;
