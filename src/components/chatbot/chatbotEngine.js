import {
  profile,
  journey,
  skillGroups,
  extraProjects,
  education,
  personal,
} from '../../data'

const normalize = (value = '') =>
  value
    .toLowerCase()
    .replace(/[^\w\s#+.&/-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const hasAny = (question, phrases) =>
  phrases.some((phrase) => question.includes(phrase))

const projectSummary = () =>
  journey
    .map((item) => `${item.title} — ${item.subtitle}`)
    .join('\n')

const skillsSummary = () =>
  skillGroups
    .map((group) => `${group.title}: ${group.items.join(', ')}`)
    .join('\n')

const findJourneyItem = (question) =>
  journey.find((item) => {
    const title = normalize(item.title)
    const words = title.split(' ').filter((word) => word.length > 3)
    return question.includes(title) || words.some((word) => question.includes(word))
  })

export function answerPortfolioQuestion(rawQuestion) {
  const question = normalize(rawQuestion)

  if (!question) {
    return {
      text: 'Ask me something about John, his projects, skills, education, hobbies, or experience.',
      source: 'Portfolio Assistant',
    }
  }

  if (hasAny(question, ['hello', 'hi ', 'hey', 'good morning', 'good afternoon', 'good evening'])) {
    return {
      text: `Hi! I'm John's portfolio assistant. I can tell you about his development journey, projects, skills, education, hobbies, and contact information.`,
      source: 'Portfolio Assistant',
    }
  }

  if (hasAny(question, ['who is john', 'about john', 'tell me about john', 'who are you', 'about yourself'])) {
    return {
      text: `${profile.name} is a ${profile.academicLevel} student based in ${profile.location}. ${personal.about}`,
      source: 'Profile + Personal',
    }
  }

  if (hasAny(question, ['hobby', 'hobbies', 'for fun', 'free time', 'game', 'games', 'gaming'])) {
    return {
      text: `John's listed hobby is ${personal.hobbies.join(', ')}. His interests also include ${personal.interests.join(', ')}.`,
      source: 'Personal',
    }
  }

  if (hasAny(question, ['first language', 'learned first', 'started programming', 'first programming'])) {
    const java = journey.find((item) => item.title.toLowerCase() === 'java')
    return {
      text: java
        ? `Java was the first programming language John learned. ${java.description}`
        : 'Java was the first programming language John learned.',
      source: 'Development Journey',
    }
  }

  if (hasAny(question, ['first system', 'first project', 'first design', 'alexandria', 'online library', 'library system'])) {
    const alexandria = journey.find((item) =>
      item.title.toLowerCase().includes('alexandria')
    )
    return {
      text: alexandria
        ? `${alexandria.title} is presented as John's first system design and first database-driven system. ${alexandria.description}`
        : 'Alexandria Online Library is presented as John’s first system design and database-driven project.',
      source: 'Development Journey',
    }
  }

  if (hasAny(question, ['walang brownout', 'live deployment', 'first live', 'inventory'])) {
    const project = journey.find((item) =>
      item.title.toLowerCase().includes('walang brownout')
    )
    return {
      text: project
        ? `${project.title}: ${project.description} Role: ${project.role || 'Project contributor'}.`
        : 'Walang Brownout is John’s first publicly deployed full-stack system.',
      source: 'Development Journey',
    }
  }

  if (hasAny(question, ['skill', 'skills', 'technology', 'technologies', 'tools', 'tech stack', 'stack'])) {
    return {
      text: skillsSummary(),
      source: 'Technology Ecosystem',
    }
  }

  if (hasAny(question, ['database', 'dbeaver', 'mysql', 'aiven', 'workbench', 'phpmyadmin'])) {
    const dbGroup = skillGroups.find((group) =>
      group.title.toLowerCase().includes('database')
    )
    return {
      text: dbGroup
        ? `John's database-related skills and tools include ${dbGroup.items.join(', ')}.`
        : 'John has worked with MySQL and database-management tools.',
      source: 'Technology Ecosystem',
    }
  }

  if (hasAny(question, ['deploy', 'deployment', 'render', 'vercel', 'cloudflare'])) {
    const group = skillGroups.find((item) =>
      item.title.toLowerCase().includes('deployment')
    )
    return {
      text: group
        ? `John's deployment and cloud tools include ${group.items.join(', ')}.`
        : 'John has experience deploying projects and working with cloud services.',
      source: 'Technology Ecosystem',
    }
  }

  if (hasAny(question, ['qa', 'testing', 'test', 'postman', 'bug', 'documentation'])) {
    const group = skillGroups.find((item) =>
      item.title.toLowerCase().includes('qa')
    )
    return {
      text: group
        ? `John's QA and documentation experience includes ${group.items.join(', ')}.`
        : 'John works with software testing, API testing, bug reporting, and documentation.',
      source: 'Technology Ecosystem',
    }
  }

  if (hasAny(question, ['ai', 'chatgpt', 'artificial intelligence', 'prompt'])) {
    const group = skillGroups.find((item) =>
      item.title.toLowerCase().includes('ai')
    )
    return {
      text: group
        ? `John lists these AI/productivity skills: ${group.items.join(', ')}.`
        : 'John uses AI-assisted tools as part of learning, research, coding, and documentation workflows.',
      source: 'Technology Ecosystem',
    }
  }

  if (hasAny(question, ['education', 'school', 'university', 'college', 'course', 'year level'])) {
    return {
      text: education
        .map((item) => `${item.school} — ${item.program} (${item.detail})`)
        .join('\n'),
      source: 'Education',
    }
  }

  if (hasAny(question, ['project', 'projects', 'built', 'made', 'portfolio'])) {
    return {
      text: `Major development journey:\n${projectSummary()}\n\nAdditional projects:\n${extraProjects
        .map((item) => item.title)
        .join(', ')}`,
      source: 'Projects + Development Journey',
    }
  }

  if (hasAny(question, ['contact', 'email', 'gmail', 'github', 'facebook', 'reach'])) {
    return {
      text: `You can contact John through the portfolio's Contact section. His listed channels are Gmail, GitHub (${profile.githubUsername}), and Facebook.`,
      source: 'Contact Directory',
    }
  }

  const matchedJourney = findJourneyItem(question)
  if (matchedJourney) {
    return {
      text: `${matchedJourney.title} — ${matchedJourney.subtitle}. ${matchedJourney.description}`,
      source: 'Development Journey',
    }
  }

  return {
    text:
      `I'm John's portfolio assistant, so I stay focused on information about John. ` +
      `Try asking about his projects, skills, education, hobbies, Java, Alexandria, C#, React + Laravel, CuyoTech SSIS, Walang Brownout, databases, QA, deployment, or contact information.`,
    source: 'Portfolio Assistant',
  }
}

export const quickQuestions = [
  'Tell me about John',
  'What are his skills?',
  'What was his first programming language?',
  'Tell me about Alexandria',
  'What is Walang Brownout?',
  'What are his hobbies?',
  'What database tools does he use?',
  'How can I contact him?',
]
