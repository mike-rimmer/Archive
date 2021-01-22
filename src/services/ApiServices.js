// import axios from "axios";
// Note for production version
const axios = require('axios').default;

const AxiosApi = axios.create({
  // Change baseUrl to rimike.ca for Production
  baseURL: 'http://localhost/mills/mills-list-server/api/',
  // baseURL: 'https://marmuseum.ca/mills/mills-list-server/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getMillsLookupVesselNames () {
    return AxiosApi.get(
      'mills//getMillsLookupShipnames.php',
    );
  },

  getMillsSummaryByProv (payload) {
    return AxiosApi.get(
      `mills/getMillsSummaryWithProv.php?${new URLSearchParams({ prov: payload })}`,
    );
  },

  getMillsSummaryByYear (payload) {
    return AxiosApi.get(
      `mills/getMillsSummaryWithYear.php?${new URLSearchParams({ year: payload })}`,
    );
  },

  getMillsSummaryByReason (payload) {
    return AxiosApi.get(
      `mills/getMillsSummaryWithReasonForClosing.php?${new URLSearchParams({ reasonclosed: payload })}`,
    );
  },

  getMillsSummaryByShip (payload) {
    return AxiosApi.get(
      `mills/getMillsSummaryWithShipName.php?${new URLSearchParams({ shipname: payload })}`,
    );
  },

  // Detail Searches start here.
  getMillsDetailByMills (payload) {
    return AxiosApi.get(
      `Mills/getMillsDetailWithMillsNum.php?${new URLSearchParams({ mills: payload })}`,
    );
  },

  // **************Walls Data Fetches**********************

  getWallsLookupVesselNames () {
    return AxiosApi.get(`walls/getWallsLookupShipNames.php`)
  },

  getWallsSummaryByShip (payload) {
    return AxiosApi.get(
      `walls/getWallsSummaryWithShipName.php?${new URLSearchParams({ shipname: payload })}`,
    );
  },

  getWallsSummaryByProv (payload) {
    return AxiosApi.get(
      `walls/getWallsSummaryWithProv.php?${new URLSearchParams({ prov: payload })}`,
    );
  },

  getWallsSummaryByBuilder (payload) {
    return AxiosApi.get(
      `walls/getWallsSummaryWithBuilder.php?${new URLSearchParams({ builder: payload })}`,
    );
  },

  getWallsSummaryByYear (payload) {
    return AxiosApi.get(
      `walls/getWallsSummaryWithYear.php?${new URLSearchParams({ year: payload })}`,
    );
  },

  getWallsSummaryByReason (payload) {
    return AxiosApi.get(
      `walls/getWallsSummaryWithReasonForClosing.php?${new URLSearchParams({ reason: payload })}`,
    );
  },

  getWallsDetailByID (id) {
    return AxiosApi.get(
      `walls/getWallsDetailsById.php?${new URLSearchParams({ id: id })}`,
    );
  }

};
