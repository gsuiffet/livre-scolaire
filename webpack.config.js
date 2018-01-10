module.exports = {
    entry: './public/renderdom.js',
    output: { path: __dirname+'/public/', filename: 'bundle.js' },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['env', 'react']
                        }
                    }
                ]
            }
        ]
    }
};