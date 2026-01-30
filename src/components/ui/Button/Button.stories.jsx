// src/components/ui/Button/Button.stories.jsx
import { Button } from './Button';

export default {
  title: 'UI/Button', // 스토리북 사이드바 메뉴 이름
  component: Button,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};