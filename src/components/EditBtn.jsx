import React from "react";

function EditBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ background: "none", border: "none", cursor: "pointer" }}
      className="editBtn"
    >
      <svg width="25" height="36" viewBox="0 0 24 24">
        <path
          className="pen-body"
          d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25z"
        />
        <path
          className="pen-tip"
          d="M20.71 6.04a1 1 0 0 0 0-1.41L19.37 3.29a1 1 0 0 0-1.41 0l-1.13 1.13 3.75 3.75z"
        />
        <rect className="pen-line" x="3" y="22" width="20" height="2" rx="1"/>
      </svg>

      <style>{`
        .pen-body {
          fill:#1f2937;
          transition:.25s ease;
          transform-origin:center;
        }

        .pen-tip {
          fill:#374151;
          transition:.25s ease;
        }

        .pen-line {
          fill:#9ca3af;
          transition:.25s ease;
        }

        .editBtn:hover .pen-body {
          fill:#16A34A;
          transform: translateY(-1px) rotate(-6deg);
        }

        .editBtn:hover .pen-tip {
          fill:#15803D;
        }

        .editBtn:hover .pen-line {
          width:16px;
          fill:#16A34A;
        }

        .editBtn:active .pen-body {
          transform: scale(.9) rotate(-6deg);
        }
      `}</style>
    </button>
  );
}

export default EditBtn;
