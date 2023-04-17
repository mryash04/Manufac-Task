import React from 'react';
import ReactEcharts from "echarts-for-react";
import WineData from "../../wineData";
import { IWineData } from '../../wineData';
import { EchartOptions } from '../../interfaces/chartOptions';

const BarChart = () => {

  const AlcholFisrtData = WineData.filter((value : any, index : number) => value.Alcohol === 1);

  const AlcholSecondData = WineData.filter((value : IWineData, index : number) => value.Alcohol === 2);

  const AlcholThirdData = WineData.filter((value : IWineData, index : number) => value.Alcohol === 3);

  // Finding Unique Alchol Data

  const uniqueAlcholData = [...new Set(WineData.map((value : IWineData) => value.Alcohol))];

  // Finding Alchol1 Minimum Magnesium Value

  const closest = AlcholFisrtData.reduce(
    (acc : IWineData, loc : IWineData) =>
      acc.Magnesium < loc.Magnesium
        ? acc
        : loc
  );

  // Finding Alchol2 Minimum Magnesium Value

  const closestFirst = AlcholSecondData.reduce(
    (acc : IWineData, loc : IWineData) =>
      acc.Magnesium < loc.Magnesium
        ? acc
        : loc
  );

  // Finding Alchol3 Minimum Magnesium Value

  const closestSecond = AlcholThirdData.reduce(
    (acc : IWineData, loc : IWineData) =>
      acc.Magnesium < loc.Magnesium
        ? acc
        : loc
  );
  

    const option : EchartOptions = {
        xAxis: {
          type: 'category',
          data: uniqueAlcholData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [closest.Magnesium, closestFirst.Magnesium, closestSecond.Magnesium],
            type: 'bar',
            label : {
                show : true
            }
          }
        ]
      }; 
      

  return (
    <>
        <h2 style={{textAlign : "center"}}>Bar Chart visualization</h2>
        <ReactEcharts option={option} style={{height : "300px", width : "100%"}} />
    </>
  )
}

export default BarChart