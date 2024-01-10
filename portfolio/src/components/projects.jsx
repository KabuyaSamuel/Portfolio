
import img from '../assets/farmshare.png';
import img2 from '../assets/lorem.jpg';
import img3 from '../assets/lorem2.jpg';


const Projects = () => {
  return (
    <div id="Projects" className="sm:container mx-auto flex flex-col items-center justify-center p-5">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">
        Projects
      </h1>
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Project 1 */}
        <a href="https://farmshare.co.ke/" className="group col-span-2 lg:col-span-1" data-aos="flip-up" target="_blank" rel="noopener noreferrer">
          <div className="relative before: absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
            <img className="transition duration-500" src={img} alt="Farm Share" width="2000" height="1333" />
          </div>
          <div className="flex items-center justify-between p-4">
            <h3 className="text-2xl font-normal text-fuchsia-800">Farm Share</h3>
            <span className="h-max rounded-full border border-fuchsia-800/30 px-2 py-1 text-xs tracking-wider text-fuchsia-800">
              04/2023
            </span>
          </div>
        </a>

        {/* Project 2 */}
        <a href="https://farmshare.co.ke/" className="group col-span-2 lg:col-span-1" data-aos="flip-up" target="_blank" rel="noopener noreferrer">
          <div className="relative before: absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
            <img className="transition duration-500" src={img} alt="Gild Sport" width="2000" height="1333" />
          </div>
          <div className="flex items-center justify-between p-4">
          <h3 className="text-2xl font-normal text-fuchsia-800">Farm Share</h3>
            <span className="h-max rounded-full border border-fuchsia-800/30 px-2 py-1 text-xs tracking-wider text-fuchsia-800">
              04/2023
            </span>
          </div>
        </a>

        {/* Project 3 */}
        <a href="/pages/project3" className="group col-span-2 lg:col-span-1" data-aos="flip-up" target="_blank" rel="noopener noreferrer">
          <div className="relative before: absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
            <img className="transition duration-500" src={img2} alt="Gild Sport" width="2000" height="1333" />
          </div>
          <div className="flex items-center justify-between p-4">
            <h3 className="text-2xl font-normal text-fuchsia-800">Lorem Ipsum</h3>
            <span className="h-max rounded-full border border-fuchsia-800/30 px-2 py-1 text-xs tracking-wider text-fuchsia-800">
              01/2024
            </span>
          </div>
        </a>

        {/* Project 4 */}
        <a href="/pages/project4" className="group col-span-2 lg:col-span-1" data-aos="flip-up" target="_blank" rel="noopener noreferrer">
          <div className="relative before: absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
            <img className="transition duration-500" src={img3} alt="Gild Sport" width="2000" height="1333" />
          </div>
          <div className="flex items-center justify-between p-4">
            <h3 className="text-2xl font-normal text-fuchsia-800">Lorem Ipsum</h3>
            <span className="h-max rounded-full border border-fuchsia-800/30 px-2 py-1 text-xs tracking-wider text-fuchsia-800">
              01/2024
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;