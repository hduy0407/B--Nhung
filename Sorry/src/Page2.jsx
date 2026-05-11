import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Page2.css";

export default function SorryPage() {
  const [noStyle, setNoStyle] = useState({});
  const [count, setCount] = useState(0);
  const [hideNo, setHideNo] = useState(false);

  const navigate = useNavigate();

  const moveNoButton = () => {
    if (count >= 6) {
      setHideNo(true);
      return;
    }

    const buttonWidth = 120;
    const buttonHeight = 60;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    setNoStyle({
      position: "fixed",
      left: `${x}px`,
      top: `${y}px`,
    });

    setCount((prev) => prev + 1);
  };

  return (
    <div className="sorry-page">
      <div className="sorry-container">
        <div className="sorry-heart"></div>

        <h1 className="sorry-title">
          I'm really sorry 🥺
          <br />
          Please forgive me
        </h1>

        <div className="sorry-button-container">
          <button
            className="sorry-button yes-btn"
            onClick={() => navigate("/love-letter")}
          >
            Yes 💖
          </button>

          {!hideNo && (
            <button
              className="sorry-button no-btn"
              style={noStyle}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
            >
              No 😢
            </button>
          )}
        </div>
      </div>
    </div>
  );
}