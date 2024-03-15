
import img from '../assets/cropped.jpg';
import resumePDF from '../assets/Samuel\'s Resume 2024 v2.pdf';

const About = () => {
  return (
    <div id='About' className=" min-h-screen  lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <img data-aos="fade-down" src={img} width={400} height={400} className='rounded border-2 p-1 border-fuchsia-500 img_glow' alt='' />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">About Me</h1>
        <p data-aos="fade-left"> I am a detail-oriented and skilled accountant with a passion for technology and cybersecurity. With a background in finance and accounting, I bring a unique perspective to software engineering, focusing on efficiency, accuracy, and security. Currently pursuing a BSc in Computer Science at <a href="https://www.kibo.school/" target='_blank' rel='noreferrer' className="text-fuchsia-500 hover:underline">Kibo School of Technology</a>, I am deeply interested in cybersecurity engineering and building secure systems and applications. My enthusiasm for this field is fueled by listening to cybersecurity podcasts and watching hacking documentaries.</p>
        <p data-aos="fade-right"> I leverage traditional programming languages like Python, Javascript and no-code/low-code automation tools like Airtable, Zapier, Make, and Glide to create efficient solutions. Currently, I&apos;m an Automations Assistant Trainee, utilizing no-code/low-code tools to streamline business operations and analyze data. In a previous role at <a href="https://www.codeday.org/" target='_blank' rel='noreferrer' className="text-fuchsia-500 hover:underline">CodeDay Labs</a>, I enhanced the user experience of the Zulip app and improved its documentation.</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className='flex space-x-2'>
              <a href={resumePDF} download="Samuel's Resume 2024 v2.pdf">
                <button className="neno-button shadow-x1 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                  Resume
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

