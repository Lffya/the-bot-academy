export function StatsSection() {
  const stats = [
    { number: "500+", label: "Students Trained" },
    { number: "4", label: "Years Experience" },
    { number: "15+", label: "Industry Partners" },
    { number: "200+", label: "Success Stories" },
  ]

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
