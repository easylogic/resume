export interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  comments: Comment[];
  shares: number;
  tags: string[];
  category: string;
  company: string;
  createdAt: string;
}

interface Comment {
  id: number;
  author: string;
  content: string;
  likes: number;
}

export const posts: Post[] = [
  {
    id: 1,
    author: "Jane Doe",
    avatar: "/avatars/jane.jpg",
    content: "Just finished updating my resume with my latest project experience. Any tips on highlighting key achievements?",
    likes: 15,
    comments: [
      { id: 1, author: "John Smith", content: "Focus on quantifiable results!", likes: 5 },
      { id: 2, author: "Alice Johnson", content: "Don't forget to mention any awards or recognition.", likes: 3 }
    ],
    shares: 2,
    tags: ["resume", "career advice"],
    category: "Career Advice",
    company: "Google",
    createdAt: "2023-06-15T10:30:00Z"
  },
  {
    id: 2,
    author: "Alex Chen",
    avatar: "/avatars/alex.jpg",
    content: "Just aced my technical interview at Amazon! Here are some tips that helped me prepare.",
    likes: 42,
    comments: [
      { id: 3, author: "Emily Wong", content: "Congratulations! What resources did you use?", likes: 7 },
      { id: 4, author: "Michael Brown", content: "That's awesome! Any specific topics they focused on?", likes: 5 }
    ],
    shares: 8,
    tags: ["interview", "tech", "success story"],
    category: "Interview Prep",
    company: "Amazon",
    createdAt: "2023-06-16T14:45:00Z"
  },
  {
    id: 3,
    author: "Sarah Johnson",
    avatar: "/avatars/sarah.jpg",
    content: "Looking to transition from frontend to full-stack development. Any course recommendations?",
    likes: 28,
    comments: [
      { id: 5, author: "David Lee", content: "Check out The Odin Project, it's free and comprehensive!", likes: 10 },
      { id: 6, author: "Rachel Green", content: "Udemy has some great full-stack bootcamps too.", likes: 6 }
    ],
    shares: 5,
    tags: ["career transition", "full-stack", "learning"],
    category: "Skill Development",
    company: "Microsoft",
    createdAt: "2023-06-17T09:20:00Z"
  },
  {
    id: 4,
    author: "Mark Wilson",
    avatar: "/avatars/mark.jpg",
    content: "Just started my internship at Apple! Any advice for making the most of this opportunity?",
    likes: 56,
    comments: [
      { id: 7, author: "Lisa Taylor", content: "Network as much as you can!", likes: 12 },
      { id: 8, author: "Kevin Nguyen", content: "Don't be afraid to ask questions and take on challenges.", likes: 9 }
    ],
    shares: 3,
    tags: ["internship", "career growth", "Apple"],
    category: "Career Advice",
    company: "Apple",
    createdAt: "2023-06-18T11:10:00Z"
  },
  {
    id: 5,
    author: "Emma Davis",
    avatar: "/avatars/emma.jpg",
    content: "What are some effective strategies for negotiating salary in tech roles?",
    likes: 37,
    comments: [
      { id: 9, author: "Chris Anderson", content: "Always do your research on market rates first.", likes: 15 },
      { id: 10, author: "Sophia Martinez", content: "Don't be afraid to counter-offer, it's expected!", likes: 11 }
    ],
    shares: 7,
    tags: ["salary negotiation", "career tips"],
    category: "Career Advice",
    company: "All",
    createdAt: "2023-06-19T16:30:00Z"
  },
  {
    id: 6,
    author: "Ryan Thompson",
    avatar: "/avatars/ryan.jpg",
    content: "Just launched my first React Native app! It's been a challenging but rewarding journey.",
    likes: 64,
    comments: [
      { id: 11, author: "Olivia Wilson", content: "That's amazing! How long did it take you?", likes: 8 },
      { id: 12, author: "Ethan Clark", content: "Congrats! Any tips for beginners?", likes: 6 }
    ],
    shares: 12,
    tags: ["React Native", "mobile development", "success story"],
    category: "Skill Development",
    company: "Facebook",
    createdAt: "2023-06-20T13:15:00Z"
  },
  {
    id: 7,
    author: "Mia Rodriguez",
    avatar: "/avatars/mia.jpg",
    content: "How do you stay motivated during long job search periods? It's been tough lately.",
    likes: 45,
    comments: [
      { id: 13, author: "Daniel Kim", content: "Set small daily goals and celebrate small wins!", likes: 18 },
      { id: 14, author: "Hannah Lee", content: "Join online tech communities for support and networking.", likes: 14 }
    ],
    shares: 9,
    tags: ["job search", "motivation", "career"],
    category: "Job Search",
    company: "All",
    createdAt: "2023-06-21T10:05:00Z"
  },
  {
    id: 8,
    author: "Lucas Brown",
    avatar: "/avatars/lucas.jpg",
    content: "Just completed a machine learning course on Coursera. Highly recommend it for AI enthusiasts!",
    likes: 52,
    comments: [
      { id: 15, author: "Ava Johnson", content: "Which course was it? I'm looking to get into ML too!", likes: 7 },
      { id: 16, author: "Noah Davis", content: "How beginner-friendly is it?", likes: 5 }
    ],
    shares: 15,
    tags: ["machine learning", "AI", "online course"],
    category: "Skill Development",
    company: "Google",
    createdAt: "2023-06-22T17:40:00Z"
  },
  {
    id: 9,
    author: "Sophie Turner",
    avatar: "/avatars/sophie.jpg",
    content: "What are some red flags to watch out for during job interviews?",
    likes: 73,
    comments: [
      { id: 17, author: "Liam Wilson", content: "Lack of clear answers about company culture or work-life balance.", likes: 22 },
      { id: 18, author: "Isabella Moore", content: "If they can't explain the role or team structure clearly.", likes: 19 }
    ],
    shares: 18,
    tags: ["job interview", "career advice", "red flags"],
    category: "Job Search",
    company: "All",
    createdAt: "2023-06-23T12:25:00Z"
  },
  {
    id: 10,
    author: "Ethan Park",
    avatar: "/avatars/ethan.jpg",
    content: "Just got promoted to Senior Developer at Microsoft! Hard work really does pay off.",
    likes: 89,
    comments: [
      { id: 19, author: "Zoe Adams", content: "Congratulations! You deserve it!", likes: 12 },
      { id: 20, author: "William Chen", content: "That's awesome! Any advice for junior devs?", likes: 10 }
    ],
    shares: 7,
    tags: ["career growth", "promotion", "success story"],
    category: "Career Advice",
    company: "Microsoft",
    createdAt: "2023-06-24T15:50:00Z"
  },
  {
    id: 11,
    author: "Olivia White",
    avatar: "/avatars/olivia.jpg",
    content: "What are some must-have tools for remote software development teams?",
    likes: 61,
    comments: [
      { id: 21, author: "James Lee", content: "Slack for communication, Jira for project management, and GitLab for version control.", likes: 16 },
      { id: 22, author: "Emma Thompson", content: "Don't forget about Zoom or Google Meet for video calls!", likes: 13 }
    ],
    shares: 14,
    tags: ["remote work", "tools", "software development"],
    category: "Skill Development",
    company: "All",
    createdAt: "2023-06-25T09:35:00Z"
  },
  {
    id: 12,
    author: "Nathan Scott",
    avatar: "/avatars/nathan.jpg",
    content: "Just submitted my application to Y Combinator! Fingers crossed for our startup.",
    likes: 95,
    comments: [
      { id: 23, author: "Sophia Garcia", content: "Good luck! What's your startup about?", likes: 8 },
      { id: 24, author: "Daniel Brown", content: "Rooting for you! The application process can be tough but worth it.", likes: 7 }
    ],
    shares: 11,
    tags: ["startup", "Y Combinator", "entrepreneurship"],
    category: "Career Advice",
    company: "All",
    createdAt: "2023-06-26T14:20:00Z"
  },
  {
    id: 13,
    author: "Isabella Martinez",
    avatar: "/avatars/isabella.jpg",
    content: "How do you balance learning new technologies with mastering current ones in your stack?",
    likes: 68,
    comments: [
      { id: 25, author: "Alex Turner", content: "I dedicate 80% of my time to current tech and 20% to exploring new ones.", likes: 20 },
      { id: 26, author: "Emily White", content: "Try to find projects that allow you to incorporate new tech into your current stack.", likes: 17 }
    ],
    shares: 8,
    tags: ["learning", "skill development", "technology"],
    category: "Skill Development",
    company: "All",
    createdAt: "2023-06-27T11:55:00Z"
  },
  {
    id: 14,
    author: "William Johnson",
    avatar: "/avatars/william.jpg",
    content: "Just finished my first week at Google! The onboarding experience has been amazing.",
    likes: 112,
    comments: [
      { id: 27, author: "Sophie Lee", content: "That's great to hear! What's been the best part so far?", likes: 9 },
      { id: 28, author: "Michael Chen", content: "Congrats! How's the work culture?", likes: 7 }
    ],
    shares: 16,
    tags: ["new job", "Google", "onboarding"],
    category: "Career Advice",
    company: "Google",
    createdAt: "2023-06-28T16:40:00Z"
  },
  {
    id: 15,
    author: "Ava Thompson",
    avatar: "/avatars/ava.jpg",
    content: "What are some effective ways to prepare for a product manager interview in tech?",
    likes: 79,
    comments: [
      { id: 29, author: "Ethan Davis", content: "Practice case studies and work on your product sense.", likes: 23 },
      { id: 30, author: "Olivia Martin", content: "Don't forget to brush up on basic technical knowledge and metrics!", likes: 19 }
    ],
    shares: 21,
    tags: ["product management", "interview prep", "career"],
    category: "Interview Prep",
    company: "All",
    createdAt: "2023-06-29T13:10:00Z"
  },
  {
    id: 16,
    author: "Daniel Kim",
    avatar: "/avatars/daniel.jpg",
    content: "Just open-sourced my first npm package! It's a React hook for handling form state.",
    likes: 87,
    comments: [
      { id: 31, author: "Sophia Anderson", content: "That's awesome! Can you share the link?", likes: 11 },
      { id: 32, author: "Lucas Moore", content: "Congrats! How long did it take you to develop?", likes: 9 }
    ],
    shares: 19,
    tags: ["open source", "React", "npm"],
    category: "Skill Development",
    company: "All",
    createdAt: "2023-06-30T10:25:00Z"
  },
  {
    id: 17,
    author: "Emma Wilson",
    avatar: "/avatars/emma.jpg",
    content: "How do you approach continuous learning in a fast-paced tech environment?",
    likes: 93,
    comments: [
      { id: 33, author: "Noah Brown", content: "I set aside an hour each day for learning, usually early morning.", likes: 27 },
      { id: 34, author: "Ava Taylor", content: "Following tech blogs and participating in webinars helps me stay updated.", likes: 22 }
    ],
    shares: 13,
    tags: ["continuous learning", "professional development", "tech career"],
    category: "Skill Development",
    company: "All",
    createdAt: "2023-07-01T15:15:00Z"
  },
  {
    id: 18,
    author: "Liam Garcia",
    avatar: "/avatars/liam.jpg",
    content: "Just received a job offer from Amazon! The leetcode grind finally paid off.",
    likes: 134,
    comments: [
      { id: 35, author: "Mia Johnson", content: "Congratulations! How many leetcode problems did you solve?", likes: 15 },
      { id: 36, author: "Ethan Lee", content: "That's incredible! Any tips for the interview process?", likes: 12 }
    ],
    shares: 23,
    tags: ["job offer", "Amazon", "leetcode", "interview success"],
    category: "Job Search",
    company: "Amazon",
    createdAt: "2023-07-02T11:30:00Z"
  },
  {
    id: 19,
    author: "Sophia Clark",
    avatar: "/avatars/sophia.jpg",
    content: "What are some strategies for managing imposter syndrome in tech?",
    likes: 108,
    comments: [
      { id: 37, author: "Oliver White", content: "Remember that everyone starts somewhere. Focus on your growth, not comparison.", likes: 31 },
      { id: 38, author: "Emma Davis", content: "Keep a 'wins' journal to remind yourself of your accomplishments.", likes: 28 }
    ],
    shares: 26,
    tags: ["imposter syndrome", "mental health", "tech career"],
    category: "Career Advice",
    company: "All",
    createdAt: "2023-07-03T14:05:00Z"
  },
  {
    id: 20,
    author: "Noah Martinez",
    avatar: "/avatars/noah.jpg",
    content: "Just completed my first hackathon! It was an incredible learning experience.",
    likes: 76,
    comments: [
      { id: 39, author: "Ava Wilson", content: "That's great! What did you build?", likes: 8 },
      { id: 40, author: "Liam Thompson", content: "Hackathons are so fun! Did you win any prizes?", likes: 6 }
    ],
    shares: 9,
    tags: ["hackathon", "coding", "learning experience"],
    category: "Skill Development",
    company: "All",
    createdAt: "2023-07-04T12:50:00Z"
  },
  {
    id: 21,
    author: "Emma Rodriguez",
    avatar: "/avatars/emma.jpg",
    content: "Just started learning React. Any recommended resources or projects for beginners?",
    likes: 92,
    comments: [
      { id: 41, author: "Daniel Kim", content: "The official React docs are great! Also, try building a simple todo app.", likes: 18 },
      { id: 42, author: "Sophie Chen", content: "Check out FreeCodeCamp's React course. It's free and comprehensive!", likes: 15 }
    ],
    shares: 14,
    tags: ["React", "web development", "learning"],
    category: "Skill Development",
    company: "All",
    createdAt: "2023-07-05T09:20:00Z"
  },
  {
    id: 22,
    author: "Lucas Taylor",
    avatar: "/avatars/lucas.jpg",
    content: "Just had my first day at Google! The onboarding process is amazing.",
    likes: 156,
    comments: [
      { id: 43, author: "Olivia Brown", content: "Congrats! What's your role there?", likes: 22 },
      { id: 44, author: "Ethan Davis", content: "That's awesome! How was the interview process?", likes: 19 }
    ],
    shares: 31,
    tags: ["Google", "new job", "tech career"],
    category: "Career Advice",
    company: "Google",
    createdAt: "2023-07-06T18:45:00Z"
  },
  {
    id: 23,
    author: "Zoe Anderson",
    avatar: "/avatars/zoe.jpg",
    content: "Looking for advice on negotiating salary for a senior developer position. Any tips?",
    likes: 118,
    comments: [
      { id: 45, author: "William Lee", content: "Always do your research on market rates. Don't be afraid to ask for what you're worth!", likes: 27 },
      { id: 46, author: "Isabella Garcia", content: "Consider the whole package, not just the base salary. Stock options and benefits can make a big difference.", likes: 24 }
    ],
    shares: 22,
    tags: ["salary negotiation", "senior developer", "career advice"],
    category: "Career Advice",
    company: "All",
    createdAt: "2023-07-07T11:10:00Z"
  },
  {
    id: 24,
    author: "Ryan Patel",
    avatar: "/avatars/ryan.jpg",
    content: "Just launched my first iOS app on the App Store! It's been a long journey but so worth it.",
    likes: 203,
    comments: [
      { id: 47, author: "Sophia Martinez", content: "Congratulations! What's the app called?", likes: 31 },
      { id: 48, author: "Jacob Wilson", content: "That's incredible! How long did the development process take?", likes: 28 }
    ],
    shares: 45,
    tags: ["iOS development", "app launch", "success story"],
    category: "Skill Development",
    company: "Apple",
    createdAt: "2023-07-08T16:30:00Z"
  },
  {
    id: 25,
    author: "Mia Johnson",
    avatar: "/avatars/mia.jpg",
    content: "Thinking about transitioning from software development to product management. Anyone made a similar switch?",
    likes: 87,
    comments: [
      { id: 49, author: "Liam Clark", content: "I did this last year! Happy to chat about my experience.", likes: 20 },
      { id: 50, author: "Ava Thompson", content: "Consider getting a product management certification. It really helped me make the transition.", likes: 18 }
    ],
    shares: 16,
    tags: ["career transition", "product management", "software development"],
    category: "Career Advice",
    company: "All",
    createdAt: "2023-07-09T13:55:00Z"
  },
  {
    id: 26,
    author: "Ethan Brown",
    avatar: "/avatars/ethan.jpg",
    content: "Just completed a machine learning course on Coursera. Highly recommend it for anyone interested in AI!",
    likes: 156,
    comments: [
      { id: 51, author: "Olivia Davis", content: "Which course was it? I've been looking for a good ML course.", likes: 22 },
      { id: 52, author: "Noah Wilson", content: "How long did it take you to complete?", likes: 15 }
    ],
    shares: 34,
    tags: ["machine learning", "AI", "online course"],
    category: "Skill Development",
    company: "All",
    createdAt: "2023-07-10T09:20:00Z"
  },
  {
    id: 27,
    author: "Sophia Lee",
    avatar: "/avatars/sophia.jpg",
    content: "Starting my internship at Google next week! Any advice for making the most of it?",
    likes: 210,
    comments: [
      { id: 53, author: "Liam Johnson", content: "Network as much as you can! Don't be afraid to ask questions.", likes: 35 },
      { id: 54, author: "Emma Garcia", content: "Try to work on a project that you can showcase later in your portfolio.", likes: 28 }
    ],
    shares: 18,
    tags: ["internship", "career advice", "Google"],
    category: "Career Advice",
    company: "Google",
    createdAt: "2023-07-11T14:45:00Z"
  },
  {
    id: 28,
    author: "Daniel Kim",
    avatar: "/avatars/daniel.jpg",
    content: "Just aced my AWS certification exam! Cloud computing, here I come!",
    likes: 178,
    comments: [
      { id: 55, author: "Ava Thompson", content: "Congratulations! Which certification did you get?", likes: 20 },
      { id: 56, author: "William Chen", content: "That's awesome! Any study tips you can share?", likes: 18 }
    ],
    shares: 25,
    tags: ["AWS", "cloud computing", "certification"],
    category: "Skill Development",
    company: "Amazon",
    createdAt: "2023-07-12T11:30:00Z"
  },
  {
    id: 29,
    author: "Isabella Martinez",
    avatar: "/avatars/isabella.jpg",
    content: "Looking for recommendations on good tech podcasts. What are your favorites?",
    likes: 92,
    comments: [
      { id: 57, author: "James Wilson", content: "I love 'Syntax' for web development topics!", likes: 15 },
      { id: 58, author: "Sophie Brown", content: "'Software Engineering Daily' is great for in-depth tech discussions.", likes: 12 }
    ],
    shares: 8,
    tags: ["podcasts", "tech", "learning resources"],
    category: "Skill Development",
    company: "All",
    createdAt: "2023-07-13T16:15:00Z"
  },
  {
    id: 30,
    author: "Alex Johnson",
    avatar: "/avatars/alex.jpg",
    content: "Just got promoted to Senior Software Engineer! Hard work pays off!",
    likes: 245,
    comments: [
      { id: 59, author: "Emily Davis", content: "Congratulations! You deserve it!", likes: 30 },
      { id: 60, author: "Michael Lee", content: "That's fantastic! Any advice for aspiring senior devs?", likes: 25 }
    ],
    shares: 40,
    tags: ["career milestone", "promotion", "software engineering"],
    category: "Career Advice",
    company: "Microsoft",
    createdAt: "2023-07-14T10:00:00Z"
  },
  // ... (Continuing with more posts up to 100)
  {
    id: 100,
    author: "Zoe Williams",
    avatar: "/avatars/zoe.jpg",
    content: "Excited to start my new role as a Data Scientist next month! Any tips for the first few weeks?",
    likes: 180,
    comments: [
      { id: 199, author: "Nathan Chen", content: "Congrats! Take time to understand the data infrastructure and ask lots of questions.", likes: 22 },
      { id: 200, author: "Lily Thompson", content: "That's awesome! Try to identify some quick wins to make a good first impression.", likes: 18 }
    ],
    shares: 30,
    tags: ["data science", "new job", "career advice"],
    category: "Career Advice",
    company: "All",
    createdAt: "2023-08-25T13:40:00Z"
  }
  // ... (나머지 posts 데이터)
];
