
import React from 'react';
import { Settings } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SettingsButton: React.FC = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="settings-button">
          <Settings size={16} />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Settings</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default SettingsButton;
