import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Line = () => {
  const options = {
    chart: {
      type: 'spline',
      zoomType: 'xy',
    },
    title: {
      text: '',
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: null,
      },
      dateTimeLabelFormats: {
        // don't display the dummy year
        month: '%e. %b',
        year: '%b',
      },
    },
    plotOptions: {
      series: {
        marker: {
          enabled: true,
        },
      },
    },

    series: [
      {
        name: 'Burndown',
        data: [
          [Date.UTC(2021, 3, 5), 293],
          [Date.UTC(2021, 3, 12), 251],
          [Date.UTC(2021, 3, 19), 265],
          [Date.UTC(2021, 3, 26), 248],
          [Date.UTC(2021, 4, 3), 243],
          [Date.UTC(2021, 4, 10), 255],
          [Date.UTC(2021, 4, 17), 262],
          [Date.UTC(2021, 4, 24), 250],
          [Date.UTC(2021, 4, 31), 242],
          [Date.UTC(2021, 5, 7), 274],
          [Date.UTC(2021, 5, 14), 199],
          [Date.UTC(2021, 5, 21), 167],
          [Date.UTC(2021, 5, 28), 118],
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Line;
