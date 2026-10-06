'use client';

import { motion } from 'framer-motion';
import { Code2, Award, Sparkles, TrendingUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Counter } from '@/components/ui/Counter';

// Calculate metrics from portfolio data
const calculateMetrics = () => {
    const totalProjects = portfolioData.projects?.length || 0;
    const completedProjects = portfolioData.projects?.filter(p => p.status === 'completed').length || 0;
    const totalTechStack = portfolioData.techStack?.length || 0;
    const totalTools = portfolioData.tools?.length || 0;

    // Calculate years of experience (assuming earliest project start date)
    const yearsExp = 2; // Hardcoded based on resume/experience

    return {
        projects: totalProjects,
        completed: completedProjects,
        techCount: totalTechStack + totalTools,
        yearsExp,
        // Creative metrics
        impactScore: '12+', // GitHub stars, downloads, or impact metric
        satisfaction: '98%'   // Client/user satisfaction rate
    };
};

interface StatCardProps {
    value: string;
    label: string;
    icon: React.ReactNode;
    delay: number;
    gradient: string;
    isLowPowerMode?: boolean;
}

const StatCard = ({ value, label, icon, delay, isLowPowerMode }: StatCardProps) => {
    return (
        <motion.div
            initial={isLowPowerMode ? { opacity: 0, y: 10 } : { opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ margin: "-100px", once: true }}
            transition={{ duration: 0.8, delay: isLowPowerMode ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-full flex"
        >
            <motion.div
                className="relative w-full h-full p-8 flex flex-col items-center justify-center text-center bg-[#090C10] border border-[#181E26] rounded-2xl transition-all duration-500 hover:border-[#3B82F6] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] z-10 hover:z-20 overflow-hidden"
            >
                {/* Subtle blue accent dot for important stats (we'll just add it to all or first one, let's just add it on top of the card) */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#3B82F6] opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(59,130,246,1)] transition-all duration-500" />
                
                {/* Hover Glow inside card */}
                <div
                    className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at center, rgba(59,130,246,0.05) 0%, transparent 70%)`
                    }}
                />

                {/* Card Content */}
                <div className="relative z-10">
                    {/* Value */}
                    <motion.div
                        className="text-4xl sm:text-5xl md:text-6xl font-black bg-clip-text text-transparent mb-3 transition-all duration-500 group-hover:brightness-125"
                        style={{
                            backgroundImage: "linear-gradient(to bottom, #FFFFFF 0%, #AEB7C4 100%)",
                        }}
                    >
                        <Counter
                            value={parseFloat(value.replace(/[^0-9.]/g, ''))}
                            decimal={value.includes('.') ? 1 : 0}
                        />
                        {value.includes('+') ? '+' : ''}
                        {value.includes('%') ? '%' : ''}
                    </motion.div>

                    {/* Label */}
                    <p className="text-sm sm:text-sm font-medium text-[#7F8996] uppercase tracking-[0.15em]">
                        {label}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export function ProjectStats({ isLowPowerMode }: { isLowPowerMode?: boolean }) {
    const metrics = calculateMetrics();

        {
            value: `${metrics.projects}+`,
            label: 'Projects Built',
            icon: <Code2 className="w-6 h-6 text-[#3B82F6]" />,
            gradient: ''
        },
        {
            value: `${metrics.yearsExp}+`,
            label: 'Years Experience',
            icon: <TrendingUp className="w-6 h-6 text-[#3B82F6]" />,
            gradient: ''
        },
        {
            value: `${metrics.techCount}+`,
            label: 'Tech Stack',
            icon: <Code2 className="w-6 h-6 text-[#3B82F6]" />,
            gradient: ''
        },
        {
            value: metrics.impactScore,
            label: 'Active Deployments',
            icon: <Award className="w-6 h-6 text-[#3B82F6]" />,
            gradient: ''
        }
    ];

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden bg-[#050505]">
            
            {/* Extremely subtle blue light behind statistics */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[150px] opacity-10 pointer-events-none"
                style={{ backgroundColor: "#3B82F6" }}
            />

            <div className="container max-w-[1200px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px", once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#181E26] bg-[#090C10] mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
                        <span className="text-[10px] font-bold text-[#7F8996] uppercase tracking-[0.2em]">
                            Track Record
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#F5F7FA] tracking-[-0.03em] leading-[1.1] mb-6">
                        Performance <span className="text-[#7F8996]">Metrics.</span>
                    </h2>

                    <p className="text-base sm:text-lg text-[#7F8996] max-w-2xl mx-auto font-light">
                        Transforming ideas into production-ready solutions that drive real-world impact and measurable growth.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={stat.label}
                            {...stat}
                            delay={index * 0.15}
                            isLowPowerMode={isLowPowerMode}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
