
const HtmlWebPackPlugin    = require('html-webpack-plugin');
const { loader }           = require('mini-css-extract-plugin');
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin           = require("copy-webpack-plugin");
const CssMinimizerPlugin   = require("css-minimizer-webpack-plugin");
const Terser               = require("terser-webpack-plugin");
//const path = require('path'); 


module.exports = {
    mode: 'production',
    output:{
        clean:true,
        filename: 'main.[contenthash].js',
    },
    module: {
        rules:[
            { 
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false,
                }
            },

            {
                test: /\.css$/,
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /styles\.css$/,
                use: [
                    MinicssExtractPlugin.loader,
                    'css-loader'
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                
                use: [
                  {
                    loader: 'file-loader',
                  
                  }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
                },
        ]
         },

         optimization:{
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin(),
                new Terser(),
            ]
         },

         

            plugins: [
                new HtmlWebPackPlugin({
                    template: './src/index.html',
                    filename: './index.html'
                }),
                new MinicssExtractPlugin({
                    filename: '[name].[fullhash].css',
                    ignoreOrder: false
                }),
                new CopyPlugin({
                    patterns:
                    [{from: "src/assets/", to: "assets/"} ]
                }),
               
      
          ] 
     
}