
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AppHeader from '@/components/layout/AppHeader';
import VideoPlayer from '@/components/video/VideoPlayer';
import VideoList from '@/components/video/VideoList';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Chapter, Video } from '@/data/educationData';

const ChapterPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { chapterId } = useParams<{ chapterId: string }>();
  const location = useLocation();
  const { chapter, subjectId, subjectName } = location.state as { 
    chapter: Chapter;
    subjectId: string;
    subjectName: string;
  };
  
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  
  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    
    // If we have videos, select the first one
    if (chapter?.videos?.length > 0 && !selectedVideo) {
      setSelectedVideo(chapter.videos[0]);
    }
  }, [user, navigate, chapter, selectedVideo]);

  if (!chapter || !chapterId) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AppHeader />
        <main className="container mx-auto p-4 md:p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Chapter Not Found</h1>
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
            onClick={() => navigate(`/subject/${subjectId}`)}
            className="mr-4"
          >
            <ArrowLeft size={20} className="mr-1" />
            Back to {subjectName}
          </Button>
          
          <h1 className="text-3xl font-bold">
            {chapter.name}
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {selectedVideo && (
              <VideoPlayer video={selectedVideo} />
            )}
          </div>
          
          <div>
            {selectedVideo && (
              <VideoList 
                videos={chapter.videos} 
                currentVideo={selectedVideo}
                onVideoSelect={setSelectedVideo}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChapterPage;
