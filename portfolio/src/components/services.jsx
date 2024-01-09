const Services = () => {
    return (
      <div  data-aos="fade-right" id="Services" className=" min-h-screen p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-up" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Services</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
          <h2 data-aos="fade-up" className="text-[26] flex items-center justify-center font-semibold text-fuchsia-800 rounded-md w-52 h-24 border-2 border-fuchsia-800 b_glow "> HTML5</h2>
          <h2 data-aos="fade-right" className="text-[26] flex items-center justify-center font-semibold text-fuchsia-800 rounded-md w-52 h-24 border-2 border-fuchsia-800 b_glow "> CSS3</h2>
          <h2 data-aos="fade-left" className="text-[26] flex items-center justify-center font-semibold text-fuchsia-800 rounded-md w-52 h-24 border-2 border-fuchsia-800 b_glow "> JavaScript</h2>
          <h2 data-aos="fade-down" className="text-[26] flex items-center justify-center font-semibold text-fuchsia-800 rounded-md w-52 h-24 border-2 border-fuchsia-800 b_glow "> React</h2>
          {/* <h2 data-aos="fade-down" className="text-[26] flex items-center justify-center font-semibold text-fuchsia-800 rounded-md w-44 border-2 border-fuchsia-800 b_glow "> Python</h2> */}
        </div>
      </div>
    );
  };
  
  export default Services;
  