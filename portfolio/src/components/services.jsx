const Services = () => {
    return (
      <div data-aos="fade-up" id="Services" className="h-full sm:container mx-auto flex flex-col justify-center items-center">
        <h2 data-aos="fade-up" className="text-center text-4xl font-bold pt-10 sm:pt-0 pb-10 uppercase text-fuchsia-500">Services</h2>
        <div className="sm:grid grid-cols-2 gap-10">
          <div data-aos="fade-right" className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
            <h3 data-aos="fade-down" className="text-xl mb-5 font-bold text-fuchsia-800">Web Design</h3>
            <p data-aos="fade-up" className="leading-10 text-gray-500 text-justify">
              As a dedicated web design professional, I bring a creative and strategic approach to crafting visually stunning and user-centric websites. With a keen eye for aesthetics and a commitment to delivering exceptional user experiences, my goal is to translate your brand identity into a captivating online presence.
            </p>
          </div>
  
          <div data-aos="fade-left" className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
            <h3 data-aos="fade-up" className="text-xl mb-5 font-bold text-fuchsia-800">Web Development</h3>
            <p data-aos="fade-down" className="leading-10 text-gray-500 text-justify">
              As a seasoned web development professional, I offer comprehensive and tailored services to meet the diverse needs of businesses seeking a strong online presence. With a rich background in both front-end and back-end technologies, I specialize in crafting visually appealing and highly functional websites and web applications.
            </p>
          </div>
  
          <div data-aos="fade-right" className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
            <h3 data-aos="fade-left" className="text-xl mb-5 font-bold text-fuchsia-800">Issue Fixing</h3>
            <p data-aos="fade-right" className="leading-10 text-gray-500 text-justify">
              Offering dedicated issue-fixing services, I bring a meticulous and solutions-oriented approach to address and resolve a wide array of challenges that may arise in your digital landscape. With a focus on efficiency and precision, I specialize in diagnosing and remedying issues across web applications, websites, and software systems.
            </p>
          </div>
  
          <div data-aos="fade-up" className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
            <h3 data-aos="fade-right" className="text-xl mb-5 font-bold text-fuchsia-800">Server Management</h3>
            <p data-aos="fade-left"  className="leading-10 text-gray-500 text-justify">
              Specializing in server management services, I offer a comprehensive solution to ensure the seamless and secure operation of your digital infrastructure. With expertise in configuring, monitoring, and optimizing server environments, I am committed to enhancing the reliability and performance of your servers.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  