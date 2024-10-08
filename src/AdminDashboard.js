import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Users, UserCheck, TrendingUp, ChevronUp, ChevronDown } from 'lucide-react';

const mockData = [
  { name: 'Gen', utenti: 120 },
  { name: 'Feb', utenti: 150 },
  { name: 'Mar', utenti: 200 },
  { name: 'Apr', utenti: 180 },
  { name: 'Mag', utenti: 220 },
  { name: 'Giu', utenti: 250 },
];

const eventTypeData = [
  { name: 'Culturali', value: 35 },
  { name: 'Sportivi', value: 25 },
  { name: 'Musicali', value: 20 },
  { name: 'Gastronomici', value: 15 },
  { name: 'Altri', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const Card = ({ children, className }) => (
  <div className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

const StatCard = ({ title, value, icon: Icon, change }) => (
  <Card>
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <Icon className="h-4 w-4 text-blue-500" />
    </div>
    <div className="text-2xl font-bold">{value}</div>
    <p className={`text-xs ${change >= 0 ? 'text-green-500' : 'text-red-500'} flex items-center mt-1`}>
      {change >= 0 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      {Math.abs(change)}% rispetto al mese scorso
    </p>
  </Card>
);

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard Eventi Comunali</h1>
      
      <div className="grid gap-6 grid-cols-12">
        {/* KPI principali */}
        <div className="col-span-12 lg:col-span-8 grid gap-6 grid-cols-2">
          <StatCard title="Eventi Totali" value="156" icon={Calendar} change={5} />
          <StatCard title="Eventi Attivi" value="42" icon={Calendar} change={-2} />
          <StatCard title="Utenti Attivi" value="1,234" icon={Users} change={8} />
          <StatCard title="Media Partecipanti" value="75" icon={UserCheck} change={3} />
        </div>

        {/* Grafico a torta */}
        <Card className="col-span-12 lg:col-span-4">
          <h2 className="text-xl font-semibold mb-4">Tipi di Eventi</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={eventTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {eventTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Grafico a barre */}
        <Card className="col-span-12 lg:col-span-8">
          <h2 className="text-xl font-semibold mb-4">Trend Utenti per Mese</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="utenti" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Eventi popolari */}
        <Card className="col-span-12 lg:col-span-4">
          <h2 className="text-xl font-semibold mb-4">Eventi Popolari</h2>
          <ul className="space-y-3">
            {['Festa della Musica', 'Mostra d\'Arte Contemporanea', 'Maratona Cittadina', 'Festival del Cibo di Strada'].map((evento, index) => (
              <li key={index} className="flex items-center bg-gray-100 p-3 rounded-lg">
                <TrendingUp className="h-5 w-5 mr-3 text-green-500" />
                <span className="font-medium">{evento}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

































/** VARIANTE NUMERO DUE */




// import React from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   LineChart,
//   Line,
// } from 'recharts';
// import {
//   Calendar,
//   Users,
//   UserCheck,
//   TrendingUp,
//   ChevronUp,
//   ChevronDown,
// } from 'lucide-react';

// // Dati Mock Aggiornati
// const mockData = [
//   { name: 'Gen', utenti: 120 },
//   { name: 'Feb', utenti: 150 },
//   { name: 'Mar', utenti: 200 },
//   { name: 'Apr', utenti: 180 },
//   { name: 'Mag', utenti: 220 },
//   { name: 'Giu', utenti: 250 },
//   { name: 'Lug', utenti: 300 },
//   { name: 'Ago', utenti: 280 },
//   { name: 'Set', utenti: 320 },
//   { name: 'Ott', utenti: 350 },
//   { name: 'Nov', utenti: 400 },
//   { name: 'Dic', utenti: 450 },
// ];

// const eventTypeData = [
//   { name: 'Culturali', value: 35 },
//   { name: 'Sportivi', value: 25 },
//   { name: 'Musicali', value: 20 },
//   { name: 'Gastronomici', value: 15 },
//   { name: 'Altri', value: 5 },
// ];

// const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

// // Nuovi Dati per il Grafico a Linee
// const userGrowthData = [
//   { name: 'Gen', utenti: 120 },
//   { name: 'Feb', utenti: 150 },
//   { name: 'Mar', utenti: 180 },
//   { name: 'Apr', utenti: 200 },
//   { name: 'Mag', utenti: 220 },
//   { name: 'Giu', utenti: 240 },
//   { name: 'Lug', utenti: 260 },
//   { name: 'Ago', utenti: 280 },
//   { name: 'Set', utenti: 300 },
//   { name: 'Ott', utenti: 320 },
//   { name: 'Nov', utenti: 340 },
//   { name: 'Dic', utenti: 360 },
// ];

// // Tabella delle Recenti Attività
// const recentActivities = [
//   { id: 1, evento: 'Festa della Musica', data: '08/10/2023', partecipanti: 150 },
//   { id: 2, evento: 'Maratona Cittadina', data: '15/10/2023', partecipanti: 300 },
//   { id: 3, evento: 'Mostra d\'Arte Contemporanea', data: '20/10/2023', partecipanti: 200 },
//   { id: 4, evento: 'Festival del Cibo di Strada', data: '25/10/2023', partecipanti: 250 },
// ];

// const Card = ({ children, className }) => (
//   <div
//     className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${className}`}
//   >
//     {children}
//   </div>
// );

// const StatCard = ({ title, value, icon: Icon, change }) => (
//   <Card className="flex flex-col justify-between">
//     <div className="flex justify-between items-center mb-4">
//       <h3 className="text-md font-semibold text-gray-700">{title}</h3>
//       <Icon className="h-6 w-6 text-indigo-600" />
//     </div>
//     <div className="text-3xl font-bold text-gray-900">{value}</div>
//     <p
//       className={`text-sm ${
//         change >= 0 ? 'text-green-500' : 'text-red-500'
//       } flex items-center mt-2`}
//     >
//       {change >= 0 ? (
//         <ChevronUp className="h-4 w-4 mr-1" />
//       ) : (
//         <ChevronDown className="h-4 w-4 mr-1" />
//       )}
//       {Math.abs(change)}% rispetto al mese scorso
//     </p>
//   </Card>
// );

// const AdminDashboard = () => {
//   return (
//     <div className="p-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
//       <h1 className="text-4xl font-extrabold mb-8 text-gray-800">
//         Dashboard Eventi Comunali
//       </h1>

//       {/* KPI Principali */}
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
//         <StatCard
//           title="Eventi Totali"
//           value="156"
//           icon={Calendar}
//           change={5}
//         />
//         <StatCard
//           title="Eventi Attivi"
//           value="42"
//           icon={Calendar}
//           change={-2}
//         />
//         <StatCard
//           title="Utenti Attivi"
//           value="1,234"
//           icon={Users}
//           change={8}
//         />
//         <StatCard
//           title="Media Partecipanti"
//           value="75"
//           icon={UserCheck}
//           change={3}
//         />
//       </div>

//       <div className="grid gap-8 grid-cols-1 lg:grid-cols-12">
//         {/* Grafico a torta */}
//         <div className="lg:col-span-4">
//           <Card>
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//               Tipi di Eventi
//             </h2>
//             <ResponsiveContainer width="100%" height={250}>
//               <PieChart>
//                 <Pie
//                   data={eventTypeData}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   outerRadius={90}
//                   fill="#8884d8"
//                   dataKey="value"
//                   label={({ name, percent }) =>
//                     `${name} (${(percent * 100).toFixed(0)}%)`
//                   }
//                 >
//                   {eventTypeData.map((entry, index) => (
//                     <Cell
//                       key={`cell-${index}`}
//                       fill={COLORS[index % COLORS.length]}
//                     />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </Card>
//         </div>

//         {/* Grafico a barre */}
//         <div className="lg:col-span-8">
//           <Card>
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//               Trend Utenti per Mese
//             </h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart
//                 data={mockData}
//                 margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis allowDecimals={false} />
//                 <Tooltip />
//                 <Bar dataKey="utenti" fill="#4F46E5" barSize={30}>
//                   {mockData.map((entry, index) => (
//                     <Cell
//                       key={`cell-${index}`}
//                       fill={COLORS[index % COLORS.length]}
//                     />
//                   ))}
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//           </Card>
//         </div>

//         {/* Grafico a Linee - Analisi Aggiuntiva */}
//         <div className="lg:col-span-8">
//           <Card>
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//               Crescita Utenti nel Tempo
//             </h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={userGrowthData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis allowDecimals={false} />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="utenti" stroke="#10B981" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </Card>
//         </div>

//         {/* Eventi popolari */}
//         <div className="lg:col-span-4">
//           <Card>
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//               Eventi Popolari
//             </h2>
//             <ul className="space-y-4">
//               {['Festa della Musica', 'Mostra d\'Arte Contemporanea', 'Maratona Cittadina', 'Festival del Cibo di Strada'].map((evento, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm transition-transform transform hover:scale-105"
//                 >
//                   <TrendingUp className="h-6 w-6 mr-3 text-green-500" />
//                   <span className="font-medium text-gray-700">{evento}</span>
//                 </li>
//               ))}
//             </ul>
//           </Card>
//         </div>

//         {/* Tabella delle Recenti Attività */}
//         <div className="lg:col-span-12">
//           <Card>
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//               Recenti Attività
//             </h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">
//                       ID
//                     </th>
//                     <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">
//                       Evento
//                     </th>
//                     <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">
//                       Data
//                     </th>
//                     <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">
//                       Partecipanti
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {recentActivities.map((activity) => (
//                     <tr key={activity.id} className="hover:bg-gray-100">
//                       <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
//                         {activity.id}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
//                         {activity.evento}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
//                         {activity.data}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
//                         {activity.partecipanti}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
