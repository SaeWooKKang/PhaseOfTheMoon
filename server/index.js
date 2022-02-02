const express =  require('express');
const app = express();
const axios = require('axios');
const fs = require('../fs');

const getLunday = async () => {
  const {year, month, date} = fs.date();
  let response;

  try {
    response = await axios.get(
      `http://apis.data.go.kr/B090041/openapi/service/LunPhInfoService/getLunPhInfo?serviceKey=NKb3XjlkqjPQG%2BBxVkHZkue02%2FZDYlwPGSBlx4zjEx8fTaVoAzdHSjrEVNCTS%2BCmGQCPDKXymHxqRCFgwC%2Bc5w%3D%3D&solYear=${year}&solMonth=${month}&solDay=${date}`
    );
  } catch (e) {
    console.log(e);
  }
  return response;
};
const getLunCycle = async () => {
  const {year, month, date} = fs.date();
  const YMD = year + month + date;
  
  let response;
  try {
    response = await axios.get(`http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo?serviceKey=NKb3XjlkqjPQG%2BBxVkHZkue02%2FZDYlwPGSBlx4zjEx8fTaVoAzdHSjrEVNCTS%2BCmGQCPDKXymHxqRCFgwC%2Bc5w%3D%3D&locdate=${YMD}&location=${encodeURI('서울')}`);
  } catch (e) {
    console.log(e);
  }
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