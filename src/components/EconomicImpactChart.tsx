import React from 'react';

const economicData = {
  directLoss: 66, // in millions
  multiplierEffect: 33, // additional impact
  total: 99
};

export function EconomicImpactChart() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Economic Impact (Millions USD/Year)</h2>
      <div className="relative pt-8">
        {/* Direct Loss Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Direct Loss</span>
            <span className="text-sm text-gray-500">${economicData.directLoss}M</span>
          </div>
          <div className="w-full bg-red-100 rounded h-8">
            <div
              className="bg-red-500 h-8 rounded transition-all duration-1000"
              style={{ width: '66.67%' }}
            />
          </div>
        </div>

        {/* Multiplier Effect Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Multiplier Effect</span>
            <span className="text-sm text-gray-500">+${economicData.multiplierEffect}M</span>
          </div>
          <div className="w-full bg-orange-100 rounded h-8">
            <div
              className="bg-orange-500 h-8 rounded transition-all duration-1000"
              style={{ width: '33.33%' }}
            />
          </div>
        </div>

        {/* Total Impact Bar */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Total Impact</span>
            <span className="text-sm text-gray-500">${economicData.total}M</span>
          </div>
          <div className="w-full bg-purple-100 rounded h-8">
            <div
              className="bg-purple-500 h-8 rounded transition-all duration-1000"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Based on 1.5× economic multiplier effect on direct losses
      </p>
    </div>
  );
}