// src/components/Home.js
// src/components/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmojiPopup.css'; // Add this CSS for animation

function Home() {
  const navigate = useNavigate();
  const [emoji, setEmoji] = useState(null);

  const showEmojiAndNavigate = (category) => {
    // Set emoji based on category
    const emojiMap = {
      motivational: '💪',
      friendship: '🤝',
      love: '❤️',
    };

    setEmoji(emojiMap[category]);

    // After 1 second, navigate to quote page
    setTimeout(() => {
      setEmoji(null);
      navigate(`/quotes/${category}`);
    }, 1000);
  };

  return (
    <div className="home-container">
      <h2>Select a Quote Category</h2>
      <div className="categories">
        <button onClick={() => showEmojiAndNavigate('motivational')}>Motivational</button>
        <button onClick={() => showEmojiAndNavigate('friendship')}>Friendship</button>
        <button onClick={() => showEmojiAndNavigate('love')}>Love</button>
      </div>

      {emoji && (
        <div className="emoji-popup">{emoji}</div>
      )}
    </div>
  );
}

export default Home;
