import React from 'react';

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <div className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl" style={{ transform: 'scaleY(0.290164) translateZ(0px)' }}></div>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
            <figure className="stroke-dark absolute left-0 dark:stroke-light">
              <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" pathLength="1" className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"></circle>
                <circle cx="75" cy="50" r="20" pathLength="1" className="fill-light stroke-[5px] dark:fill-dark" strokeDashoffset="0px" strokeDasharray="0.8640192539109507px 1px"></circle>
                <circle cx="75" cy="50" r="10" pathLength="1" className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"></circle>
              </svg>
            </figure>
            <div style={{ transform: 'none' }}>
              <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                Software Engineer{' '}
                <a className="capitalize text-primary dark:text-primaryDark" href="https://google.com" target="_blank" rel="noreferrer" >
                  @Google
                </a>
              </h3>
              <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">2022-Present | Mountain View, CA</span>
              <p className="font-medium w-full md:text-sm">
                Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.
              </p>
            </div>
          </li>
          {/* Add other experience items similarly */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
