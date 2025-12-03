import { RevealOnScroll } from '../RevealOnScroll';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t, i18n: {changeLanguage, language}} = useTranslation();
  
  const frontendSkills = [
    'React',
    'Vue',
    'TypeScript',
    'TailwindCSS',
    'Angular',
  ];

  const backendSkills = ['NodeJS', 'Python', 'axios', 'MongoDB', 'C'];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {t('titleAbout')}
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              {t('textAbout')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 {t('titleEducation')} </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> {t('titleEducationOne')} </strong> - 
                  {' ' + t('descEducationOne')}
                </li>
                <li>
                  <strong>{t('titleEducationTwo')}</strong> {t('descEducationTwo')}
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                💼 {t('titleWorkExp')}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {t('titleWorkExpOne') + ' '}
                    <a
                      href="https://www.instagram.com/oraculos.ia"
                      className="text-blue-400 underline hover:text-blue-300 transition-colors"
                      target="_blank"
                    >
                      Oraculos.AI
                    </a>{' ' + t('dateWorkExpOne')}
                  </h4>
                  <p>
                    {t('descWorkExpOne')}
                  </p>
                </div>

                {/* <div>
                <h4 className="font-semibold">Intern at DEF Startup (2019)</h4>
                <p>
                  Assisted in building frontend components and intergrating REST
                  APIs
                </p>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
