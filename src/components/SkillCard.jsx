import React, { useState } from 'react';

const SkillCard = ({ skillName, percent }) => {
    



  return (
    <div className="bg-[#181926] rounded-xl p-4 w-full min-w-[200px]">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold text-gray-100">{skillName}</span>
        <span className="text-sm font-semibold text-gray-300">{percent}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full">
        <div
          className="h-2 rounded-full bg-purple-500 transition-all duration-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;