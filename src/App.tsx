import { Github, Linkedin, Mail, MapPin, Briefcase, Code2, Award, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const profileImage =  '/ugur-resume/assets/profile.jpeg';;

  const skills = [
    'TypeScript',
    'Node.js',
    'AWS',
    'Git',
    'Shopify',
    'BigCommerce',
    'React',
    'PHP',
    'PostgreSQL',
    'Docker',
    'REST APIs',
    'GraphQL'
  ];

  const workHistory = [
    {
      title: 'Senior Software Developer',
      company: 'Optimum7',
      period: '2025 - Present',
      description: 'Senior developer for e-commerce platforms, specializing in Shopify and BigCommerce integrations. Built scalable solutions using TypeScript and AWS services.',
      achievements: [
        'Architected and deployed 5+ custom e-commerce solutions',
        'Migrated hundreds of product between platforms',
      ]
    },
    {
      title: 'Senior Typescript Developer',
      company: 'Goods Inc',
      period: '2022 - 2024',
      description: 'Senior developer for Logistic company which operates with electrical bikes and logistic tools.',
      achievements: [
        'Built custom Shopify apps serving 10+ merchants',
        'Optimized database queries improving performance by 3x',
        'Used complex shopify functions'
      ]
    },
    {
      title: 'Senior Software Developer',
      company: 'Viabill Inc',
      period: '2020 - 2022',
      description: 'Full-stack development role working with various technologies including PHP, JavaScript, and AWS services. Contributed to multiple client projects across different industries.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Implemented automated testing increasing code coverage to 85%',
        'Collaborated with cross-functional teams across 3 time zones'
      ]
    },
    {
      title: '.Net Core & PHP Developer, Bynogame',
      company: 'ByNoGame',
      period: '2020 - 2022',
      description: 'Full-stack development role working with various technologies including PHP, JavaScript, and AWS services. Contributed to multiple client projects across different industries.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Implemented automated testing increasing code coverage to 85%',
        'Collaborated with cross-functional teams across 3 time zones'
      ]
    },
    {
      title: 'PHP & TypeScript Developer, Sistemkoin Crypto Exchange',
      company: 'Sistemkoin Crypto Exchange',
      period: '2018 - 2020',
      description: 'Full-stack development role working with various technologies including PHP, JavaScript, and AWS services. Contributed to multiple client projects across different industries.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Implemented automated testing increasing code coverage to 85%',
        'Collaborated with cross-functional teams across 3 time zones'
      ]
    },
    {
      title: 'TypeScript Blockchain Developer',
      company: 'GLM',
      period: '2018-2018',
      description: 'Full-stack development role working with various technologies including PHP, JavaScript, and AWS services. Contributed to multiple client projects across different industries.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Implemented automated testing increasing code coverage to 85%',
        'Collaborated with cross-functional teams across 3 time zones'
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100'}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isDark ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-white text-slate-700 hover:bg-slate-50'
        }`}
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-blue-600/10 to-cyan-600/10' : 'bg-gradient-to-br from-blue-600/5 to-cyan-600/5'}`}></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-2xl border-4 border-white dark:border-slate-700">
                <Code2 className="w-20 h-20 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className={`text-5xl sm:text-6xl font-bold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Leo Ugur M
            </h1>
            <p className={`text-xl sm:text-2xl mb-6 font-light ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Senior Software Developer
            </p>
            <div className={`flex items-center gap-2 mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <MapPin className="w-5 h-5" />
              <span>İzmir, TR</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:leo.ugurm@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                  isDark ? 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/leo-ugur-m-79647652"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                  isDark ? 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className={`rounded-2xl shadow-xl p-8 sm:p-12 transition-colors duration-300 ${
          isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-100'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>About Me</h2>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Passionate software developer with 7+ years of experience building robust, scalable applications.
            Specialized in e-commerce platforms with deep expertise in Shopify and BigCommerce ecosystems.
          </p>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            I thrive on solving complex technical challenges and delivering high-quality solutions that drive
            business growth. My approach combines technical excellence with strong communication and collaboration
            skills, ensuring successful project outcomes.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Technical Skills</h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Technologies and tools I work with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className={`rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center ${
                isDark ? 'bg-slate-800 border border-slate-700 hover:border-blue-500' : 'bg-white border border-slate-100'
              }`}
            >
              <span className={`font-semibold text-center ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Work History Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Work Experience</h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>My professional journey</p>
        </div>
        <div className="space-y-6">
          {workHistory.map((job, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-xl p-8 sm:p-10 hover:shadow-2xl transition-all duration-300 ${
                isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-100'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{job.title}</h3>
                  <div className="flex items-center gap-2 text-blue-500 font-semibold mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span>{job.company}</span>
                  </div>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                  isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-50 text-slate-600'
                }`}>
                  <span className="font-medium">{job.period}</span>
                </div>
              </div>
              <p className={`leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{job.description}</p>
              <div className="space-y-3">
                <div className={`flex items-center gap-2 font-semibold mb-3 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                  <Award className="w-5 h-5 text-blue-500" />
                  <span>Key Achievements</span>
                </div>
                <ul className="space-y-2 pl-7">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className={`leading-relaxed relative before:content-['•'] before:absolute before:-left-4 before:text-blue-500 before:font-bold ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 text-blue-50">
            Available for freelance projects and full-time opportunities
          </p>
          <a
            href="mailto:leo.ugurm@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 font-semibold text-lg"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
        </div>
        <p className={`mt-12 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
          © 2024 Leo Ugur M. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
