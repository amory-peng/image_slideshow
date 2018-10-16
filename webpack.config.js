module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './frontend/entry.jsx'],
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '*'],
  },
};
