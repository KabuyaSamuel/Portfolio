import { useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn, FaMedium } from 'react-icons/fa';
import img from '../assets/cropped.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <h1 className="text-[52px] font-semibold mb-8 leading-normal"> Welcome to <span className="text-fuchsia-500"> My Portfolio</span></h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, magnam porro aperiam fuga assumenda ab excepturi expedita, nisi esse accusantium harum! Qui quasi voluptatibus neque exercitationem ad veritatis inventore officia.</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className='flex space-x-2'>
              <a href="https://github.com/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2" target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a href="https://github.com/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2" target='_blank' rel='noopener noreferrer'>
                <AiFillGithub className="text-[28px]" />
              </a>
              <a href="https://github.com/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2" target='_blank' rel='noopener noreferrer'>
                <FaMedium className="text-[28px]" />
              </a>
              <a href="https://github.com/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2" target='_blank' rel='noopener noreferrer'>
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={img} width={400} height={400} className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' alt='' />
    </div>
  );
};

export default Home;
