import React, { useEffect, useState } from 'react';
import '../styles/animation.css'; // Import your CSS file for styling

function TypingAnimation({ content }) {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex === (content.length)-1) {
        clearInterval(typingInterval);
      } else {
        setText((prevText) => prevText + content[currentIndex]);
        currentIndex++;
      }
    }, 100); // Adjust the interval as needed

    return () => clearInterval(typingInterval);
  }, [content]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prevCursorVisible) => !prevCursorVisible);
    }, 500); // Adjust the cursor blink interval as needed

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="typing-animation">
      <span className="typed-text">{text}</span>
      {cursorVisible && <span className="cursor">|</span>}
    </div>
  );
}

export default TypingAnimation;
