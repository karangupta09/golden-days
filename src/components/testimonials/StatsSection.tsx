interface StatItemProps {
  percentage: string;
  description: string;
}

const StatItem = ({ percentage, description }: StatItemProps) => (
  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
    <p className="text-5xl font-bold text-white mb-3 animate-fade-in">
      {percentage}
    </p>
    <p className="text-white/90 text-lg capitalize">
      {description}
    </p>
  </div>
);

interface StatsSectionProps {
  stats: Array<{
    percentage: string;
    description: string;
  }>;
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <div className="bg-primary rounded-2xl p-12 shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;