import React, { useState, useEffect } from 'react';

function UserCard({ user }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [showMagic, setShowMagic] = useState(false);

  useEffect(() => {
    applyMagic();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applyMagic = () => {
    const nameParts = user.first_name.split('');
    const reversedName = nameParts.reverse().join('');
    const reversedEmail = user.email.split('').reverse().join('');
    setFullName(`${reversedName} ${user.last_name}`);
    setEmail(reversedEmail);
    setShowMagic(true);
  };

  const toggleMagic = () => {
    setShowMagic(!showMagic);
  };

  return (
    <div className="user-card">
      <h3>{fullName}</h3>
      <p>{email}</p>
      {showMagic && <p>🪄 Magic Applied!</p>}
      <button onClick={toggleMagic}>{showMagic ? 'Remove Magic' : 'Apply Magic'}</button>
    </div>
  );
}

export default UserCard;