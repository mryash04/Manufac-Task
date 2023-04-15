export interface EchartOptions{
    xAxis: {
      type: string;
      data: (string | number)[];
  };
    yAxis: {
      type: string;
  };
  series: {
      data: (string | number)[];
      type: string;
      label: {
          show: boolean;
      };
  }[];
  }