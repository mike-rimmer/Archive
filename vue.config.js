module.exports = {
  transpileDependencies: [
    'vuetify',
  ],

  devServer: {
    proxy: "http://localhost/",
  },

  configureWebpack: {
    devtool: 'source-map',
  },


  publicPath: process.env.NODE_ENV === 'production' ? '/mills/'  : '/',

};


