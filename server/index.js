const express =  require('express');
const app = express();
const axios = require('axios');
const fs = require('../src/fs');

const getAPI = async url => {
  let response;
  try {
    response = await axios.get(url);
  } catch (e) {
    console.log(e);
  }
  return response;
}

const getLunday = async () => {
  const {year, month, date} = fs.date();
  const URL = `http://apis.data.go.kr/B090041/openapi/service/LunPhInfoService/getLunPhInfo?serviceKey=NKb3XjlkqjPQG%2BBxVkHZkue02%2FZDYlwPGSBlx4zjEx8fTaVoAzdHSjrEVNCTS%2BCmGQCPDKXymHxqRCFgwC%2Bc5w%3D%3D&solYear=${year}&solMonth=${month}&solDay=${date}`;
  const response = getAPI(URL);
  
  return response;
};
const getLunCycle = async () => {
  const {YMD} = fs.date();
  const URL = `http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo?serviceKey=NKb3XjlkqjPQG%2BBxVkHZkue02%2FZDYlwPGSBlx4zjEx8fTaVoAzdHSjrEVNCTS%2BCmGQCPDKXymHxqRCFgwC%2Bc5w%3D%3D&locdate=${YMD}&location=${encodeURI('서울')}`;
  const response = getAPI(URL);

  return response;
};

app.get("/GET/lun/day", (req,res) => {
  getLunday()
    .then(response => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(response.data.response.body);
    });
  });
app.get("/GET/lun/cycle", (req,res) => {
  getLunCycle()
    .then(response => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(response.data.response.body);
    });
  });

app.listen(3000, () => {
  console.log("server was connected");
});