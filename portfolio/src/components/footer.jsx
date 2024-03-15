import { FaGithub, FaMedium, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const Year = new Date().getFullYear();

    return (
        <footer className="relative bg-black text-white">
            <div className="relative overflow-hidden">
                {/* Curved pattern */}
                <svg className="absolute top-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#1F2937" fillOpacity="1" d="M0,128L60,122.7C120,117,240,107,360,133.3C480,160,600,224,720,234.7C840,245,960,203,1080,176C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>

                {/* Footer content */}
                <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20 relative z-10">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl text-fuchsia-500">☽kͥabͣuͫℽa☾ ҉  </h2>
                        <p>
                            An Automation Assistant helping businesses optimize and automate their processes to increase efficiency and productivity.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[22px] font-semibold text-fuchsia-500 py-2 uppercase">Services</h2>
                        <ul className="my-4 list-none">
                            <li>AI & Automation Assistant</li>
                            <li>Web Development</li>
                            <li>Low Code / No Code development</li>
                            <li></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[22px] font-semibold text-fuchsia-500 py-2 uppercase">Hobbies</h2>
                        <ul className="my-4 list-none">
                            <li>Watching Hacking Documentaries</li>
                            <li>Listening to tech talks</li>
                            <li>Listening to cybersecurity stories</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[22px] font-semibold text-fuchsia-500 py-2 uppercase">Contact</h2>
                        <p className="text-[16px] my-4">Email: samuelkabuya14@gmail.com</p>
                        <p className="text-[16px] my-4">Phone: +254-748-204-833 </p>
                        <div className="flex space-x-4">
                            <a className="text-white hover:text-fuchsia-500" href="https://github.com/KabuyaSamuel" target='_blank' rel='noreferrer'><FaGithub /></a>
                            <a className="text-white hover:text-fuchsia-500" href="https://www.linkedin.com/in/samuelkabuya/" target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
                            <a className="text-white hover:text-fuchsia-500" href="#"><FaTwitter /></a>
                            <a className="text-white hover:text-fuchsia-500" href="https://medium.com/@samuelkabuya" target='_blank' rel='noreferrer'><FaMedium /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <h6 className="text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">&copy; Samuel Kabuya {Year}</h6>


            </div>
        </footer>
    );
};

export default Footer;
