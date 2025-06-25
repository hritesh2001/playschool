
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AppHeader from '@/components/layout/AppHeader';
import ChapterList from '@/components/subject/ChapterList';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { classData } from '@/data/educationData';

const SubjectPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { subjectId } = useParams<{ subjectId: string }>();
  
  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  // Find the subject from our data
  const findSubject = () => {
    for (const [classKey, classValue] of Object.entries(classData)) {
      const subject = classValue.subjects.find(s => s.id === subjectId);
      if (subject) {
        return {
          subject,
          className: classKey
        };
      }
    }
    return null;
  };
  
  const subjectInfo = findSubject();
  
  if (!subjectInfo || !subjectId) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AppHeader />
        <main className="container mx-auto p-4 md:p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Subject Not Found</h1>
          <Button onClick={() => navigate('/dashboard')} className="edu-btn bg-edu-purple">
            Return to Dashboard
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      
      <main className="container mx-auto p-4 md:p-6">
        <div className="mb-6 flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="mr-4"
          >
            <ArrowLeft size={20} className="mr-1" />
            Back
          </Button>
          
          <div>
            <h1 className="text-3xl font-bold">
              {subjectInfo.subject.name}
            </h1>
            <p className="text-gray-600">
              {subjectInfo.className === 'LKG' || subjectInfo.className === 'UKG' 
                ? subjectInfo.className 
                : `Class ${subjectInfo.className}`}
            </p>
          </div>
        </div>
        
        <ChapterList 
          subjectId={subjectId} 
          subjectName={subjectInfo.subject.name} 
        />
      </main>

      {/* Decorative elements */}
      <div className="fixed bottom-0 right-0 w-64 h-64 overflow-hidden -z-10 opacity-20">
        <div className="w-full h-full bg-edu-purple rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default SubjectPage;
