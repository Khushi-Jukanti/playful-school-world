
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
  math: 'border-edu-blue',
  english: 'border-edu-purple',
  science: 'border-edu-green',
  social: 'border-edu-yellow',
  art: 'border-edu-pink',
  music: 'border-edu-orange',
  computer: 'border-edu-red',
};

// Subject icons (using emoji as placeholders, in a real app these would be proper icons or images)
const SUBJECT_ICONS = {
  math: '123',
  english: 'abc',
  science: '🔬',
  social: '🌍',
  art: '🎨',
  music: '🎵',
  computer: '💻',
};

// Create data for each class
export const classData: Record<Class, { subjects: Subject[] }> = {
  'LKG': {
    subjects: [
      {
        id: 'lkg-math',
        name: 'Basic Numbers',
        icon: SUBJECT_ICONS.math,
        color: SUBJECT_COLORS.math,
        description: 'Learn to count and recognize numbers 1-10'
      },
      {
        id: 'lkg-english',
        name: 'Alphabets',
        icon: SUBJECT_ICONS.english,
        color: SUBJECT_COLORS.english,
        description: 'Learn the ABC with fun activities'
      },
      {
        id: 'lkg-art',
        name: 'Colors & Shapes',
        icon: SUBJECT_ICONS.art,
        color: SUBJECT_COLORS.art,
        description: 'Explore basic colors and shapes'
      },
      {
        id: 'lkg-music',
        name: 'Rhymes',
        icon: SUBJECT_ICONS.music,
        color: SUBJECT_COLORS.music,
        description: 'Fun rhymes and songs for little ones'
      },
    ]
  },
  'UKG': {
    subjects: [
      {
        id: 'ukg-math',
        name: 'Numbers',
        icon: SUBJECT_ICONS.math,
        color: SUBJECT_COLORS.math,
        description: 'Learn to count up to 20 and basic addition'
      },
      {
        id: 'ukg-english',
        name: 'Words & Sentences',
        icon: SUBJECT_ICONS.english,
        color: SUBJECT_COLORS.english,
        description: 'Start forming simple words and sentences'
      },
      {
        id: 'ukg-science',
        name: 'Nature',
        icon: SUBJECT_ICONS.science,
        color: SUBJECT_COLORS.science,
        description: 'Learn about plants, animals, and our environment'
      },
    ]
  },
  '1': {
    subjects: [
      {
        id: '1-math',
        name: 'Mathematics',
        icon: SUBJECT_ICONS.math,
        color: SUBJECT_COLORS.math,
        description: 'Addition, subtraction and counting up to 100'
      },
      {
        id: '1-english',
        name: 'English',
        icon: SUBJECT_ICONS.english,
        color: SUBJECT_COLORS.english,
        description: 'Reading, writing and grammar basics'
      },
      {
        id: '1-science',
        name: 'Science',
        icon: SUBJECT_ICONS.science,
        color: SUBJECT_COLORS.science,
        description: 'Exploring nature and the world around us'
      },
    ]
  },
  '2': {
    subjects: [
      {
        id: '2-math',
        name: 'Mathematics',
        icon: SUBJECT_ICONS.math,
        color: SUBJECT_COLORS.math,
        description: 'Addition, subtraction and multiplication basics'
      },
      {
        id: '2-english',
        name: 'English',
        icon: SUBJECT_ICONS.english,
        color: SUBJECT_COLORS.english,
        description: 'Reading comprehension and writing skills'
      },
      {
        id: '2-science',
        name: 'Science',
        icon: SUBJECT_ICONS.science,
        color: SUBJECT_COLORS.science,
        description: 'Plants, animals and basic experiments'
      },
    ]
  },
  '3': {
    subjects: [
      {
        id: '3-math',
        name: 'Mathematics',
        icon: SUBJECT_ICONS.math,
        color: SUBJECT_COLORS.math,
        description: 'Multiplication, division and fractions'
      },
      {
        id: '3-english',
        name: 'English',
        icon: SUBJECT_ICONS.english,
        color: SUBJECT_COLORS.english,
        description: 'Advanced reading and creative writing'
      },
      {
        id: '3-science',
        name: 'Science',
        icon: SUBJECT_ICONS.science,
        color: SUBJECT_COLORS.science,
        description: 'Human body, matter and energy'
      },
      {
        id: '3-social',
        name: 'Social Studies',
        icon: SUBJECT_ICONS.social,
        color: SUBJECT_COLORS.social,
        description: 'Communities, maps and famous people'
      },
    ]
  },
  '4': {
    subjects: [
      {
        id: '4-math',
        name: 'Mathematics',
        icon: SUBJECT_ICONS.math,
        color: SUBJECT_COLORS.math,
        description: 'Advanced fractions, decimals and geometry'
      },
      {
        id: '4-english',
        name: 'English',
        icon: SUBJECT_ICONS.english,
        color: SUBJECT_COLORS.english,
        description: 'Literature, grammar and composition'
      },
      {
        id: '4-science',
        name: 'Science',
        icon: SUBJECT_ICONS.science,
        color: SUBJECT_COLORS.science,
        description: 'Ecosystems, electricity and motion'
      },
      {
        id: '4-social',
        name: 'Social Studies',
        icon: SUBJECT_ICONS.social,
        color: SUBJECT_COLORS.social,
        description: 'Geography, history and cultures'
      },
      {
        id: '4-computer',
        name: 'Computer Science',
        icon: SUBJECT_ICONS.computer,
        color: SUBJECT_COLORS.computer,
        description: 'Introduction to computers and basic programming'
      },
    ]
  },
  '5': {
    subjects: [
      {
        id: '5-math',
        name: 'Mathematics',
        icon: SUBJECT_ICONS.math,
        color: SUBJECT_COLORS.math,
        description: 'Algebra foundations and advanced computation'
      },
      {
        id: '5-english',
        name: 'English',
        icon: SUBJECT_ICONS.english,
        color: SUBJECT_COLORS.english,
        description: 'Advanced literature and essay writing'
      },
      {
        id: '5-science',
        name: 'Science',
        icon: SUBJECT_ICONS.science,
        color: SUBJECT_COLORS.science,
        description: 'States of matter, forces, and space exploration'
      },
      {
        id: '5-social',
        name: 'Social Studies',
        icon: SUBJECT_ICONS.social,
        color: SUBJECT_COLORS.social,
        description: 'History, government and economics basics'
      },
      {
        id: '5-computer',
        name: 'Computer Science',
        icon: SUBJECT_ICONS.computer,
        color: SUBJECT_COLORS.computer,
        description: 'Programming basics and digital literacy'
      },
    ]
  }
};

// Example chapters and videos (for the "Numbers" subject in LKG)
export const getChapters = (subjectId: string): Chapter[] => {
  // This is a simplified mock implementation
  // In a real app, this would fetch from an API
  
  if (subjectId === 'lkg-math') {
    return [
      {
        id: 'lkg-math-ch1',
        name: 'Counting 1-5',
        description: 'Learn to count from one to five with fun examples',
        thumbnail: 'https://images.unsplash.com/photo-1501686962565-1a4f05c6e3f7?q=80',
        videos: [
          {
            id: 'lkg-math-ch1-v1',
            title: 'Introduction to Numbers',
            description: 'Basic introduction to what numbers are',
            thumbnail: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80',
            duration: '3:45',
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          },
          {
            id: 'lkg-math-ch1-v2',
            title: 'Counting Objects',
            description: 'Practice counting different objects',
            thumbnail: 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?q=80',
            duration: '4:20',
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
          }
        ]
      },
      {
        id: 'lkg-math-ch2',
        name: 'Counting 6-10',
        description: 'Learn to count from six to ten',
        thumbnail: 'https://images.unsplash.com/photo-1545670723-196ed0954986?q=80',
        videos: [
          {
            id: 'lkg-math-ch2-v1',
            title: 'Numbers 6 to 8',
            description: 'Learning to count and recognize 6, 7 and 8',
            thumbnail: 'https://images.unsplash.com/photo-1554498808-d3ae8f23540c?q=80',
            duration: '5:10',
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
          },
          {
            id: 'lkg-math-ch2-v2',
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
  
  if (subjectId === 'lkg-english') {
    return [
      {
        id: 'lkg-english-ch1',
        name: 'Vowels',
        description: 'Learn the vowels: A, E, I, O, U',
        thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80',
        videos: [
          {
            id: 'lkg-english-ch1-v1',
            title: 'Meet the Vowels',
            description: 'Introduction to vowel sounds',
            thumbnail: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80',
            duration: '4:15',
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
          }
        ]
      },
      {
        id: 'lkg-english-ch2',
        name: 'Consonants',
        description: 'Learn the consonants',
        thumbnail: 'https://images.unsplash.com/photo-1599666328065-e93ef44d54f3?q=80',
        videos: [
          {
            id: 'lkg-english-ch2-v1',
            title: 'Consonants Part 1',
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
      thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80',
      videos: [
        {
          id: 'generic-ch1-v1',
          title: 'Getting Started',
          description: 'An introduction to this topic',
          thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80',
          duration: '4:30',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
      ]
    }
  ];
};
