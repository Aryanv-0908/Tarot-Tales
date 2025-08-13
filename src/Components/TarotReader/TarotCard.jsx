import React from "react";
import "./TarotCard.css";

export default function TarotCard({ idx, frontImg, backImg, isFlipped, isSelectable, angle, onClick }) {
  return (
    <div
      className={`card${isFlipped ? " flipped" : ""}${isSelectable ? " selectable" : ""}`}
      style={{
        position: "absolute",
        left: "50%",
        bottom: 0,
        width: 80,
        height: 120,
        transform: `rotate(${angle}deg) translateX(-50%) translateY(-60px)`,
        transformOrigin: "bottom center",
        zIndex: isFlipped ? 2 : 1,
        cursor: isSelectable ? "pointer" : "default",
      }}
      onClick={isSelectable ? () => onClick(idx) : undefined}
      tabIndex={isSelectable ? 0 : -1}
      role="button"
      aria-label={isSelectable ? `Select card ${idx + 1}` : `Card ${idx + 1}`}
      onKeyDown={
        isSelectable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                onClick(idx);
                e.preventDefault();
              }
            }
          : undefined
      }
    >
      <div className="card-inner">
        {/* BACK is the default visible face */}
        <div className="card-back card-face">
          <img src={backImg} alt="Card back" draggable={false} />
        </div>
        {/* FRONT is hidden until .flipped applies */}
        <div className="card-front card-face">
          <img src={frontImg} alt={`Tarot card ${idx + 1}`} draggable={false} />
        </div>
      </div>
    </div>
  );
}
