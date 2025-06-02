
import React from 'react';
import { Settings } from 'lucide-react';

const SettingsButton: React.FC = () => {
  return (
    <button className="settings-button">
      <Settings size={16} />
    </button>
  );
};

export default SettingsButton;
