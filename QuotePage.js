// src/components/QuotePage.js
// src/components/QuotePage.js
// src/components/QuotePage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import motivationalQuotes from '../quotes/motivational';
import friendshipQuotes from '../quotes/friendship';
import loveQuotes from '../quotes/love';
import './LikeButton.css';

const quoteData = {
  motivational: motivationalQuotes,
  friendship: friendshipQuotes,
  love: loveQuotes,
};

function QuotePage() {
  const { category } = useParams();
  const quotes = quoteData[category] || [];

  // 🟢 First define state
  const [liked, setLiked] = useState(false);
  const [quote, setQuote] = useState(() => getRandomQuote());

  // 🟢 Then define getRandomQuote
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function handleNewQuote() {
    setQuote(getRandomQuote());
    setLiked(false); // Reset like status
  }

  function toggleLike() {
    setLiked((prev) => !prev);
  }

  return (
    <div className="quote-container">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Quotes</h2>
      <p className="quote-text">“{quote.text}”</p>
      <p className="quote-author">– {quote.author}</p>

      <button className={`like-button ${liked ? 'liked' : ''}`} onClick={toggleLike}>
        {liked ? '❤️' : '🤍'} Like
      </button>

      <button onClick={handleNewQuote}>New Quote</button>
    </div>
  );
}

export default QuotePage;
