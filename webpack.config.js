const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/weatherforecast.ts'),
    output: {
        filename: 'bundle.js',
        path: __dirname,
        // library: 'WeatherForecast',
        // libraryTarget:'var',
        // libraryExport:'default'
        
    },
    devtool: 'inline-source-map',
   
   
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};