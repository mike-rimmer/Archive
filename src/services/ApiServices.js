// import axios from "axios";
// Note for production version
// const axios = require('axios').default;
import axios from 'axios'
const AxiosApi = axios.create({
  // Change baseUrl to rimike.ca for Production
  // baseURL: 'http://marmuseum.ca/shiplists2/list-db-server/api/',

  baseURL: 'http://localhost/shiplists2/list-db-server/api/',

  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {

  // ***********************************CSL********************************
  getCSLSummaryList () {
    return AxiosApi.get(
      `csl/getCSLSummaryList.php`,
    );
  },

  getCSLDetailByID(payload) {
    return AxiosApi.get(
      `csl/getCSLDetailByID.php?${new URLSearchParams({ search: payload })}`
    );
  },


  getCSLSummaryByGlobalSearch () {
  },

  // ***********************************Owners********************************

  getOwnersNamesLookup () {
    return AxiosApi.get(
      `owners/getOwnersNamesLookup.php`
    );
  },

  getOwnersSummaryByOwner (payload) {

    return AxiosApi.get(
      `owners/getOwnerSummaryWithOwner.php?${new URLSearchParams({ owner: payload })}`,
    );
  },

  getOwnersSummaryList () {
    return AxiosApi.get(
      `owners/getOwnersSummary.php`
    );
  },

  getOwnersDetailByID (payload) {
    // alert()
    return AxiosApi.get(
      `owners/getOwnersDetailByID.php?${new URLSearchParams({ id: payload })}`,
    );
  },

  getOwnersSummaryByGlobalSearch (payload) {
    return AxiosApi.get(
      `owners/getOwnersSummaryWithGlobalSearch.php?${new URLSearchParams({ search: payload })}`,
    );
  },

  // ***********************************Mills********************************

  // spMillsGetAllSummaryRecords
  NewMillsGetAllSummaryRecords () {
    return AxiosApi.get(
      `mills/NewMillsGetAllSummaryRecords.php`
    );
  },

  getMillsSummaryByProv (payload) {
    return AxiosApi.get(
      `mills/getMillsSummaryWithProv.php?${new URLSearchParams({ prov: payload })}`,
    );
  },

  getMillsLookupVesselNames () {
    return AxiosApi.get(
      'mills/getMillsLookupShipnames.php',
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

  getMillsSummaryWithGlobal (payload) {
    return AxiosApi.get(
      `mills/getMillsSummaryWithGlobal.php?${new URLSearchParams({ exp: payload })}`,
    )
  },

  // Detail Searches start here.
  getMillsDetailByMills (payload) {
    return AxiosApi.get(
      `mills/getMillsDetailWithMillsNum.php?${new URLSearchParams({ mills: payload })}`,
    );
  },

  // ********************************Registry Data Fetches**********************
  getRegistrySummaryList () {
    return AxiosApi.get(
      `registry/getRegistrySummaryList.php`,
    );
  },

  getRegistryDetailedRecordById (payload) {
    // alert()
    return AxiosApi.get(
      `registry/getRegistryDetailsById.php?${new URLSearchParams({ id: payload })}`
    );
  },

  getRegistrySummaryByGlobalSearch (payload) {
    // alert()
    return AxiosApi.get(
      `registry/getRegistrySummaryWithGlobalSearch.php?${new URLSearchParams({ search: payload })}`
    );
  },

  // ********************************Snider Data Fetches**********************
  getSniderDetailsById (payload) {
    // alert('Details by Id')
    return AxiosApi.get(
      `snyder/getSnyderDetailsById.php?${new URLSearchParams({ id: payload })}`
      );
    },


  getSniderSummaryList () {
    // alert('Summary List')
    return AxiosApi.get(
      `snyder/getSnyderSummaryList.php`
    )
  },

  // getSniderArticlesLookUp () {
  //   return AxiosApi.get(
  //     `snider/getSniderArticleLookup.php`
  //   );
  // },



  // getSniderPeopleLookUp () {
  //   return AxiosApi.get(
  //     `snider/getSniderPeopleLookup.php`
  //   )
  // },

  // getSniderShipsLookUp () {
  //   return AxiosApi.get(
  //     `snider/getSniderShipsLookup.php`
  //   )
  // },

  // getSniderSummaryDataByArticle (payload) {
  //   return AxiosApi.get(
  //     `snider/getSniderSummaryWithArticle.php?${new URLSearchParams({ article: payload })}`
  //   )
  // },

  // getSnyderSummaryByGlobalSearch (payload) {
  //   return AxiosApi.get(
  //     `snider/getSniderSummaryWithGlobalSearch.php?${new URLSearchParams({ search: payload })}`
  //   );
  // },

  // getSniderSummaryDataByPeople (payload) {
  //   return AxiosApi.get(
  //     `snider/getSniderSummaryWithPeople.php?${new URLSearchParams({ people: payload })}`
  //   );
  // },


  // getSniderSummaryDataByShip (payload) {
  //   return AxiosApi.get(
  //     `snyders/getSniderSummaryWithShip.php?${new URLSearchParams({ shipname: payload })}`
  //   )
  // },

  // ********************************Walls Fetches**********************

  getWallsLookupVesselNames () {
    return AxiosApi.get(
      `walls/getWallsLookupShipNames.php`
    );
  },

  getWallsImagesPortrait(){
    return AxiosApi.get(
      'walls/getWallsPortrait.php'
    )
  },

  getWallsImagesLandScape(){
    return AxiosApi.get(
      'walls/getWallsLandScape.php'
    )
  },

  getWallsDetailByID (payload) {
    return AxiosApi.get(
      `walls/getWallsDetailsById.php?${new URLSearchParams({ id: payload })}`
    );
  },

  getWallsSummaryInitialLoad () {
    return AxiosApi.get(
      `walls/getWallsSummaryInitialLoad.php`
    );
  },

  getWallsSummaryByShip (payload) {
    return AxiosApi.get(
      `walls/getWallsSummaryWithShipName.php?${new URLSearchParams({ shipname: payload })}`
    );
  },

  getWallsSummaryByYear (payload) {
    return AxiosApi.get(
      `walls/getWallsSummaryWithYear.php?${new URLSearchParams({ year: payload })}`
    );
  },

  getWallsSummaryByProv (payload) {
    return AxiosApi.get(
      `walls/getWallsSummaryWithProv.php?${new URLSearchParams({ prov: payload })}`
    );
  },

  getWallsSummaryByBuilder (payload) {
    return AxiosApi.get(
      `walls/getWallsSummaryWithBuilder.php?${new URLSearchParams({ builder: payload })}`
    );
  },

  getWallsDataByGlobalSearch (payload) {
    return AxiosApi.get(
      `walls/getWallsSummaryWithGlobalSearch.phpn?${new URLSearchParams({ search: payload })}`
    );
  },

  getWallsSummaryByReason (payload) {
    return AxiosApi.get(
      `walls/getWallsSummaryWithReasonForClosing.php?${new URLSearchParams({ reason: payload })}`
    );
  },

};
