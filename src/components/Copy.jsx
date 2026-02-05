import React, { useState } from "react";

function Copy() {
  const [done, setDone] = useState(false);

  function copyText() {
    navigator.clipboard.writeText("YOUR TEXT HERE");
    setDone(true);
    setTimeout(() => setDone(false), 1200);
  }

  return (
    <button
      onClick={copyText}
      style={{ background: "none", border: "none", cursor: "pointer" }}
      className={done ? "done" : ""}
    >
      <svg width="28" height="40" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="copyGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#16A34A"/>
            <stop offset="100%" stopColor="#14B8A6"/>
          </linearGradient>
        </defs>

        <rect x="7" y="5" width="12" height="14" rx="2" className="sheet2" />
        <rect x="4" y="3" width="12" height="14" rx="2" className="sheet1" />
        <path d="M9 12l2 2 4-4" strokeWidth="2" fill="none" className="check" />
      </svg>

      <style>{`
        .sheet1 {
          fill: url(#copyGrad);
          transition:.25s ease;
        }

        .sheet2 {
          fill:#BBF7D0;
          transition:.25s ease;
        }

        button:hover .sheet1 {
          transform: translate(-2px,-2px);
          filter: brightness(1.1);
        }

        button:hover .sheet2 {
          transform: translate(2px,2px);
        }

        .check {
          opacity:0;
          transform: scale(.4);
          transform-origin:center;
          transition:.25s;
          stroke:#15803D;
        }

        .done .check {
          opacity:1;
          transform: scale(1);
        }

        .done .sheet1,
        .done .sheet2 {
          opacity:.25;
        }
      `}</style>
    </button>
  );
}

export default Copy;
