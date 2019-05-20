import React from 'react';
import ReactEcharts from 'echarts-for-react' 

import line2data from '../json/line2data.json'

const option = {
  title : {
    text: 'งบของกระทรวงศึกษาธิการ vs. ปี ค.ศ.',
    x:'center'
  },
  xAxis: {
      type: 'category',
      data: line2data['Year']
  },
  yAxis: {
      type: 'value'
  },
  tooltip: {
    trigger: 'axis'
  },
  series: [{
      data: line2data['กระทรวงศึกษาธิการ'],
      type: 'line',
      showSymbol: false,
  }],
  color: ['#00A0E5']
}

const Line2 = () => {
  return (
    <div>
      <ReactEcharts
        option={option}
        style={{ maxWidth: '700px', margin: '0 auto' }}
      />
    </div>
  )
}

export default Line2