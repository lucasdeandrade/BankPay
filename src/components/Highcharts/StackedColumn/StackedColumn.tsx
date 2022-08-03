import * as React from 'react';
import {
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  LineSeries,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { ValueScale } from '@devexpress/dx-react-chart';

interface IChartProps {
    [x: string]: any;
        className?: string | undefined;
        style?: React.CSSProperties | undefined;
}

const Chart: React.FunctionComponent<IChartProps> = (props) => {
  return <></>;
};

interface IDataItem {
  month: string,
  sale: number,
  total: number,
}

const chartData: IDataItem[] = [
  { month: 'Jan', sale: 50, total: 987 },
  { month: 'Feb', sale: 100, total: 3000 },
  { month: 'March', sale: 30, total: 1100 },
  { month: 'April', sale: 107, total: 7100 },
  { month: 'May', sale: 95, total: 4300 },
  { month: 'June', sale: 150, total: 7500 },
];

export default class StackedColumn extends React.Component<object, object> {
  public render(): React.ReactNode {
    return (
      <div className="card">
        <Chart
          data={chartData}
        >
          <ValueScale name="sale" />
          <ValueScale name="total" />

          <ArgumentAxis />
          <ValueAxis scaleName="sale" showGrid={false} showLine={true} showTicks={true} />
          <ValueAxis scaleName="total" position="right" showGrid={false} showLine={true} showTicks={true} />

          <BarSeries
            name="Units Sold"
            valueField="sale"
            argumentField="month"
            scaleName="sale"
          />

          <LineSeries
            name="Total Transactions"
            valueField="total"
            argumentField="month"
            scaleName="total"
          />
        </Chart>
      </div>
    );
  }
}


