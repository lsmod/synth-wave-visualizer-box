
import React, { useState } from 'react';

const ProfileButtons: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<number>(1);

  return (
    <div className="profile-buttons">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          className={`profile-button ${activeProfile === num ? 'active' : ''}`}
          onClick={() => setActiveProfile(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default ProfileButtons;
