# 🌙 달에 관한 정보 제공 앱

## About
문득 달을 관측할 수 있는 시간이 궁금해졌다. 공공데이터 포털에서 관련 api를 제공하는것을 찾았고, 제작하게 되었다. 

- 공공 데이터 포털의 API를 활용하여 월령과 달의 월출, 월중, 월몰 정보를 시각적으로 제공 
- 월령을 기반으로 달의 위상을 이모지로 표현

## Stacks
<p float='left'> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/redux-764abc?style=for-the-badge&logo=redux&logoColor=black">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
</p>

#### Front-End
- React에서 함수형 컴포넌트로 UI 구현
- Redux로 상태관리와 비동기 요청 처리
- SCSS로 스타일 작업

#### Back-end 
- Express로 프록시 서버 구현 

## OverView

<img width="80%" alt="스크린샷 2022-02-05 오후 10 18 09" src="https://user-images.githubusercontent.com/87258182/152643741-6743cf02-1458-470b-9aec-375bf07c4661.png">

## File Setting
src  
┃📂components  
┃┣ 📃App.jsx -> Entry  
┃┣ 📃Client.jsx  
┃┣ 📃Luncycle.jsx  
┃┗ 📃Lunday.jsx  
┃📂redux  
┃┣ 📂actions  
┃┃ ┣ 📃lunCycleAction.js  
┃┃ ┗ 📃lunDayAction.js  
┃┣ 📂reducers  
┃┃ ┗ 📃moonSlice.js  
┃┗ 📃store.js  
┃📂server  
┃┗ 📃index.js  
┃┣📃fs.js  
┃┣📃index.html   
┃📂style  
┃┗ 📃style.scss  
┃📃fs.js  

## 프로젝트 후기 
사실 몇 달 전에 이 프로젝트를 시도했었는데 CORS를 만나고 중단했었다. 그 당시에는 검색을 해도 무슨 말인지 이해할 수 없었다. 불과 몇 달 지나지 않았지만 배경지식이 조금은 쌓여서인지 관련 글들을 읽으며 해결할 수 있었다.