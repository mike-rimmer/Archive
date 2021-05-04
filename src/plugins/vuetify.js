import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'
// import { colors } from 'vuetify/lib';
// import 'font-awesome/css/font-awesome.min.css'
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  // theme: {
  //   themes: {
  //     light: {
  //       museumblue: "#091154",
  //       secondary: "#424242",
  //       accent: "#82B1FF",
  //       error: "#FF5252",
  //       info: "#2196F3",
  //       success: "#4CAF50",
  //       warning: "#FFC107",
  //       lightblue: "#14c6FF",
  //       yellow: "#FFCF00",
  //       pink: "#FF1976",
  //       orange: "#FF8657",
  //       magenta: "#C33AFC",
  //       darkblue: "#1E2D56",
  //       gray: "#909090",
  //       neutralgray: "#9BA6C1",
  //       green: "#2ED47A",
  //       red: "#FF5c4E",
  //       darkblueshade: "#308DC2",
  //       lightgray: "#BDBDBD",
  //       lightpink: "#FFCFE3",
  //       white: "#FFFFFF"
  //     }
  //   }
  // }
});

