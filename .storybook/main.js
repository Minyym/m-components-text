module.exports = {
  // 表示我们的组件所在目录，Storybook会将这个数组目录下的文件加载到我们看见的组件库Index首页
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // 我们使用到的插件
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}