import React, { useState, useEffect } from 'react';
import './css/cursorTyped.css'; // Import the relevant styles

const CursorTyped = () => {
  const lines = [
    'We build, we create the beauty of Mechanical.',
    'We formed not only society but also a family.' 
  ];
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const lineChangeDelay = 1000;
  
    const handleTyping = () => {
      if (!isDeleting && index < lines[currentLine].length) {
        setText((prev) => prev + lines[currentLine][index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else if (!isDeleting && index === lines[currentLine].length) {
        setTimeout(() => setIsDeleting(true), lineChangeDelay);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setCurrentLine((prev) => (prev + 1) % lines.length); // Loop back to the first line
      }
    };
  
    const timer = setTimeout(handleTyping, typingSpeed);
  
    return () => clearTimeout(timer);
  }, [index, isDeleting, currentLine, lines]);
  
  

  return (
    <div className="bottom" id="navBar-animation">
      <div className="container">
        {text}
        <span className="cursor">|</span>
      </div>
    </div>
  );
};

export default CursorTyped;