const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filname: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
                {
                    test: /\.(png|jpg|svg|jpeg|webp)$/,
                      use: [
                         {
                        loader: 'file-loader',
                           options: {
                                 name: 'images/[hash]-[name].[ext]',
                               },
                         },
                         ],
                        type: 'asset/resource',
                        generator: {
                        filename: 'assets/pictures/[hash][ext]'
                        }
                }        
            ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filname: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer:{
        historyApiFallback: true,
        static: path.join(__dirname, 'dist'),
        compress:true,
        port:3005,
    }
}