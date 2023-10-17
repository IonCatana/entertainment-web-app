const path = require('path');

module.exports = {
  entry: './src/index.js', // il tuo file principale di ingresso
  output: {
    filename: 'bundle.js', // il nome del file bundle di output
    path: path.resolve(__dirname, 'dist'), // la cartella di output per il bundle
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images', // specifica la cartella di output per le immagini nell'output del bundle
            },
          },
        ],
      },
    ],
  },
};
