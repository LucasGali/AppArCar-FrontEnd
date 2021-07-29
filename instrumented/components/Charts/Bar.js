import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Bar = () => {
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


  const options = {
    chart: {
      type: 'bar',
      zoomType: 'y',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: sprintCategories,
      title: {
        text: null,
      },
    },
    series: sprintData,
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Bar;
