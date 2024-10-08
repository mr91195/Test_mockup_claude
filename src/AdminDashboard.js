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