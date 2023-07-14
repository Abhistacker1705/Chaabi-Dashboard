import React from "react";
import {Chart} from "react-google-charts";

const SmallGraphCards = (props) => {
  const data = [
    ["Day", props.xData],
    ["M", 400],
    ["T", 460],
    ["W", 1120],
    ["T", 980],
    ["F", 540],
    ["S", 800],
    ["S", 540],
  ];

  const options = {
    hAxis: {
      gridlines: {
        count: 0,
      },
    },
    vAxis: {
      gridlines: {
        count: 0,
      },
    },
    chartArea: {width: "10px", height: "10px"},
  };
  return (
    <div id="small__card__container">
      <div id="small__card__inner">
        <h2 id="small__card__header">Heading</h2>
        <div id="small__card__dataAndGraph">
          <div id="small__card__data">
            <span></span>
            <div></div>
          </div>
          <div id="small__card__graph">
            <div style={{display: "flex"}}>
              <Chart
                chartType="AreaChart"
                width={options.width}
                height={options.height}
                data={data}
                options={options}
              />
              <Chart
                chartType="AreaChart"
                maxWidth={options.width}
                height={options.height}
                data={data}
                options={options}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallGraphCards;
