import React from 'react';
import ReactEcharts from 'echarts-for-react' 

import line1data from '../json/line1data.json'

const option = {
  title : {
    text: 'งบทั้งหมดของจังหวัด vs. ปี ค.ศ.',
    x:'center'
  },
  xAxis: {
      type: 'category',
      data: line1data['Year']
  },
  yAxis: {
      type: 'value'
  },
  tooltip: {
    trigger: 'axis'
  },
  series: [{
      data: line1data['งบทั้งหมดของจังหวัด'],
      type: 'line',
      showSymbol: false,
  }],
  color: ['#00A0E5']
}

const Line1 = () => {
  return (
    <div>
      <ReactEcharts
        option={option}
        style={{ maxWidth: '700px', margin: '0 auto' }}
      />
    </div>
  )
}

export default Line1