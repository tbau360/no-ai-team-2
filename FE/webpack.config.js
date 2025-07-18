const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    // Define the entry point for your application
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      clean: true, // Clean the 'dist' folder before each build
    },
    resolve: {
      // Allow Webpack to resolve .js and .jsx extensions
      extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
        ],
      },
      resolve: {
        extensions: [".js", ".jsx"],
      },
    plugins: [
      // Generate an HTML file and inject the bundled JavaScript
      new HtmlWebpackPlugin({
        template: './src/index.html', // Path to your HTML template
      }),
    ],
    devServer: {
        static: path.join(__dirname, "dist"), // Serve files from this directory
        port: 8080, // Port for the development server
        open: true, // Open the default web browser when the server starts
      },
}
