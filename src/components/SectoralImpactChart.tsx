import React, { useState } from 'react';

const sectoralData = [
  {
    sector: 'Healthcare',
    percentage: 60,
    details: [
      '235,560 people lost access to condoms',
      '2,385 individuals cut off from ART',
      'Supply chain delays for HIV testing'
    ]
  },
  {
    sector: 'Agriculture',
    percentage: 25,
    details: [
      'Feed the Future program paused',
      'Impact on 1M+ farmers',
      'Risk to crop yields'
    ]
  },
  {
    sector: 'Humanitarian Aid',
    percentage: 15,
    details: [
      '18,075 people lost health services',
      '14,811 lost HIV testing access',
      'Critical aid programs suspended'
    ]
  }
];

export function SectoralImpactChart() {
  const [selectedSector, setSelectedSector] = useState(sectoralData[0]);

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-6">Sectoral Impact Distribution</h2>
        <div className="space-y-4">
          {sectoralData.map((item) => (
            <button
              key={item.sector}
              onClick={() => setSelectedSector(item)}
              className={`w-full text-left p-4 rounded-lg transition-colors ${
                selectedSector.sector === item.sector
                  ? 'bg-blue-50 border-2 border-blue-200'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{item.sector}</span>
                <span className="text-sm text-gray-500">{item.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2 transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold text-lg mb-4">{selectedSector.sector} Impact Details</h3>
        <ul className="space-y-3">
          {selectedSector.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2" />
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}