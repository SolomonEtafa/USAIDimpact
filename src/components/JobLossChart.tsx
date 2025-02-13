import React from 'react';

const jobLossData = [
  { category: 'Public Health Workers', count: 5000 },
  { category: 'HIV Program Support Staff', count: 10000 },
  { category: 'NGO and Partner Employees', count: 3500 }, // Estimated middle value
];

export function JobLossChart() {
  const maxCount = Math.max(...jobLossData.map(d => d.count));
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Direct Job Losses by Sector</h2>
      <div className="space-y-4">
        {jobLossData.map((item) => (
          <div key={item.category}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                {item.category}
              </span>
              <span className="text-sm text-gray-500">{item.count.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
                style={{ width: `${(item.count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Source: Ethiopia's Ministry of Health, UNAIDS, and NGO reports
      </p>
    </div>
  );
}