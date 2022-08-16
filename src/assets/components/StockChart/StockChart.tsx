// Libraries
import {
  useEffect
} from 'react';
import Highcharts from 'highcharts';


// Types
interface ComponentStockChart {
  URLEndpoint: string,
};


// Component
function StockChart(props: ComponentStockChart): JSX.Element {
  useEffect(() => {

  }, []);

  return(
    <div id='chart-container'>
      <h1>Chart here</h1>
    </div>
  );
};

export default StockChart;