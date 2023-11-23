import {AiFillGithub} from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn, FaMedium } from 'react-icons/fa';
import img from '../assets/cropped.jpg';

const Banner = () => {
    return (
      <div className="lg:px-56 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
            <h1 className="text[52px] font-semibold mb-8 leading-normal"> Welcome to <span className="text-fuchsia-500"> My Portfolio</span></h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, magnam porro aperiam fuga assumenda ab excepturi expedita, nisi esse accusantium harum! Qui quasi voluptatibus neque exercitationem ad veritatis inventore officia.</p>
            <div className="flex mt-8 gap-2">
                <div className="flex items-center justify-center">
                    <div className='flex space-x-2'>
                        <a href="https://github.com/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2" target='blank'>
                            <FaLinkedinIn className="text-[28px]"/>
                        </a>
                        <a href="https://github.com/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2" target='blank'>
                            <AiFillGithub className="text-[28px]"/>
                        </a>
                        <a href="https://github.com/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2" target='blank'>
                            <FaMedium className="text-[28px]"/>
                        </a>
                        <a href="https://github.com/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2" target='blank'>
                            <FaInstagram className="text-[28px]"/>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div >
        <img src={img} width= {290} height={290} className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' alt='' />
       </div>
    );
  };
  
  export default Banner;