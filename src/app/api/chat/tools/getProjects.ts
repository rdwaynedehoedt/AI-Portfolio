
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "This tool will show a list of selected projects by Dwayne (Rosch) Dehoedt",
  parameters: z.object({}),
  execute: async () => {
    return {
      projects: [
        {
          title: 'Reachly – Inbox-to-Lead SaaS',
          role: 'Founder & Lead Developer',
          summary:
            'Automates lead generation from emails, integrating AI and analytics for actionable insights.',
          links: [],
          tech: ['Next.js', 'Node.js', 'TypeScript', 'Postgres', 'AI integrations'],
        },
        {
          title: 'Insurance Brokerage Platform — WSO2 Choreo & Azure',
          role: 'Developer',
          summary:
            'Full-stack platform leveraging Choreo workflows and Azure; focused on deployment, scaling, and optimization.',
          links: [
            {
              label: 'Medium: From Code to Cloud',
              url: 'https://medium.com/@dwaynedehoedt',
            },
          ],
          tech: ['WSO2 Choreo', 'Azure', 'CI/CD', 'Containers'],
        },
        {
          title: 'Apilage AI — AI & EdTech Contributions',
          role: 'Technical Collaborator',
          summary:
            'Interactive learning modules, chatbots, and productivity tools for a Sri Lankan AI platform.',
          links: [],
          tech: ['React', 'Node.js', 'AI APIs'],
        },
      ],
    };
  },
});