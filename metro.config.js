// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('expo/metro-config').MetroConfig}
 */
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Enable Tamagui and add nice web support with optimizing compiler + CSS extraction
const { withTamagui } = require("@tamagui/metro-plugin");
module.exports = withTamagui(config, {
  components: ["tamagui"],
  config: "./tamagui.config.ts",
  outputCSS: "./tamagui-web.css",
});

config.resolver.extraNodeModules = {
  assert: require.resolve("empty-module"), // assert can be polyfilled here if needed
  http: require.resolve("empty-module"), // stream-http can be polyfilled here if needed
  https: require.resolve("empty-module"), // https-browserify can be polyfilled here if needed
  os: require.resolve("empty-module"), // os-browserify can be polyfilled here if needed
  url: require.resolve("empty-module"), // url can be polyfilled here if needed
  zlib: require.resolve("empty-module"), // browserify-zlib can be polyfilled here if needed
  path: require.resolve("empty-module"),
  crypto: require.resolve("crypto-browserify"),
  stream: require.resolve("readable-stream"),
  buffer: require.resolve("buffer"),
};

config.transformer.getTransformOptions = () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

module.exports = config;
