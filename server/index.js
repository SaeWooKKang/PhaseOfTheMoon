const express =  require('express');
const app = express();
const axios = require('axios');
const fs = require('./fs');
const port = 3000;

const getAPI = async params => {
  const instance = axios.create({
    baseURL : 'http://apis.data.go.kr/B090041/openapi/service/'
  });

  let response = await instance(params);

  return response;
};

const getLunday = async (ms = Date.now()) => {
  const { year, month, date } = fs.date(ms);
  const path = `LunPhInfoService/getLunPhInfo`;
  const query = `?serviceKey=NKb3XjlkqjPQG%2BBxVkHZkue02%2FZDYlwPGSBlx4zjEx8fTaVoAzdHSjrEVNCTS%2BCmGQCPDKXymHxqRCFgwC%2Bc5w%3D%3D&solYear=${year}&solMonth=${month}&solDay=${date}`;

  const response = getAPI(path + query );
  
  return response;
};

const getLunCycle = async (ms = Date.now()) => {
  const { YMD } = fs.date(ms);
  const path = `RiseSetInfoService/getAreaRiseSetInfo`;
  const query = `?serviceKey=NKb3XjlkqjPQG%2BBxVkHZkue02%2FZDYlwPGSBlx4zjEx8fTaVoAzdHSjrEVNCTS%2BCmGQCPDKXymHxqRCFgwC%2Bc5w%3D%3D&locdate=${YMD}&location=${encodeURI('서울')}`;

  const response = getAPI(path + query);

  return response;
};

const getSevenDaysLunCycle = async () => {
  
  const r1 = getLunCycle(Date.now() + 86400000 * 0)
    .then(response => response.data.response.body.items.item);
  const r2 = getLunCycle(Date.now() + 86400000 * 1)
    .then(response => response.data.response.body.items.item);
  const r3 = getLunCycle(Date.now() + 86400000 * 2)
    .then(response => response.data.response.body.items.item);
  const r4 = getLunCycle(Date.now() + 86400000 * 3)
    .then(response => response.data.response.body.items.item);
  const r5 = getLunCycle(Date.now() + 86400000 * 4)
    .then(response => response.data.response.body.items.item);
  const r6 = getLunCycle(Date.now() + 86400000 * 5)
    .then(response => response.data.response.body.items.item);
  const r7 = getLunCycle(Date.now() + 86400000 * 6)
    .then(response => response.data.response.body.items.item);

  const response = Promise.allSettled([r1, r2, r3, r4, r5, r6, r7])
    .then(res => res.map(a => a.value));

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

app.get("/lun/weekly", (req,res) => {
  getSevenDaysLunCycle()
    .then(response => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(response)
    })
});

app.listen(process.env.PORT || port, () => {
  console.log("server was connected");
});