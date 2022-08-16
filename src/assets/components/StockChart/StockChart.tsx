// Libraries
import {
  useEffect
} from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


// Types
interface ComponentStockChart {
};

// Chart options
const options = {
  title: {
    text: `Testing Chart`,
  },
  series: [
    {
      data: [1, 2, 3]
    },
    {
      data: [3, 2, 1]
    }
  ]
};


// Component
function StockChart(props: ComponentStockChart): JSX.Element {
  useEffect(() => {

  }, []);

  return(
    <div>
      <HighchartsReact 
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default StockChart;