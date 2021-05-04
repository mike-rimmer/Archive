 /* eslint-disable */

 module.exports = {
  transpileDependencies: [
    'vuetify',
  ],

  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },

  chainWebpack: config => {
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      match (originalTag, { kebabTag, camelTag, path, component }) {
        if (kebabTag.startsWith('core-')) {
          return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
        }
      }
    }])
  },

  devServer: {

  },

  configureWebpack: {
    devtool: 'source-map',
  },


  publicPath: process.env.NODE_ENV === 'production' ? '/shiplists2/' : '/',

};


