import React from 'react';
import ReactEcharts from "echarts-for-react";
import WineData from "../../wineData";
import { IWineData } from '../../wineData';
import { EchartOptions } from '../../interfaces/chartOptions';

const BarChart = () => {

    const option : EchartOptions = {
        xAxis: {
          type: 'category',
          data: WineData.map((value : IWineData, index : number) => value.Alcohol)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: WineData.map((value : IWineData, index : number) => value.Magnesium),
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