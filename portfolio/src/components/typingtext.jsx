import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TypingText = ({ texts }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fixedHeight = "5rem"; // Set a fixed height here

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < texts.length) {
        const currentText = texts[currentIndex];
        setDisplayText((prevText) => {
          if (prevText.length === currentText.length) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            return "";
          }
          return currentText.substring(0, prevText.length + 1);
        });
      }
    }, 150); // Adjust typing speed here (milliseconds)
    
    return () => clearInterval(intervalId);
  }, [texts, currentIndex]);

  return (
    <div style={{ height: fixedHeight }}>
      <h5 className="text-[30px] font-semibold mb-8 leading-normal">{displayText}</h5>
    </div>
  );
};

TypingText.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TypingText;
