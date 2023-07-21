import { FC } from "react";

export const Select: FC = () => (
  <details role="list">
    <summary aria-haspopup="listbox">
      <div>
        Banna{" "}
        <button
          style={{
            width: 20,
            height: 20,
            display: "inline-block",
            lineHeight: "20px",
            textAlign: "center",
            padding: 0,
          }}
        >
          &times;
        </button>
      </div>
    </summary>
    <ul role="listbox">
      <li>
        <label>
          <input type="checkbox" />
          Banana
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Watermelon
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Apple
        </label>
      </li>
    </ul>
  </details>
);
