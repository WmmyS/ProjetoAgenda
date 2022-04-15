// O arquivo será modularizado e executará e retornará o que pedimos
const path = require('path'); // CommonJs

//Passando o modo development o arquivo será mais minimalista para visar a performance
module.exports = {
    mode: 'development',
    //Local onde estará meus arquivos originais js
    entry: './frontend/main.js',

    // Caminho final
    output:  {
        path: path.resolve(__dirname,'public', 'assets', 'js'),
        filename: 'bundle.js', 
    },
    module: {
        rules: [{
            //exclui algo
            exclude: /node_modules/,
            /** A bassa invertida está fazendo o '.' (ponto) ter um papel de caminho do
            * diretório e o geral '.js$' significa que o arquivo termina com .js.
            */
            test: /\.js$/,
            use: {
                // Carrega o loader do babel
                loader: 'babel-loader',
                options: {
                    presets:['@babel/env']
                }
            }
        }]
    },
    // mapea o arquivo de erro do código
    devtool: 'source-map'
};

