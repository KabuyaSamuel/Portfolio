import { useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaTwitter, FaLinkedinIn, FaMedium } from 'react-icons/fa';
import img from '../assets/cropped.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypingText from './typingtext';

const Home = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750,
    });
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div className=" min-h-screen  lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div data-aos="fade-up" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">Hey there, I&apos;m <span className="text-fuchsia-500"> Samuel Kabuya</span></h1>
        <TypingText texts={["An AI & Automation Assistant", "Front End Developer", "Low Code & No Code Developer"]} />
        <p data-aos="fade-left">I&apos;m a detail-oriented accountant with a passion for technology and cybersecurity. Leveraging traditional programming languages and no-code/low-code tools, I create efficient solutions. Currently, as an Automations Assistant Trainee, I streamline business operations using no-code/low-code tools.</p> 
        <p data-aos="fade-right">My previous role at as a Software Engineer Intern at <a href="https://www.codeday.org/" target='_blank' rel='noreferrer' className="text-fuchsia-500 hover:underline">CodeDay Labs</a> involved enhancing the user experience of the <a href="https://zulip.com/" target='_blank' rel='noreferrer' className="text-fuchsia-500 hover:underline">Zulip </a>open source project. With a background in finance and accounting, I bring a unique perspective to software engineering.</p>

        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className='flex space-x-2'>
              <a href="https://www.linkedin.com/in/samuelkabuya/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2" target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a href="https://github.com/KabuyaSamuel" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2" target='_blank' rel='noopener noreferrer'>
                <AiFillGithub className="text-[28px]" />
              </a>
              <a href="https://medium.com/@samuelkabuya" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2" target='_blank' rel='noopener noreferrer'>
                <FaMedium className="text-[28px]" />
              </a>
              <a href="https://github.com/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2" target='_blank' rel='noopener noreferrer'>
                <FaTwitter className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={img} width={530} height={530} className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' alt='' />
    </div>
  );
};

export default Home;
