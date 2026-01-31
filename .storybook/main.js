

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-vite",
  async viteFinal(config, { configType }) {
    // 1. 배포(PRODUCTION) 모드일 때만 경로를 강제로 '/storybook/'으로 고정
    if (configType === 'PRODUCTION') {
      config.base = '/storybook/';
    }
    return config;
  },
};
export default config;