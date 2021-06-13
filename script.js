const firstElem = document.getElementById("btn");
const secondElem = document.getElementById("btn1");
const thirdElem = document.getElementById("btn2");
const animElem = document.getElementById("btn3");
const infoElem = document.getElementById('info'); 
const infoOne = document.getElementById('info1');
const infoSec = document.getElementById('info2')
const infoThird = document.getElementById('info3');
const pageCounter = 1;

const getData = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "text.txt", true);
  xhr.onload = function () {
    let textData = JSON.stringify(xhr.responseText);
    renderHTMLText(textData);
    if (this.status == 200) {
      console.log("OK", this.responseText, this.status);
    } else {
      console.log("Error", this.responseText);
    }
  };
  xhr.send();
};

const loadUser = () => {
  const userXhr = new XMLHttpRequest();
  userXhr.open("GET", "user.json", true);
  userXhr.onload = function () {
    let newData = JSON.stringify(userXhr.responseText);
    renderHTMLData(newData);
    if (this.status == 200) {
      console.log(newData, this.status)
    }
  };
  userXhr.send();
};

const getApi = () => {
  const apiXhr = new XMLHttpRequest();
  apiXhr.open("GET", "https://api.github.com/users", true);
  apiXhr.onload = function () {
    let dirtyData = JSON.parse(apiXhr.responseText);
    renderHTMLDirty(dirtyData);
    if (this.status == 200) {
      console.log(this.responseText, this.status);
    } else {
      console.log("Error", this.status);
    }
  };
  apiXhr.send();
};

const getAnimals = () => {
  const animXhr = new XMLHttpRequest();
  animXhr.open("GET","https://learnwebcode.github.io/json-example/animals-" + `${pageCounter}` + ".json", true);
  animXhr.onload = function () {
      let data = JSON.parse(animXhr.responseText);
      renderHTMLAnim(data);
      if (this.status == 200) {
        console.log(data)
      } 
  };
  animXhr.send();
};

const renderHTMLAnim = (someData) => {
  str = '';
  for (let i = 0; i < someData.length; i++) {
    str += "<p>" + someData[i].name +  " is a " + someData[i].species;
  }
  infoElem.insertAdjacentHTML('beforeend', str);
} 

const renderHTMLData = (newData) => {
  someStr = '';
  for(let i = 0; i < newData.length; i++) {
    someStr+= newData[i];
  }
  infoOne.insertAdjacentHTML('beforebegin', someStr);
}

const renderHTMLDirty = (Data) => {
  str = '';
  for(let i = 0; i < Data.length; i++) {
    str+= "<p>"+"id: " + Data[i].id + " login: " + Data[i].login;
  }
  infoSec.insertAdjacentHTML('beforebegin', str);
}

const renderHTMLText = (txt) => {
  strr = '';
  for(let i = 0; i < txt.length; i++) {
    strr+= txt[i];
  }
  infoThird.insertAdjacentHTML('beforebegin', strr);
}

firstElem.addEventListener("click", getData);
secondElem.addEventListener("click", loadUser);
thirdElem.addEventListener("click", getApi);
animElem.addEventListener('click', getAnimals);

