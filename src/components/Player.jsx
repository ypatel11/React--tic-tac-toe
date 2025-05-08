import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  
  if (isEditing) {
    editablePlayerName = <input type="text" value={playerName} onChange = {handleChange} required />;
  }

  return (
    <li className = { isActive ? 'active' : undefined }>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}