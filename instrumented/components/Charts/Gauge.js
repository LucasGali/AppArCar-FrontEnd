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
        name: 'Move',
        data: [
          {
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 80,
          },
        ],
      },
      {
        name: 'Exercise',
        data: [
          {
            color: Highcharts.getOptions().colors[1],
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
