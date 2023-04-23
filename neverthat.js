const contents = [
    {
        summary: "thisisneverthat® <br>  × Public Release", 
        detail:"Public Release는 DJ이자 디자이너로 알려진 Eugene Whang의 레코드 레이블로, 2009년부터 LP, EP, 리믹스 등 27여개의 다양한 음반을 선보여왔습니다. ", 
        date: "02. 08. 2023."
      },

      {
        summary: "thisisneverthat® 2023 Sunglasses Collection", 
        detail:"Available In-store 3/17(Fri.) 12pm KST and Online 3/17(Fri.) 10am KST", 
        date: "03. 14. 2023."
      },   
       {
        summary: "Champion® × thisisneverthat®", 
        detail:"Available 3/24(Fri.) 12pm KST and Online 3/24(Fri.) 10am KST JP In-store and Online 3/24(Fri.) 12pm JST", 
        date: "03. 20. 2023."
      },
      {
        summary: "thisisneverthat® × NO COFFEE™", 
        detail:"2015년 후쿠오카의 작은 카페로 시작한 NO COFFEE는 “Life with good coffee”를 테마로 커피의 라이프 스타일을 제안합니다.NO COFFEE, NO LIFE의 라이프 스타일을 담은 디스이즈네버댓과 노 커피의 캡슐 컬렉션을 만나보세요.", 
        date: "03. 14. 2022"
      },
      {
        summary: "BlackEyePatch × thisisneverthat®", 
        detail:"Available In-store 10/8(Sat) 12pm KST(JST) and Online 10/8(Sat.) 10am KST(JST)", 
        date: "10. 03. 2022"
      },
   

]

const summaryTag = document.querySelector("section.contents h1.summary")
const dateTag = document.querySelector("section.contents h2.date")
const detailTag = document.querySelector("section.contents p")

const mainImg = document.querySelector("figure.images img")

const leftButton = document.querySelector("img.arrow-left")
const rightButton = document.querySelector("img.arrow-right")

let currentNumber = 1;

leftButton.addEventListener("click", function(){
    console.log(currentNumber);

    currentNumber--;
    if(currentNumber < 1){
      currentNumber = 5;
    }

    dateTag.innerHTML = currentNumber;
    mainImg.src = `image${currentNumber}.svg`;

    summaryTag.innerHTML = contents[currentNumber-1].summary;
    detailTag.innerHTML = contents[currentNumber-1].detail;
    dateTag.innerHTML = contents[currentNumber-1].date;
})

rightButton.addEventListener("click", function(){
    console.log(currentNumber);

    currentNumber++;
    if(currentNumber > 5){
      currentNumber = 1;
    }

    dateTag.innerHTML = currentNumber;
    mainImg.src = `image${currentNumber}.svg`;

    summaryTag.innerHTML = contents[currentNumber-1].summary;
    detailTag.innerHTML = contents[currentNumber-1].detail;
    dateTag.innerHTML = contents[currentNumber-1].date;
})