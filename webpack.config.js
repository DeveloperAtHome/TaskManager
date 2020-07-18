const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'code.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ["@babel/preset-env", {
                "useBuiltIns": false,
              }],
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              ["@babel/plugin-transform-runtime",
                {
                  "absoluteRuntime": false,
                  "corejs": false,
                  "helpers": true,
                  "regenerator": true,
                }]
            ]
          }
        }
      }
    ]
  }
};