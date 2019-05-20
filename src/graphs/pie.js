import React from 'react';
import ReactEcharts from 'echarts-for-react' 

import piedata from '../json/piedata.json'

const data = Object.keys(piedata)
  .map(key => ({
    name: key,
    value: piedata[key]
  }))
  .sort((a, b) => b.value - a.value)

const formatNumber = number => {
  return number.toLocaleString(navigator.language, { minimumFractionDigits: 0 })
}

const option = {
  title : {
      text: 'งบประมาณเฉลี่ยของแต่ละกระทรวง',
      x:'center'
  },
  tooltip : {
      trigger: 'item',
      formatter: ({name, value, percent}) => {
        return `${name} : ${formatNumber(value)} (${percent}%)`
      }
  },
  series : [
      {
          name: 'งบประมาณเฉลี่ยของแต่ละกระทรวง',
          type: 'pie',
          radius : '65%',
          center: ['50%', '60%'],
          data: data,
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ],
  color: ['#1dd1a1', '#5f27cd', '#ff9f43', '#54a0ff', '#ee5253', '#eae075']
}

const Pie1 = () => {
  return (
    <div>
      <ReactEcharts
        option={option}
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          height: '340px'
        }}
      />
    </div>
  )
}

export default Pie1