import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">Experience</h2>
        <div className="flex flex-col items-center space-y-16 md:space-y-0 md:flex-row md:space-x-16">
          {/* Experience Item 1 (left) */}
          <div className="max-w-lg w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Software Engineer</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Google - Mountain View, CA</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">2022 - Present</p>
            <p className="text-gray-700 dark:text-gray-300">Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.</p>
          </div>
          {/* Experience Item 2 (right) */}
          <div className="max-w-lg w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-bold mb-2">UX Designer</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Apple Inc. - Cupertino, CA</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">2019 - 2021</p>
            <p className="text-gray-700 dark:text-gray-300">Designed user interfaces for various Apple products, focusing on enhancing user experience and usability. Collaborated with cross-functional teams to deliver intuitive and visually appealing designs.</p>
          </div>
          {/* Experience Item 3 (left) */}
          <div className="max-w-lg w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Web Developer</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Microsoft Corporation - Redmond, WA</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">2017 - 2019</p>
            <p className="text-gray-700 dark:text-gray-300">Developed and maintained web applications using modern web technologies. Collaborated with product managers and designers to deliver high-quality software solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
