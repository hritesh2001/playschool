
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Class, classData, Subject } from '@/data/educationData';

type Props = {
  selectedClass: Class;
};

const SubjectList: React.FC<Props> = ({ selectedClass }) => {
  const navigate = useNavigate();
  const subjects = classData[selectedClass].subjects;

  // Function to get a contrasting text color based on the subject color
  const getTextColor = (color: string) => {
    // Simplified - in a real app you'd analyze the color
    return 'text-gray-800';
  };

  const handleSubjectClick = (subject: Subject) => {
    navigate(`/subject/${subject.id}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Subjects for {selectedClass === 'LKG' || selectedClass === 'UKG' ? selectedClass : `Class ${selectedClass}`}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <Card 
            key={subject.id}
            className={`edu-card cursor-pointer hover:scale-105 ${subject.color}`}
            onClick={() => handleSubjectClick(subject)}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl font-bold mb-4 shadow-md ${getTextColor(subject.color)}`}>
                {subject.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{subject.description}</p>
              <Button 
                className="edu-btn bg-edu-purple hover:bg-edu-purple/90 mt-auto"
                onClick={() => handleSubjectClick(subject)}
              >
                Explore
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
