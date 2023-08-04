import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
  options: ChartOptions<'doughnut'>;
  data: ChartData<'doughnut'>;
}

export const Chart: React.FC<ChartProps> = ({ options, data }) => {
  return <Doughnut data={data} options={options} />;
};
