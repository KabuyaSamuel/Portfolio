// import React from 'react';
import img from '../assets/farmshare.png';



const Projects = () => {
  return (
    <div id="Projects" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 aos-init aos-animate">Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow aos-init aos-animate" src={img} alt="" />
        <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow aos-init aos-animate" src={img} alt="" />
        <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow aos-init aos-animate" src={img} alt="" />
        <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow aos-init aos-animate" src={img} alt="" />
      </div>
    </div>
  );
};

export default Projects;