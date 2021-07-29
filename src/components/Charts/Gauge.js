import React from 'react';
import Highcharts from 'highcharts/highcharts.js';
import highchartsMore from 'highcharts/highcharts-more.js';
import solidGauge from 'highcharts/modules/solid-gauge.js';
import HighchartsReact from 'highcharts-react-official';

highchartsMore(Highcharts);
solidGauge(Highcharts);

const GaugeChart = ({ data, categories }) => {
  const options = {
    chart: {
      type: 'solidgauge',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
      text: '',
    },
    xAxis: {
      //categories: categories,
      title: {
        text: null,
      },
    },
    series: [
      {
        name: 'Test Funcional',
        data: [
          {
            color: Highcharts.getOptions().colors[0],
            radius: '115%',
            innerRadius: '110%',
            y: 100,
          },
        ],
      },
      {
        name: 'E2E Automatizado',
        data: [
          {
            color: Highcharts.getOptions().colors[4],
            radius: '50%',
            innerRadius: '48%',
            y: 10,
          },
        ],
      },
      {
        name: 'Unit Test',
        data: [
          {
            color: Highcharts.getOptions().colors[5],
            radius: '87%',
            innerRadius: '63%',
            y: 65,
          },
        ],
      }
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default GaugeChart;
