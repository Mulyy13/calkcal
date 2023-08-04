import React from 'react';
import './result.scss';
import { Chart } from '../chart/chart';
import { ChartData, ChartOptions } from 'chart.js';
import { RiDonutChartFill } from 'react-icons/ri';

interface ResultProps {
  totalMetabolism: number;
  totalProteins: number;
  totalCarbons: number;
  totalFat: number;
}

const Result: React.FC<ResultProps> = ({
  totalCarbons,
  totalFat,
  totalMetabolism,
  totalProteins,
}) => {
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data: ChartData<'doughnut', number[], unknown> = {
    datasets: [
      {
        data: [totalProteins, totalFat, totalCarbons],
        backgroundColor: ['#167cf7', '#f0c724', '#32eb1a'],
        borderColor: ['#0d87de', '#edd05c', '#97f582'],
        borderWidth: 3,
      },
    ],
    labels: ['Białka', 'Tłuszcze', 'Węglowodany'],
  };

  return (
    <div className="calculator__result">
      <h5>{totalMetabolism.toFixed(0)} Kcal</h5>
      <p className="result__text">Potrzebne kalorie do utrzymania wagi </p>
      <div className="result__chart-box">
        <div className="result__nutritions">
          <div className="result__nutritions-protein">
            <RiDonutChartFill className="result__nutritions-protein--blue" />{' '}
            bialko:{totalProteins.toFixed(0)}
          </div>
          <div className="result__nutritions-fat">
            <RiDonutChartFill className="result__nutritions-fat--yellow" />{' '}
            tłuszcze:{totalFat.toFixed(0)}
          </div>
          <div className="result__nutritions-carbo">
            <RiDonutChartFill className="result__nutritions-carbo--green" />{' '}
            węglowodany:{totalCarbons.toFixed(0)}
          </div>
        </div>
        <div className="result__chart-box-chart">
          <Chart options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Result;
