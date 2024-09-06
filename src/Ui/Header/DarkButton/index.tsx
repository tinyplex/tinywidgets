/** @jsx createElement */

import { Moon, Sun, SunMoon } from 'lucide-react';
import { Button } from '../../../Button/index.tsx';
import { createElement } from '../../../index.ts';
import {
  useDarkChoice,
  useToggleDarkChoiceCallback,
} from '../../../stores/LocalStore.tsx';

const icons = [Sun, Moon, SunMoon];

export const DarkButton = () => (
  <Button
    variant="icon"
    onClick={useToggleDarkChoiceCallback()}
    icon={icons[useDarkChoice()]}
  />
);
