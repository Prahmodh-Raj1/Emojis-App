import React from "react";
import Emojipedia from "../emojipedia.js";
import Entry from "./Entry.jsx";
function create(moji) {
  return (
    <Entry
      key={moji.id}
      temp={moji.id}
      name={moji.name}
      emoji={moji.emoji}
      meaning={moji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(create)}</dl>
    </div>
  );
}
export default App;
