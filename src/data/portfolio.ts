import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'InfusionX',
        title: 'Building Intelligent Digital Products That Drive Growth',
        subtitle: 'Engineering Intelligent Digital Experiences',
        bio: 'InfusionX helps startups and enterprises transform ideas into scalable digital products. We specialize in websites, web applications, mobile apps, AI-powered solutions, business automation, cloud integration, and long-term product support.',
        avatar: '/logo.svg', 
        location: 'Global',
        email: 'hello@infusionx.com',
        phone: '+1234567890',
        resumeUrl: '',
        website: 'https://infusionx.com',
        languages: [
            { name: 'English', level: 'Native' }
        ],
        socialLinks: [
            { platform: 'LinkedIn', url: 'https://linkedin.com/company/infusionx', icon: 'linkedin', username: 'InfusionX' },
            { platform: 'GitHub', url: 'https://github.com/InfusionX', icon: 'github', username: 'InfusionX' }
        ],
    },
    projects: [
        {
            id: 'proj-1',
            slug: 'ai-customer-support',
            title: 'AI Customer Support Agent',
            description: 'Intelligent multi-channel support agent capable of resolving complex user queries autonomously using RAG and LLMs.',
            category: 'AI Agents',
            techStack: ['Mistral AI', 'LangChain', 'Next.js', 'Python'],
            tools: [],
            image: '/projects/project-1.jpg',
            demoUrl: '#',
            repoUrl: '#',
            status: 'completed',
            startDate: '2025-01-01',
        },
        {
            id: 'proj-2',
            slug: 'saas-business-automation',
            title: 'SaaS Business Automation Platform',
            description: 'A comprehensive web application that automates business workflows, integrates with major CRMs, and optimizes operational efficiency.',
            category: 'Web Application',
            techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
            tools: [],
            image: '/projects/project-2.jpg',
            demoUrl: '#',
            repoUrl: '#',
            status: 'completed',
            startDate: '2025-02-01',
        },
        {
            id: 'proj-3',
            slug: 'healthcare-ai-voice',
            title: 'Healthcare AI Voice Agent',
            description: 'HIPAA-compliant voice AI system capable of scheduling appointments and triaging patient symptoms naturally over the phone.',
            category: 'AI Voice Agents',
            techStack: ['FastAPI', 'OpenAI', 'Twilio', 'Python'],
            tools: [],
            image: '/projects/project-3.jpg',
            demoUrl: '#',
            repoUrl: '#',
            status: 'completed',
            startDate: '2025-03-01',
        }
    ],
    experiences: [],
    education: [],
    achievements: [],
    techStack: [
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python', category: 'language' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', category: 'language' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript', category: 'language' },
        { name: 'React', icon: 'https://cdn.simpleicons.org/react', category: 'framework' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs', category: 'framework' },
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs', category: 'framework' },
        { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow', category: 'library' },
        { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss', category: 'library' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql', category: 'database' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'tool' },
        { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain', category: 'library' },
        { name: 'Mistral AI', icon: 'https://cdn.simpleicons.org/mistralai', category: 'library' },
        { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch', category: 'library' },
        { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi', category: 'framework' },
    ],
    hardSkills: [
        { name: 'Web Application Development', category: 'software', description: 'Scalable full-stack SaaS and internal enterprise applications built with modern frameworks.' },
        { name: 'Mobile App Development', category: 'mobile', description: 'Cross-platform iOS and Android mobile applications using React Native and Flutter.' },
        { name: 'UI/UX Design', category: 'design', description: 'User-centric, data-driven interfaces that drive high engagement and conversions.' },
        { name: 'AI Solutions', category: 'ai', description: 'End-to-end artificial intelligence integration including chatbots, voice agents, and autonomous workflows.' },
        { name: 'Business Automation', category: 'devops', description: 'Automating repetitive operational workflows to increase team efficiency and reduce costs.' },
        { name: 'Cloud & API Integration', category: 'cloud', description: 'Securely integrating third-party APIs and managing robust cloud infrastructures at scale.' },
        { name: 'Digital Marketing', category: 'marketing', description: 'Data-driven marketing strategies including SEO, paid ads, content marketing, and growth analytics.' }
    ],
    softSkills: [
        { name: 'AI-First Development', description: 'Integrating intelligence natively into the core of digital products.' },
        { name: 'Scalable Architecture', description: 'Building resilient systems prepared to handle sudden massive growth.' },
        { name: 'Fast Delivery', description: 'Agile methodologies ensuring rapid time-to-market without sacrificing quality.' },
        { name: 'Reliable Support', description: 'Dedicated engineers ensuring uptime and continuous improvements.' },
        { name: 'Business-Focused', description: 'Prioritizing ROI, metrics, and business outcomes in every technical decision.' },
        { name: 'Modern Technology', description: 'Leveraging cutting-edge stacks to future-proof your investments.' }
    ],
    tools: [
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma', category: 'design' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', category: 'devops' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'devops' },
        { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws', category: 'devops' },
        { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel', category: 'devops' },
    ],
    faqs: [
        {
            question: 'What services does InfusionX offer?',
            answer: 'We specialize in AI Solutions (Agents, Chatbots, Voice Agents), Full-Stack Web and Mobile Development, UI/UX Design, Business Automation, and Cloud Integration.',
        },
        {
            question: 'How does the development process work?',
            answer: 'We start with a thorough discovery phase to align on business goals. This is followed by design prototyping, agile development, rigorous QA testing, deployment, and ongoing post-launch support.',
        },
        {
            question: 'Do you offer long-term product maintenance?',
            answer: 'Yes! We believe in building long-term partnerships. We offer dedicated maintenance, scaling support, new feature development, and security updates for all digital products we build.',
        },
        {
            question: 'Can you integrate AI into my existing application?',
            answer: 'Absolutely. We specialize in enhancing legacy systems or modern apps with AI capabilities like predictive analytics, intelligent search, and autonomous workflow agents.',
        }
    ],
    blogs: [],
    gallery: [],
};
