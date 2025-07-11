const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, "src","main.js"),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open:true,
    liveReload:true,
    compress: true,
    port: 3000,
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon:path.resolve("src", "assets", "pet-icon.svg")
    }),

    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, "src", "assets"), 
          to: path.resolve(__dirname, "dist", "src","assets"), 
       }
      ],
    }),
  ],

   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          }
        }
      }
      
    ],
  },


};