import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Dwayne (Rosch) Dehoedt. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Dwayne (Rosch) Dehoedt Founder @ Reachly, SaaS & Web Dev, ex-WSO2. I build clean, simple, useful products. Based in Sri Lanka. Comfortable across full‑stack, cloud, and AI — and I love connecting tech to real business outcomes.",
    };
  },
});
