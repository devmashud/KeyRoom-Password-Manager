import React from "react";

function DeleteBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ background: "none", border: "none", cursor: "pointer" }}
      className="delBtn"
    >
      <svg width="27" height="36" viewBox="0 0 24 24">
        
        <rect className="lid" x="5" y="5" width="14" height="2" rx="1" />
        
        
        <rect className="handle" x="9" y="3" width="6" height="2" rx="1" />

        
        <rect className="bin" x="6" y="7" width="12" height="14" rx="2" />

        
        <rect className="line" x="9" y="10" width="1.5" height="8" rx="1"/>
        <rect className="line" x="12" y="10" width="1.5" height="8" rx="1"/>
        <rect className="line" x="15" y="10" width="1.5" height="8" rx="1"/>
      </svg>

      <style>{`
        .bin {
          fill:#1f2937;
          transition:.25s ease;
          transform-origin: top center;
        }

        .lid {
          fill:#374151;
          transition:.25s ease;
          transform-origin: right center;
        }

        .handle {
          fill:#6b7280;
          transition:.25s ease;
        }

        .line {
          fill:#9ca3af;
          transition:.25s ease;
        }

        /* hover animation */
        .delBtn:hover .bin {
          fill:#dc2626;
          transform: translateY(1px);
        }

        .delBtn:hover .lid {
          fill:#ef4444;
          transform: rotate(-18deg) translateY(-1px);
        }

        .delBtn:hover .handle {
          fill:#ef4444;
        }

        .delBtn:hover .line {
          fill:white;
          height:9px;
        }

        /* click press */
        .delBtn:active .bin {
          transform: scale(.92);
        }
      `}</style>
    </button>
  );
}

export default DeleteBtn;
