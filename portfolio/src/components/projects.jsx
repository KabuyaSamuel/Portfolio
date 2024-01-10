import img from '../assets/farmshare.png';

const Projects = () => {
  return (
    <div id="Projects" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
      <div className="grid lg:grid-cols-2 gap-20">
        {/* Project 1 */}
        <a href="/pages/project" className="group col-span-2 lg:col-span-1" data-aos="flip-up">
          <div className="relative before: absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
            <img className="transition duration-500" src={img} alt="Gild Sport" width="2000" height="1333" />
          </div>
          <div className="flex items-center justify-between p-4">
            <h3 className="text-2xl font-normal text-fuchsia-800">Gild Sport</h3>
            <span className="h-max rounded-full border border-fuchsia-800/30 px-2 py-1 text-xs tracking-wider text-fuchsia-800">01/2023</span>
          </div>
        </a>

        {/* Project 2 */}
        <a href="/pages/project" className="group block" data-aos="flip-up">
          <div className="relative before: absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
            <img className="transition duration-500" src={img} alt="Project Description" width="1380" height="920" />
          </div>
          <div className="flex items-center justify-between p-4">
            <h3 className="text-2xl font-normal text-fuchsia-800">Project Name 2</h3>
            <span className="h-max rounded-full border border-fuchsia-800/30 px-2 py-1 text-xs tracking-wider text-fuchsia-800">01/2023</span>
          </div>
        </a>

        {/* Project 3 */}
        <a href="/pages/project" className="group block" data-aos="flip-up">
          <div className="relative before: absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
            <img className="transition duration-500" src={img} alt="Project Description" width="826" height="826" />
          </div>
          <div className="flex items-center justify-between p-4">
            <h3 className="text-2xl font-normal text-fuchsia-800">Project Name 3</h3>
            <span className="h-max rounded-full border border-fuchsia-800/30 px-2 py-1 text-xs tracking-wider text-fuchsia-800">01/2023</span>
          </div>
        </a>

        {/* Project 4 */}
        <a href="/pages/project" className="group block" data-aos="flip-up">
          <div className="relative before: absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
            <img className="transition duration-500" src={img} alt="Project Description" width="826" height="826" />
          </div>
          <div className="flex items-center justify-between p-4">
            <h3 className="text-2xl font-normal text-fuchsia-800">Project Name 3</h3>
            <span className="h-max rounded-full border border-fuchsia-800/30 px-2 py-1 text-xs tracking-wider text-fuchsia-800">01/2023</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
