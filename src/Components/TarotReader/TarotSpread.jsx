import React, { useState, useEffect } from "react";
import TarotCard from "./TarotCard";
import "./TarotSpread.css";
import { Link } from "react-scroll";

// Arc angles for 9 cards arranged in a subtle fan
const arcAngles = [-40, -30, -20, -10, 0, 10, 20, 30, 40];

// Fisher-Yates shuffle function for deck randomization
function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default function TarotSpread({ tarotImages, cardBackImg, meanings }) {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [revealed, setRevealed] = useState(false);

  // Shuffle cards on mount or when tarotImages change
  useEffect(() => {
    setShuffledCards(shuffleArray(tarotImages));
    setSelectedIndices([]);
    setRevealed(false);
  }, [tarotImages]);

  // Handle card selection logic (max 3)
  const handleCardClick = (idx) => {
    if (revealed) return;
    if (selectedIndices.includes(idx)) return;
    if (selectedIndices.length >= 3) return;
    setSelectedIndices([...selectedIndices, idx]);
  };

  // Reveal selected cards
  const revealCards = () => {
    if (selectedIndices.length === 3) setRevealed(true);
  };

  // Reset and reshuffle on replay
  const resetGame = () => {
    setSelectedIndices([]);
    setRevealed(false);
    setShuffledCards(shuffleArray(tarotImages));
  };

  return (
    <div className="tarot-spread-wrapper">
      <div className="tarot-spread" id="TarotGame">
        {shuffledCards.map((imgSrc, idx) => {
          // Flip cards only if revealed and selected
          const isFlipped = revealed && selectedIndices.includes(idx);
          // Card is selectable only if not revealed, max 3 cards selected, and card not already selected
          const isSelectable = !revealed && selectedIndices.length < 3 && !selectedIndices.includes(idx);
          // Selected cards glow
          const isSelected = selectedIndices.includes(idx);

          return (
            <TarotCard
              key={idx}
              idx={idx}
              frontImg={imgSrc}
              backImg={cardBackImg}
              isFlipped={isFlipped}
              isSelectable={isSelectable}
              isSelected={isSelected}
              angle={arcAngles[idx]}
              onClick={handleCardClick}
            />
          );
        })}
      </div>

      <div className="tarot-controls">
        {!revealed && (
          <button
            className="reveal-btn"
            onClick={revealCards}
            disabled={selectedIndices.length !== 3}
            aria-disabled={selectedIndices.length !== 3}
          >
            Reveal Selected Cards
          </button>
        )}

        {revealed && (
          <>
            <div className="selected-cards-flex">
              {selectedIndices.map((selectedIdx) => {
                // Map selected shuffled card index into original tarotImages array index for meaning lookup
                const originalIndex = tarotImages.indexOf(shuffledCards[selectedIdx]);
                return (
                  <div key={selectedIdx} className="selected-card-item">
                    <img
                      src={shuffledCards[selectedIdx]}
                      alt={meanings[originalIndex].title}
                      className="selected-card-img"
                      draggable={false}
                    />
                    <div className="selected-card-title">{meanings[originalIndex].title}</div>
                    <div className="selected-card-meaning">{meanings[originalIndex].description}</div>
                  </div>
                );
              })}
            </div>
            <Link to="tarotTitle" smooth={true} spy={true} offset={-170} duration={500}><button className="reset-btn" onClick={resetGame}>
              Choose Again
            </button></Link>
          </>
        )}
      </div>
    </div>
  );
}
