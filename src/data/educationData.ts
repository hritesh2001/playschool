
export type Class = 'LKG' | 'UKG' | '1' | '2' | '3' | '4' | '5';

export type Subject = {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
};

export type Chapter = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  videos: Video[];
};

export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  src: string;
};

// Colors for subjects
const SUBJECT_COLORS = {
  Telugu: 'border-edu-pink',
  Hindi: 'border-edu-orange',
  English: 'border-edu-purple',
  Maths: 'border-edu-blue',
  Science: 'border-edu-green',
  Social: 'border-edu-yellow',
  Computer: 'border-edu-red',
 
};

// Subject icons (using emoji as placeholders, in a real app these would be proper icons or images)
const SUBJECT_ICONS = {
  Telugu: '🎨',
  Hindi: '🎵',
  English: 'abc',
  Maths: '123',
  Science: '🔬',
  Social: '🌍',
  Computer: '💻',
};

// Create data for each class
export const classData: Record<Class, { subjects: Subject[] }> = {
  'LKG': {
    subjects: [
      {
        id: 'lkg-Telugu',
        name: 'Telugu',
        icon: SUBJECT_ICONS.Telugu,
        color: SUBJECT_COLORS.Telugu,
        description: 'Explore basic colors and shapes'
      },
      {
        id: 'lkg-Hindi',
        name: 'Hindi',
        icon: SUBJECT_ICONS.Hindi,
        color: SUBJECT_COLORS.Hindi,
        description: 'Fun rhymes and songs for little ones'
      },
       {
        id: 'lkg-English',
        name: 'English',
        icon: SUBJECT_ICONS.English,
        color: SUBJECT_COLORS.English,
        description: 'Learn the ABC with fun activities'
      },
      
      {
        id: 'lkg-Maths',
        name: 'Maths',
        icon: SUBJECT_ICONS.Maths,
        color: SUBJECT_COLORS.Maths,
        description: 'Learn to count and recognize numbers 1-10'
      },
      {
        id: 'lkg-Science',
        name: 'Science',
        icon: SUBJECT_ICONS.Science,
        color: SUBJECT_COLORS.Science,
        description: 'Learn to count and recognize numbers 1-10'
      },
       {
        id: 'lkg-Social',
        name: 'Social',
        icon: SUBJECT_ICONS.Social,
        color: SUBJECT_COLORS.Social,
        description: 'Learn to count and recognize numbers 1-10'
      },
     
      
    ]
  },
  'UKG': {
    subjects: [{
      id: 'ukg-Telugu',
        name: 'Telugu',
        icon: SUBJECT_ICONS.Telugu,
        color: SUBJECT_COLORS.Telugu,
        description: 'Learn about plants, animals, and our environment'
      },
      {
        id: 'ukg-Hindi',
        name: 'Hindi',
        icon: SUBJECT_ICONS.Hindi,
        color: SUBJECT_COLORS.Hindi,
        description: 'Fun rhymes and songs for little ones'
      },
      {
        id: 'ukg-English',
        name: 'English',
        icon: SUBJECT_ICONS.English,
        color: SUBJECT_COLORS.English,
        description: 'StTelugu forming simple words and sentences'
      },
      {
        id: 'ukg-Maths',
        name: 'Maths',
        icon: SUBJECT_ICONS.Maths,
        color: SUBJECT_COLORS.Maths,
        description: 'Learn to count up to 20 and basic addition'
      },
      
      {
        id: 'ukg-Science',
        name: 'Science',
        icon: SUBJECT_ICONS.Science,
        color: SUBJECT_COLORS.Science,
        description: 'Learn about plants, animals, and our environment'
      }, 
      {
        id: 'ukg-Social',
        name: 'Social',
        icon: SUBJECT_ICONS.Social,
        color: SUBJECT_COLORS.Social,
        description: 'Learn about plants, animals, and our environment'
      }, 
        
    ]
  },
  '1': {
    subjects: [
      {
      id: '1-Telugu',
        name: 'Telugu',
        icon: SUBJECT_ICONS.Telugu,
        color: SUBJECT_COLORS.Telugu,
        description: 'Learn about plants, animals, and our environment'
      },
      {
        id: '1-Hindi',
        name: 'Hindi',
        icon: SUBJECT_ICONS.Hindi,
        color: SUBJECT_COLORS.Hindi,
        description: 'Fun rhymes and songs for little ones'
      },
       {
        id: '1-English',
        name: 'English',
        icon: SUBJECT_ICONS.English,
        color: SUBJECT_COLORS.English,
        description: 'Reading, writing and grammar basics'
      },
      {
        id: '1-Maths',
        name: 'Maths',
        icon: SUBJECT_ICONS.Maths,
        color: SUBJECT_COLORS.Maths,
        description: 'Addition, subtraction and counting up to 100'
      },
      {
        id: '1-Science',
        name: 'Science',
        icon: SUBJECT_ICONS.Science,
        color: SUBJECT_COLORS.Science,
        description: 'Exploring nature and the world around us'
      },
      {
        id: '1-Social',
        name: 'Social',
        icon: SUBJECT_ICONS.Science,
        color: SUBJECT_COLORS.Science,
        description: 'Exploring nature and the world around us'
      },
    ]
  },
  '2': {
    subjects: [
       {
        id: '2-Telugu',
        name: 'Telugu',
        icon: SUBJECT_ICONS.Telugu,
        color: SUBJECT_COLORS.Telugu,
        description: 'Reading comprehension and writing skills'
      },
      {
        id: '2-Hindi',
        name: 'Hindi',
        icon: SUBJECT_ICONS.Hindi,
        color: SUBJECT_COLORS.Hindi,
        description: 'Reading comprehension and writing skills'
      },
       {
        id: '2-English',
        name: 'English',
        icon: SUBJECT_ICONS.English,
        color: SUBJECT_COLORS.English,
        description: 'Reading comprehension and writing skills'
      },
      {
        id: '2-Maths',
        name: 'Maths',
        icon: SUBJECT_ICONS.Maths,
        color: SUBJECT_COLORS.Maths,
        description: 'Addition, subtraction and multiplication basics'
      },
     
      {
        id: '2-Science',
        name: 'Science',
        icon: SUBJECT_ICONS.Science,
        color: SUBJECT_COLORS.Science,
        description: 'Plants, animals and basic experiments'
      },
      {
        id: '2-Social',
        name: 'Social',
        icon: SUBJECT_ICONS.Social,
        color: SUBJECT_COLORS.Social,
        description: 'Plants, animals and basic experiments'
      },
    ]
  },
  '3': {
    subjects: [
      {
        id: '3-Telugu',
        name: 'Telugu',
        icon: SUBJECT_ICONS.Telugu,
        color: SUBJECT_COLORS.Telugu,
        description: 'Reading comprehension and writing skills'
      },
      {
        id: '3-Hindi',
        name: 'Hindi',
        icon: SUBJECT_ICONS.Hindi,
        color: SUBJECT_COLORS.Hindi,
        description: 'Reading comprehension and writing skills'
      },
       {
        id: '3-English',
        name: 'English',
        icon: SUBJECT_ICONS.English,
        color: SUBJECT_COLORS.English,
        description: 'Advanced reading and creative writing'
      },
      {
        id: '3-Maths',
        name: 'Mathematics',
        icon: SUBJECT_ICONS.Maths,
        color: SUBJECT_COLORS.Maths,
        description: 'Multiplication, division and fractions'
      },
     
      {
        id: '3-Science',
        name: 'Science',
        icon: SUBJECT_ICONS.Science,
        color: SUBJECT_COLORS.Science,
        description: 'Human body, matter and energy'
      },
      {
        id: '3-Social',
        name: 'Social',
        icon: SUBJECT_ICONS.Social,
        color: SUBJECT_COLORS.Social,
        description: 'Communities, maps and famous people'
      },
    ]
  },
  '4': {
    subjects: [
       {
        id: '4-Telugu',
        name: 'Telugu',
        icon: SUBJECT_ICONS.Telugu,
        color: SUBJECT_COLORS.Telugu,
        description: 'Reading comprehension and writing skills'
      },
      {
        id: '4-Hindi',
        name: 'Hindi',
        icon: SUBJECT_ICONS.Hindi,
        color: SUBJECT_COLORS.Hindi,
        description: 'Reading comprehension and writing skills'
      },
       {
        id: '4-English',
        name: 'English',
        icon: SUBJECT_ICONS.English,
        color: SUBJECT_COLORS.English,
        description: 'Literature, grammar and composition'
      },
      {
        id: '4-Maths',
        name: 'Mathematics',
        icon: SUBJECT_ICONS.Maths,
        color: SUBJECT_COLORS.Maths,
        description: 'Advanced fractions, decimals and geometry'
      },
     
      {
        id: '4-Science',
        name: 'Science',
        icon: SUBJECT_ICONS.Science,
        color: SUBJECT_COLORS.Science,
        description: 'Ecosystems, electricity and motion'
      },
      {
        id: '4-Social',
        name: 'Social Studies',
        icon: SUBJECT_ICONS.Social,
        color: SUBJECT_COLORS.Social,
        description: 'Geography, history and cultures'
      },
      {
        id: '4-Computer',
        name: 'Computer Science',
        icon: SUBJECT_ICONS.Computer,
        color: SUBJECT_COLORS.Computer,
        description: 'Introduction to Computers and basic programming'
      },
    ]
  },
  '5': {
    subjects: [
      {
        id: '5-Telugu',
        name: 'Telugu',
        icon: SUBJECT_ICONS.Telugu,
        color: SUBJECT_COLORS.Telugu,
        description: 'Reading comprehension and writing skills'
      },
      {
        id: '5-Hindi',
        name: 'Hindi',
        icon: SUBJECT_ICONS.Hindi,
        color: SUBJECT_COLORS.Hindi,
        description: 'Reading comprehension and writing skills'
      },
      {
        id: '5-English',
        name: 'English',
        icon: SUBJECT_ICONS.English,
        color: SUBJECT_COLORS.English,
        description: 'Advanced literature and essay writing'
      },
      {
        id: '5-Maths',
        name: 'Mathematics',
        icon: SUBJECT_ICONS.Maths,
        color: SUBJECT_COLORS.Maths,
        description: 'Algebra foundations and advanced computation'
      },
      
      {
        id: '5-Science',
        name: 'Science',
        icon: SUBJECT_ICONS.Science,
        color: SUBJECT_COLORS.Science,
        description: 'States of matter, forces, and space exploration'
      },
      {
        id: '5-Social',
        name: 'Social Studies',
        icon: SUBJECT_ICONS.Social,
        color: SUBJECT_COLORS.Social,
        description: 'History, government and economics basics'
      },
      {
        id: '5-Computer',
        name: 'Computer Science',
        icon: SUBJECT_ICONS.Computer,
        color: SUBJECT_COLORS.Computer,
        description: 'Programming basics and digital literacy'
      },
    ]
  }
};

// Example chapters and videos (for the "Numbers" subject in LKG)
export const getChapters = (subjectId: string): Chapter[] => {
  // This is a simplified mock implementation
  // In a real app, this would fetch from an API
  
  if (subjectId === 'lkg-Maths') {
    return [
      {
        id: 'lkg-Maths-ch1',
        name: 'Counting 1-5',
        description: 'Learn to count from one to five with fun examples',
        thumbnail: 'https://images.unsplash.com/photo-1501686962565-1a4f05c6e3f7?q=80',
        videos: [
          {
            id: 'lkg-Maths-ch1-v1',
            title: 'Introduction to Numbers',
            description: 'Basic introduction to what numbers are',
            thumbnail: 'https://srdigischool.s3.ap-south-1.amazonaws.com/Thumbnails/LKG/EVS/JUNIOR+KG+TODDLER+PLAY++EVS++SEM+1.jpg',
            duration: '09:30',
            src: 'https://srdigischool.s3.ap-south-1.amazonaws.com/LKG/EVS/in_y2mate.com___JUNIOR_KG_TODDLER_PLAY__EVS__SEM_1_1080/playlist.m3u8'
          },
          {
            id: 'lkg-Maths-ch1-v2',
            title: 'Counting Objects',
            description: 'Practice counting different objects',
            thumbnail: 'https://srdigischool.s3.ap-south-1.amazonaws.com/Thumbnails/LKG/EVS/JUNIOR+KG+TODDLER+PLAY++EVS++SEM+1.jpg',
            duration: '07:47',
            src: 'https://srdigischool.s3.ap-south-1.amazonaws.com/LKG/English/JUNIOR_KG_TODDLER_PLAY_STORIES_SEM_1_1080p/playlist.m3u8'
          }
        ]
      },
      {
        id: 'lkg-Maths-ch2',
        name: 'Counting 6-10',
        description: 'Learn to count from six to ten',
        thumbnail: 'https://srdigischool.s3.ap-south-1.amazonaws.com/Thumbnails/LKG/EVS/JUNIOR+KG+TODDLER+PLAY++EVS++SEM+1.jpg',
        videos: [
          {
            id: 'lkg-Maths-ch2-v1',
            title: 'Numbers 6 to 8',
            description: 'Learning to count and recognize 6, 7 and 8',
            thumbnail: 'https://srdigischool.s3.ap-south-1.amazonaws.com/Thumbnails/LKG/EVS/JUNIOR+KG+TODDLER+PLAY++EVS++SEM+1.jpg',
            duration: '5:10',
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
          },
          {
            id: 'lkg-Maths-ch2-v2',
            title: 'Numbers 9 and 10',
            description: 'Learning to count and recognize 9 and 10',
            thumbnail: 'https://images.unsplash.com/photo-1621445725582-276d9efd1a62?q=80',
            duration: '3:55',
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
          }
        ]
      }
    ];
  }
  
  if (subjectId === 'lkg-English') {
    return [
      {
        id: 'lkg-English-ch1',
        name: 'Vowels',
        description: 'Learn the vowels: A, E, I, O, U',
        thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80',
        videos: [
          {
            id: 'lkg-English-ch1-v1',
            title: 'Meet the Vowels',
            description: 'Introduction to vowel sounds',
            thumbnail: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80',
            duration: '4:15',
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
          }
        ]
      },
      {
        id: 'lkg-English-ch2',
        name: 'Consonants',
        description: 'Learn the consonants',
        thumbnail: 'https://images.unsplash.com/photo-1599666328065-e93ef44d54f3?q=80',
        videos: [
          {
            id: 'lkg-English-ch2-v1',
            title: 'Consonants PTelugu 1',
            description: 'Learn the first group of consonants',
            thumbnail: 'https://images.unsplash.com/photo-1629017131848-47df0b1e0d7c?q=80',
            duration: '6:20',
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
          }
        ]
      }
    ];
  }
  
  // Default - return some generic chapters if subject not found
  return [
    {
      id: 'generic-ch1',
      name: 'Introduction',
      description: 'Introduction to the subject',
      thumbnail: 'https://srdigischool.s3.ap-south-1.amazonaws.com/Thumbnails/LKG/EVS/JUNIOR+KG+TODDLER+PLAY++EVS++SEM+1.jpg',
      videos: [
        {
          id: 'generic-ch1-v1',
          title: 'Getting StTelugued',
          description: 'An introduction to this topic',
          thumbnail: 'https://srdigischool.s3.ap-south-1.amazonaws.com/Thumbnails/LKG/EVS/JUNIOR+KG+TODDLER+PLAY++EVS++SEM+1.jpg',
          duration: '4:30',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
      ]
    }
  ];
};
