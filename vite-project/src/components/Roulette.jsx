import React, { useState } from 'react';

function Roulette({ menu, onSelect }) {
  const [result, setResult] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleRoulette = () => {
    if (!menu || menu.length === 0) return;
    setIsSpinning(true);
    setResult(null);

    setTimeout(() => {
      const random = menu[Math.floor(Math.random() * menu.length)];
      setResult(random);
      setIsSpinning(false);
    }, 1500);
  };

  return (
    <div style={{
      border: "2px dashed #aaa",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
      marginBottom: "30px"
    }}>
      <h3>🎲 오늘 뭐 마시지?</h3>
      <button
        onClick={handleRoulette}
        disabled={isSpinning}
        style={{
          backgroundColor: "#002b5b",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        {isSpinning ? "돌리는 중..." : "룰렛 돌리기"}
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <p>✨ 추천 메뉴: <strong>{result.name}</strong></p>
          <img src={result.image} alt={result.name} width="120" style={{ borderRadius: '8px' }} />
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => onSelect(result)}
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: "6px 12px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              이 메뉴로 주문하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Roulette;