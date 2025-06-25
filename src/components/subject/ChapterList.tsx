
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getChapters, Chapter } from '@/data/educationData';

type Props = {
  subjectId: string;
  subjectName: string;
};

const ChapterList: React.FC<Props> = ({ subjectId, subjectName }) => {
  const navigate = useNavigate();
  const chapters = getChapters(subjectId);

  const handleChapterClick = (chapter: Chapter) => {
    navigate(`/chapter/${chapter.id}`, { state: { chapter, subjectId, subjectName } });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Chapters for {subjectName}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {chapters.map((chapter) => (
          <Card 
            key={chapter.id}
            className="edu-card cursor-pointer hover:scale-105"
            onClick={() => handleChapterClick(chapter)}
          >
            <CardContent className="p-0">
              <div className="relative h-40 overflow-hidden rounded-t-xl">
                <img 
                  src={chapter.thumbnail} 
                  alt={chapter.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                  <h3 className="text-white font-bold">{chapter.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">{chapter.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{chapter.videos.length} videos</span>
                  <Button 
                    className="edu-btn bg-edu-blue hover:bg-edu-blue/90"
                    onClick={() => handleChapterClick(chapter)}
                  >
                    Start Learning
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;
