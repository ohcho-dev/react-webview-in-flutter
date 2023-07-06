import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import {
  ColorLightEltern10,
  ColorLightEltern6,
  ColorLightEltern7,
} from "constants/ldsConstants/global";
import { CategoryListType } from "types/apis/coaching";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface CustomRadarChartPropsType {
  categoryList: CategoryListType[] | undefined;
}

const CustomRadarChart = ({ categoryList }: CustomRadarChartPropsType) => {
  const returnLevel = (level: string) => {
    if (level === "TTRL_LEVEL1") return 3;
    if (level === "TTRL_LEVEL2") return 2;
    if (level === "TTRL_LEVEL3") return 1;
  };

  return (
    <Radar
      data={{
        labels: categoryList?.map(item => item.growth_category_name),
        datasets: [
          {
            data: categoryList?.map(item => returnLevel(item.level)),
            borderColor: ColorLightEltern7,
            borderWidth: 2,
            backgroundColor: "rgba(194, 234, 229, 0.5)",
            pointBorderWidth: 0,
            pointBackgroundColor: function (context) {
              switch (context.raw) {
                case 3:
                  return "#00C7B1";
                case 2:
                  return "#FFB937";
                case 1:
                  return "#FD7473";
              }
            },
            pointRadius: 4,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        scales: {
          r: {
            backgroundColor: "rgba(90, 196, 177, 0.05)",
            angleLines: {
              color: ColorLightEltern6,
              lineWidth: 1.5,
            },
            grid: {
              color: ColorLightEltern6,
              lineWidth: 1.5,
            },
            pointLabels: {
              color: ColorLightEltern10,
              font: {
                size: 14,
                weight: "600",
              },
            },
            max: 3,
            min: 0,
            ticks: { display: false, stepSize: 1 },
          },
        },
      }}
    />
  );
};

export default CustomRadarChart;
