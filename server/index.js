const express =  require('express');
const app = express();
const axios = require('axios');
const fs = require('../client/src/fs');

const getAPI = async (params) => {
  const instance = axios.create({
    baseURL : 'http://apis.data.go.kr/B090041/openapi/service/'
  })
  
  let response;

  // try {
      response = await instance(params);
  // } catch (e) {
  //   console.log('뭐냐-----------------');
  // }
  return response;
}

const getLunday = async () => {
  const {year, month, date} = fs.date();
  const path = `LunPhInfoService/getLunPhInfo?`;
  const query = `serviceKey=NKb3XjlkqjPQG%2BBxVkHZkue02%2FZDYlwPGSBlx4zjEx8fTaVoAzdHSjrEVNCTS%2BCmGQCPDKXymHxqRCFgwC%2Bc5w%3D%3D&solYear=${year}&solMonth=${month}&solDay=${date}`;

  const response = getAPI(path + query );
  
  return response;
};
const getLunCycle = async () => {
  const {YMD} = fs.date();
  const path = `RiseSetInfoService/getAreaRiseSetInfo?`;
  const query = `serviceKey=NKb3XjlkqjPQG%2BBxVkHZkue02%2FZDYlwPGSBlx4zjEx8fTaVoAzdHSjrEVNCTS%2BCmGQCPDKXymHxqRCFgwC%2Bc5w%3D%3D&locdate=${YMD}&location=${encodeURI('서울')}`;

  const response = getAPI(path + query);

  return response;
};

app.get("/lun/day", (req,res) => {
  getLunday()
    .then(response => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(response.data.response.body);
    });
  });
app.get("/lun/cycle", (req,res) => {
  getLunCycle()
    .then(response => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(response.data.response.body);
    });
  });

app.listen(3000, () => {
  console.log("server was connected");
});