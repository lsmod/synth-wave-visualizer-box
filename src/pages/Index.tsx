
import React from 'react';
import VolumeVisualizer from '../components/VolumeVisualizer';
import StopButton from '../components/StopButton';
import SettingsButton from '../components/SettingsButton';
import ProfileButtons from '../components/ProfileButtons';

const Index = () => {
  return (
    <div className="synth-interface">
      <div className="synth-header">
        <SettingsButton />
      </div>
      
      <div className="main-controls">
        <VolumeVisualizer />
        <StopButton />
      </div>
      
      <ProfileButtons />
    </div>
  );
};

export default Index;
