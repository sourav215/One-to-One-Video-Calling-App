import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <input
        type="text"
        placeholder="Enter room code"
        onChange={handleInputChange}
      />
      <button
        onClick={() => {
          navigate(`/room/${input}`);
        }}
      >
        Join
      </button>
    </div>
  );
}
export default Home;
