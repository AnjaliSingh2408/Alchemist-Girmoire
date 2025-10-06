import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

/**
 * data: expects [{ date: '2025-10-01', adherence: 80 }, ...]
 */
export default function AdherenceChart({ data = [] }) {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Adherence (%)",
        data: data.map((d) => d.adherence || 0),
        borderColor: "rgb(20,184,166)",
        backgroundColor: "rgba(20,184,166,0.2)",
        tension: 0.3,
      },
    ],
  };

  return <Line data={chartData} />;
}
