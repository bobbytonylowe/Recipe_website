
// import React, { useState } from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// import PieData from './Data/PieData'
// import getPieData from './FetchData'




// class PieRechartComponent extends React.Component {
    
//     const [AllData, setData] = useState({});
    
//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await getData();
//             setData(data.PieData.PieData);
//         }
//         fetchData();
//     })

//     COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

//     // source	Score	Amount of reviews
//     // Resy	      4.9	
//     // Deliveroo	4.6	 19
//     // Google	  4.7	 69
//     // Facebook		     22
//     // Trip Advisor	5	3
//     pieData = [PieData]

//     // pieData = [
//     //     {
//     //         "name": "Deliveroo",
//     //         "value": 19
//     //     },
//     //     {
//     //         "name": "Google",
//     //         "value": 69
//     //     },
//     //     {
//     //         "name": "Facebook",
//     //         "value": 22
//     //     },
//     //     {
//     //         "name": "Trip Advisor",
//     //         "value": 3
//     //     }
//     // ];

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