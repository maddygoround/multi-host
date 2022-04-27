const withPlugins = require("next-compose-plugins");
const withLess = require("next-plugin-antd-less");
/** @type {import('next').NextConfig} */

module.exports = withPlugins([[withLess]], {
  lessVarsFilePath: "./styles/antd-custom.less",
  lessVarsFilePathAppendToEndOfContent: true,
  reactStrictMode: false,
});
