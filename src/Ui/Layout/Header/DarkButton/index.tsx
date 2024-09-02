/** @jsx createElement */

import React from 'react';
import {Moon, Sun, SunMoon} from 'lucide-react';
import {Button} from '../../../../Button/index.tsx';
import {
  useDarkChoice,
  useToggleDarkChoiceCallback,
} from '../../../LocalStore.tsx';

const {createElement} = React;
const icons = [Sun, Moon, SunMoon];

export const DarkButton = () => (
  <Button
    variant="icon"
    onClick={useToggleDarkChoiceCallback()}
    icon={icons[useDarkChoice()]}
  />
);
