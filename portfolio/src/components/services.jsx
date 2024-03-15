const Services = () => {
    return (
      <div data-aos="fade-up" id="Services" className="h-full sm:container mx-auto flex flex-col justify-center items-center p-5">
        <h1 data-aos="fade-up" className="text-[50px] text-center text-4xl font-bold pt-10 sm:pt-0 pb-10 uppercase text-fuchsia-500">Services</h1>
        <div className="sm:grid grid-cols-2 gap-10">
          <div data-aos="fade-right" className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
            <h3 data-aos="fade-down" className="text-xl mb-5 font-bold text-fuchsia-800">Web Development</h3>
            <p data-aos="fade-up" className="leading-10 text-gray-500 text-justify">
              As an experienced web developer, I specialize in bringing your digital ideas to life. With a passion for coding and a knack for problem-solving, I strive to create dynamic and user-friendly websites tailored to your unique needs. From crafting elegant designs to implementing robust functionalities, I&apos;m dedicated to ensuring your online presence stands out and delivers exceptional value to your audience.
            </p>
          </div>
  
          <div data-aos="fade-left" className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
            <h3 data-aos="fade-up" className="text-xl mb-5 font-bold text-fuchsia-800">Data Analysis</h3>
            <p data-aos="fade-down" className="leading-10 text-gray-500 text-justify">
              With expertise in Python, Pandas, Matplotlib, and Google Sheets dashboards, I excel in harnessing data to drive actionable insights and informed decision-making. From cleaning and preprocessing raw data to performing in-depth analysis and visualization, I specialize in uncovering valuable patterns and trends that empower businesses to optimize performance and achieve strategic goals. Let me transform your data into a powerful asset for growth and success.
            </p>
          </div>
  
          <div data-aos="fade-right" className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
            <h3 data-aos="fade-left" className="text-xl mb-5 font-bold text-fuchsia-800">Automation</h3>
            <p data-aos="fade-right" className="leading-10 text-gray-500 text-justify">
            I specialize in automating various business processes using low-code and no-code automation platforms such as Zapier, Airtable, Make, and Glide. Through successful collaboration with cross-functional teams, I rigorously assess specific operational demands and provide new solutions to optimize operations, assuring optimal performance, resource usage, and organizational growth. My expertise includes producing detailed documentation for automated processes, which allows for seamless knowledge transfer and long-term sustainability.
            </p>
          </div>
  
          <div data-aos="fade-up" className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
            <h3 data-aos="fade-right" className="text-xl mb-5 font-bold text-fuchsia-800">Financial Solutions</h3>
            <p data-aos="fade-left"  className="leading-10 text-gray-500 text-justify">
            With expertise in finance, accounting, and technology, I specialize in developing innovative FinTech solutions. Utilizing advanced data analysis and automation tools such as Python, pandas, and low-code platforms like Zapier, I optimize financial processes, mitigate risks, and drive organizational growth. My integrated solutions empower businesses to achieve efficiency, accuracy, and security in their financial operations.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  