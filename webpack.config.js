module.exports ={
  entry: "./app/components/Main.js",
  output: {
    filename: "public/bundle.js"
  },
  // This is where we tell it what to do with teh main.js code
  module: {
    // Specifying the loader, in this case it's the babel loader
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader:'babel'
      }

    ]
  },
};
