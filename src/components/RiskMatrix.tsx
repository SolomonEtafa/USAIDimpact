import React from 'react';

const risks = [
  {
    name: 'Healthcare System Strain',
    likelihood: 0.9,
    severity: 0.7,
    description: 'Immediate impact on healthcare delivery and HIV prevention'
  },
  {
    name: 'Food Insecurity',
    likelihood: 0.8,
    severity: 0.9,
    description: 'PSNP suspension affecting 8 million people'
  },
  {
    name: 'HIV Resurgence',
    likelihood: 0.7,
    severity: 0.95,
    description: 'Risk to 95-95-95 HIV targets achievement'
  },
  {
    name: 'Economic Dependency',
    likelihood: 0.85,
    severity: 0.8,
    description: 'Loss of $1.2B/year in U.S. aid impact'
  }
];

export function RiskMatrix() {
  return (
    <div className="relative h-[500px] w-full">
      <div className="flex">
        {/* Main Matrix Container */}
        <div className="relative flex-grow h-[500px] pl-12 pr-4 pb-12">
          {/* Risk Zones */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
            <div className="bg-green-50" /> {/* Low Risk */}
            <div className="bg-yellow-50" /> {/* Medium-Low Risk */}
            <div className="bg-orange-50" /> {/* Medium Risk */}
            <div className="bg-yellow-50" /> {/* Medium-Low Risk */}
            <div className="bg-orange-50" /> {/* Medium Risk */}
            <div className="bg-red-50" /> {/* High Risk */}
            <div className="bg-orange-50" /> {/* Medium Risk */}
            <div className="bg-red-50" /> {/* High Risk */}
            <div className="bg-red-50" /> {/* Critical Risk */}
          </div>

          {/* Grid Lines */}
          <div className="absolute inset-0">
            {[...Array(4)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute w-px h-full bg-gray-200"
                style={{ left: `${(i / 3) * 100}%` }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute h-px w-full bg-gray-200"
                style={{ top: `${(i / 3) * 100}%` }}
              />
            ))}
          </div>

          {/* Axis Values */}
          <div className="absolute -left-8 inset-y-0 flex flex-col justify-between text-xs text-gray-500">
            <span>High</span>
            <span>Medium</span>
            <span>Low</span>
          </div>
          <div className="absolute -bottom-8 inset-x-0 flex justify-between text-xs text-gray-500">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
          </div>

          {/* Risk Points */}
          {risks.map((risk) => (
            <div
              key={risk.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
              style={{
                left: `${risk.likelihood * 100}%`,
                bottom: `${risk.severity * 100}%`
              }}
            >
              {/* Risk Point */}
              <div className="relative">
                <div className="h-4 w-4 bg-red-500 rounded-full ring-4 ring-red-200 transition-all duration-200 group-hover:ring-red-300" />
                
                {/* Tooltip */}
                <div className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-white rounded-lg shadow-xl text-sm border border-gray-100">
                  <p className="font-semibold text-gray-900">{risk.name}</p>
                  <p className="text-gray-600 text-xs mt-1">{risk.description}</p>
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>Likelihood: {(risk.likelihood * 100).toFixed(0)}%</span>
                    <span>Severity: {(risk.severity * 100).toFixed(0)}%</span>
                  </div>
                  {/* Tooltip Arrow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 transform rotate-45 bg-white border-r border-b border-gray-100"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="w-32 pt-4 pl-2">
          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-xs">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-50 border border-gray-200" />
              <span>Low Risk</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-yellow-50 border border-gray-200" />
              <span>Medium Risk</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-50 border border-gray-200" />
              <span>High Risk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Axis Labels */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 transform text-sm font-medium text-gray-600">
        Severity of Impact
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600">
        Likelihood of Occurrence
      </div>
    </div>
  );
}