
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Class } from '@/data/educationData';

type Props = {
  selectedClass: Class | null;
  setSelectedClass: (cls: Class) => void;
};

const ClassSelection: React.FC<Props> = ({ selectedClass, setSelectedClass }) => {
  const classes: Class[] = ['LKG', 'UKG', '1', '2', '3', '4', '5'];
  
  const classInfo = {
    'LKG': { name: 'Lower Kindergarten', color: 'bg-edu-yellow', icon: '🌟' },
    'UKG': { name: 'Upper Kindergarten', color: 'bg-edu-orange', icon: '✨' },
    '1': { name: 'Class 1', color: 'bg-edu-green', icon: '🏆' },
    '2': { name: 'Class 2', color: 'bg-edu-pink', icon: '🎮' },
    '3': { name: 'Class 3', color: 'bg-edu-blue', icon: '📚' },
    '4': { name: 'Class 4', color: 'bg-edu-purple', icon: '🌈' },
    '5': { name: 'Class 5', color: 'bg-edu-red', icon: '🚀' },
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Select a Class</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {classes.map((cls) => (
          <Card 
            key={cls}
            className={`edu-card cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedClass === cls 
                ? `border-4 ${classInfo[cls].color} border-opacity-100 shadow-lg` 
                : 'border-transparent hover:border-gray-300'
            }`}
            onClick={() => setSelectedClass(cls)}
          >
            <CardContent className="flex flex-col items-center justify-center p-3 h-full">
              <div className={`w-12 h-12 rounded-full ${classInfo[cls].color} flex items-center justify-center text-white text-2xl mb-2`}>
                {classInfo[cls].icon}
              </div>
              <h3 className="font-bold">{cls}</h3>
              <p className="text-xs text-gray-500">{classInfo[cls].name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClassSelection;
