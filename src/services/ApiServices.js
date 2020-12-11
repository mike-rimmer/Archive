// import axios from "axios";
// Note for production version
const axios = require('axios').default;

const AxiosApi = axios.create({
  // Change baseUrl to rimike.ca for Production
  // baseURL: 'http://localhost/mills/mills-list-server/api/',
  baseURL: 'https://marmuseum.ca/mills/mills-list-server/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getMillsVesselNames () {
    return AxiosApi.get(
      'Mills/readshipnames.php',
    );
  },

  getMillsSummaryByProv (payload) {
    return AxiosApi.get(
      `Mills/getMillsSummaryWithProv.php?${new URLSearchParams({ prov: payload })}`,
    );
  },

  getMillsSummaryByYear (payload) {
    return AxiosApi.get(
      `Mills/getMillsSummaryWithYear.php?${new URLSearchParams({ year: payload })}`,
    );
  },

  getMillsSummaryByReason (payload) {
    return AxiosApi.get(
      `Mills/getMillsSummaryWithReasonForClosing.php?${new URLSearchParams({ reasonclosed: payload })}`,
    );
  },

  getMillsSummaryByShip (payload) {
    return AxiosApi.get(
      `Mills/getMillsSummaryWithShipName.php?${new URLSearchParams({ shipname: payload })}`,
    );
  },

  // Detail Searches start here.
  getMillsDetailByMills (payload) {
    return AxiosApi.get(
      `Mills/getMillsDetailWithMilsNum.php?${new URLSearchParams({ mills: payload })}`,
    );
  },

  // getPhotos(key) {
  //   return AxiosApi.get(
  //     `/api/photos/read.php?${new URLSearchParams({ id: key, status: 'A' })}`,
  //   );
  // },

  // getPendingStories() {
  //   return AxiosApi.get(
  //     `/api/veterans/read.php?${new URLSearchParams({ status: 'P' })}`,
  //   );
  // },

  // getPendingPhotos(key) {
  //   return AxiosApi.get(
  //     `/api/photos/read.php?${new URLSearchParams({ status: 'P', id: key })}`,
  //   );
  // },

  // // When using axios
  // updatePendingPhotos(payload) {
  //   return AxiosApi.post('/api/photos/update.php', payload);
  // },

  // updateVeteranStory(payload) {
  //   return AxiosApi.post('/api/veterans/update.php', payload);
  // },

  // postEmail(payload) {
  //   return AxiosApi.post('api/mail/email.php', payload);
  // },

  // savePhotosToServer(payload) {
  //   return AxiosApi.post('api/veterans/uploadphotos.php', payload,
  //     {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  // },

  // savePhotos2DB(payload) {
  //   return AxiosApi.post('api/veterans/create.php', payload);
  // },

  // saveStoryToServer(payload) {
  //   return AxiosApi.post('api/veterans/create.php', payload);
  // },
};
