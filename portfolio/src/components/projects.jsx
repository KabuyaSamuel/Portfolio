import { useState } from 'react';
import img from '../assets/farmshare.png';
import img2 from '../assets/lorem.jpg';
import img3 from '../assets/lorem2.jpg';

const projectsData = [
  {
    imgSrc: img,
    name: 'Farm Share',
    previewLink: 'https://farmshare.co.ke/',
    sourceCodeLink: 'https://github.com/KabuyaSamuel/Farm-Flow',
    date: '04/2023',
  },
  {
    imgSrc: img,
    name: 'Farm Share',
    previewLink: 'https://farmshare.co.ke/',
    sourceCodeLink: 'https://github.com/KabuyaSamuel/Farm-Flow',
    date: '04/2023',
  },
  {
    imgSrc: img2,
    name: 'Lorem Ipsum',
    previewLink: '/pages/project',
    sourceCodeLink: 'https://github.com/KabuyaSamuel',
    date: '01/2024',
  },
  {
    imgSrc: img3,
    name: 'Lorem Ipsum',
    previewLink: '/pages/project',
    sourceCodeLink: 'https://github.com/KabuyaSamuel/',
    date: '01/2024',
  },
];

const Projects = () => {
  // Define state variables for tracking clicked links
  const [previewClicked, setPreviewClicked] = useState({});
  const [sourceCodeClicked, setSourceCodeClicked] = useState({});

  const handlePreviewClick = (index) => {
    setPreviewClicked((prev) => ({ ...prev, [index]: true }));
  };

  const handleSourceCodeClick = (index) => {
    setSourceCodeClicked((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div id="Projects" className="sm:container mx-auto flex flex-col items-center justify-center p-5">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">
        Projects
      </h1>
      <div className="grid lg:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <div key={index} className="group col-span-2 lg:col-span-1 relative" data-aos="flip-up">
            <div className="relative before: absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
              <img className="transition duration-500 group-hover:opacity-70" src={project.imgSrc} alt={project.name} width="2000" height="1333" />
            </div>
            <div className="overlay absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-center py-4">
              <div className="flex flex-col items-center justify-center">
                <a
                  href={project.previewLink}
                  className={`text-sm mb-2 ${previewClicked[index] ? 'text-gray-500' : 'text-white'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handlePreviewClick(index)}
                >
                  Preview
                </a>
                <a
                  href={project.sourceCodeLink}
                  className={`text-sm ${sourceCodeClicked[index] ? 'text-gray-500' : 'text-white'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSourceCodeClick(index)}
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between p-4">
              <h3 className="text-2xl font-normal text-fuchsia-800">{project.name}</h3>
              <span className="h-max rounded-full border border-fuchsia-800/30 px-2 py-1 text-xs tracking-wider text-fuchsia-800">
                {project.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
