
import React, { useState, PureComponent } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend , Sector} from 'recharts';
import PieDataTrip_Advisor from './PieDataTrip_Advisor'
import getPieData from '../FetchData'
import PieDataGoogle from './PieDataGoogle'
import PieDataFacebook from './PieDataFacebook'
import PieDataDeliveroo from './PieDataDeliveroo'
import RatingData from '../Data/Rating'


const data = [
  { name: 'Group A', value:  555},
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}




















// class PieRechartComponent extends React.Component {
    
//     // const [AllData, setData] = useState({});
    
//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         const data = await getData();
//     //         setData(data.PieData.PieData);
//     //     }
//     //     fetchData();
//     // })

//     COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

//     // source	Score	Amount of reviews
//     // Resy	      4.9	
//     // Deliveroo	4.6	 19
//     // Google	  4.7	 69
//     // Facebook		     22
//     // Trip Advisor	5	3
//     // pieData = [PieData]

//     pieData = [
//         {
//             "name": "Deliveroo",
//             "value": {PieDataDeliveroo}
//         },
//         {
//             "name": "Google",
//             "value": {RatingData}
//         },
//         {
//             "name": "Facebook",
//             "value": 22
//         },
//         {
//             "name": "Trip Advisor",
//             "value": <PieDataTrip_Advisor/>
//         }
//     ];

//     CustomTooltip = ({ active, payload, label }) => {
//         if (active) {
//             return (
//                 <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
//                     <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
//                 </div>
//             );
//         }

//         return null;
//     };

//     render() {
//         return (
//             <PieChart width={730} height={300}>
//                 <Pie data={this.pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
//                     {
//                         this.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
//                     }
//                 </Pie>
//                 <Tooltip content={<this.CustomTooltip />} />
//                 <Legend />
//             </PieChart>
//         )
//     };
// }

// export default PieRechartComponent;