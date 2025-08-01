import { defineStore } from 'pinia'

export const useAuthorStore = defineStore('authors', {
  state: () => ({
    authors: [
      {
        id: 1,
        name: 'Alice Johnson',
        job: 'Full Stack Developer',
        avatar:
          'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFufGVufDB8fDB8fHww',
        description:
          "I'm a full stack developer who loves bringing ideas to life on the web. Whether it’s building smooth user interfaces or setting up powerful backends, I enjoy being involved in every step of the process. I’m always exploring new tech, tinkering with code, and finding better ways to make apps faster, cleaner, and more enjoyable to use.",
      },
      {
        id: 2,
        name: 'Mark Rivera',
        job: 'UX/UI Designer',
        avatar:
          'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'I’m a UX/UI designer who’s obsessed with making digital experiences feel natural and intuitive. I love diving into what users really need and turning that into clean, thoughtful designs. Whether I’m sketching wireframes or perfecting pixel details, I aim to create interfaces that people genuinely enjoy using. For me, good design isn’t just about how it looks - it’s how it works.',
      },
      {
        id: 3,
        name: 'Nina Patel',
        job: 'Data Scientist',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'A results-driven data scientist with a strong focus on turning complex data into actionable insights. Experienced in data cleaning, analysis, and predictive modeling, with a deep understanding of statistical methods and machine learning techniques. Dedicated to presenting data in clear, impactful ways that support business decisions and drive strategic growth.',
      },
      {
        id: 4,
        name: 'Liam Stone',
        job: 'Content Strategist',
        avatar:
          'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
        description:
          "A passionate content strategist who loves shaping blog content that actually connects with readers. From planning editorial calendars to refining tone and structure, I focus on creating posts that feel human, helpful, and aligned with a brand’s story. Always thinking about what the audience wants to read next—and how to make it worth their time. Whether it's long-form storytelling or bite-sized updates, I enjoy crafting content that feels fresh and purposeful.",
      },
      {
        id: 5,
        name: 'Sofia Chen',
        job: 'Product Manager',
        avatar:
          'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          "An SEO specialist who’s all about making content easy to find and hard to ignore. I focus on optimizing blogs so they rank well without sacrificing readability or personality. From keyword research to on-page tweaks, I enjoy the puzzle of getting content noticed by both algorithms and real people. It's not just about traffic - it's about getting the right eyes on your posts and keeping them there.",
      },
    ],
  }),
})
