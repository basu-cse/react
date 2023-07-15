import React, { useState } from 'react';
import EmojiSelector from './EmojiSelector';

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div>
      <h1>Emoji Fun</h1>
      {selectedEmoji && (
        <div>
          <h2>You selected:</h2>
          <span className="emoji">{selectedEmoji}</span>
        </div>
      )}
      <EmojiSelector onSelect={handleEmojiSelect} />
    </div>
  );
}

export default App;