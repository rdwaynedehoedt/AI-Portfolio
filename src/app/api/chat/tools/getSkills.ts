import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'This tool show a list of my skills.',
  parameters: z.object({}),
  execute: async () => {
    return {
      skills: {
        technical: [
          'Full-Stack Development',
          'JavaScript/TypeScript',
          'React',
          'Node.js',
          'Python',
          'Java',
          'C',
          'REST APIs',
        ],
        cloudDevOps: ['Azure', 'SaaS Architecture', 'CI/CD'],
        aiMl: ['Chatbots', 'AI-powered educational tools', 'Basic NLP'],
        salesBusiness: [
          'SaaS Sales',
          'Consultative Selling',
          'CRM (Apollo.io)',
          'Customer Success',
        ],
        other: ['Digital Marketing', 'Community Development', 'Open Source'],
      },
    };
  },
});
