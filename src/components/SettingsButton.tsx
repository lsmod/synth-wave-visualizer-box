
import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import SettingsSheet from './SettingsSheet';

const SettingsButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log('Settings button clicked, opening sheet');
    setIsOpen(true);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Tooltip>
          <TooltipTrigger asChild>
            <button 
              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              onClick={handleClick}
            >
              <Settings size={16} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>
      </SheetTrigger>
      <SheetContent side="right" className="w-96 overflow-y-auto">
        <SettingsSheet onClose={() => setIsOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};

export default SettingsButton;
