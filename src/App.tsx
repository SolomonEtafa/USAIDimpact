import React, { useState } from 'react';
import { BarChart, PieChart, LineChart, AlertTriangle } from 'lucide-react';
import { JobLossChart } from './components/JobLossChart';
import { EconomicImpactChart } from './components/EconomicImpactChart';
import { SectoralImpactChart } from './components/SectoralImpactChart';
import { RiskMatrix } from './components/RiskMatrix';

function App() {
  const [activeTab, setActiveTab] = useState('jobs');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                USAID Funding Cuts Impact in Ethiopia
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Interactive visualization of economic and social impacts
              </p>
            </div>
            <AlertTriangle className="text-amber-500 h-8 w-8" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          <TabButton
            active={activeTab === 'jobs'}
            onClick={() => setActiveTab('jobs')}
            icon={<BarChart className="h-5 w-5" />}
            label="Job Losses"
          />
          <TabButton
            active={activeTab === 'economic'}
            onClick={() => setActiveTab('economic')}
            icon={<LineChart className="h-5 w-5" />}
            label="Economic Impact"
          />
          <TabButton
            active={activeTab === 'sectoral'}
            onClick={() => setActiveTab('sectoral')}
            icon={<PieChart className="h-5 w-5" />}
            label="Sectoral Impact"
          />
        </div>

        {/* Chart Container */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === 'jobs' && <JobLossChart />}
          {activeTab === 'economic' && <EconomicImpactChart />}
          {activeTab === 'sectoral' && <SectoralImpactChart />}
        </div>

        {/* Risk Matrix (Always Visible) */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Long-Term Risk Assessment</h2>
          <RiskMatrix />
        </div>
      </main>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-blue-100 text-blue-700'
          : 'bg-white text-gray-600 hover:bg-gray-50'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default App;