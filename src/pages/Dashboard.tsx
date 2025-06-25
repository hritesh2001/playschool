
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AppHeader from '@/components/layout/AppHeader';
import ClassSelection from '@/components/dashboard/ClassSelection';
import SubjectList from '@/components/dashboard/SubjectList';
import { Class } from '@/data/educationData';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    } else if (user.role === 'student' && user.grade) {
      // If user is a student and has a grade, preselect it
      setSelectedClass(user.grade as Class);
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      
      <main className="container mx-auto p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Welcome, {user.name}! <span className="wave-animation">👋</span>
          </h1>
          <p className="text-gray-600">Let's continue your learning journey</p>
        </div>
        
        <ClassSelection 
          selectedClass={selectedClass} 
          setSelectedClass={(cls) => setSelectedClass(cls)} 
        />
        
        {selectedClass && (
          <SubjectList selectedClass={selectedClass} />
        )}
      </main>

      {/* Decorative elements */}
      <div className="fixed bottom-0 right-0 w-64 h-64 overflow-hidden -z-10 opacity-20">
        <div className="w-full h-full bg-edu-purple rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="fixed top-0 left-0 w-48 h-48 overflow-hidden -z-10 opacity-20">
        <div className="w-full h-full bg-edu-yellow rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Dashboard;
