"use strict";

const sc = document.querySelector("#sc");
const mn = document.querySelector("#mn");
const cl = document.querySelector("#cl");
const cBack = document.querySelector("#cyber_back");
const sBack = document.querySelector("#steam_back");
const zagolovok = document.querySelector(".zagolovok");
const cBackCont = document.querySelector(".cyber_back_container");
const sBackCont = document.querySelector(".steam_back_container");
const cyber = document.querySelectorAll(".cyber");
const steem = document.querySelectorAll(".steem");
const present = document.querySelectorAll(".present");
const bt15 = document.querySelector("#bt15");
const bt16 = document.querySelector("#bt16");
const bt17 = document.querySelector("#bt17");
const bt18 = document.querySelector("#bt18");
const bt19 = document.querySelector("#bt19");
const bt20 = document.querySelector("#bt20");
const bt21 = document.querySelector("#bt21");
const bt22 = document.querySelector("#bt22");
const cImg = document.querySelector(".cImage");
const cA = document.querySelector(".cyber_a");
const cAP = document.querySelector(".cyber_a_p");
const cP = document.querySelector(".c_paragraph");
const sImg = document.querySelector(".sImage");
const sA = document.querySelector(".steam_a");
const ggmk = document.querySelector(".ggmk");
const sAP = document.querySelector(".steam_a_p");
const sP = document.querySelector(".s_paragraph");
const lang = document.querySelector(".lang");
const text = document.querySelector(".text");
const li1 = document.querySelector(".li1");
const li2 = document.querySelector(".li2");
const li3 = document.querySelector(".li3");
const tS = document.querySelector(".text_steem");
const tC = document.querySelector(".text_cyber");
const oblast = document.querySelector(".oblast");
const h_footer = document.querySelector(".h_footer");
const pamyatnik1s = document.querySelector(".pamyatnik1>span");
const pamyatnik2s = document.querySelector(".pamyatnik2>span");
const pamyatnik3s = document.querySelector(".pamyatnik3>span");
const pamyatnik4s = document.querySelector(".pamyatnik4>span");
const pamyatnik5s = document.querySelector(".pamyatnik5>span");
const pamyatnik6s = document.querySelector(".pamyatnik6>span");
const pamyatnik7s = document.querySelector(".pamyatnik7>span");
const pamyatnik8s = document.querySelector(".pamyatnik8>span");
const pamyatnik9s = document.querySelector(".pamyatnik9>span");
const pamyatnik10s = document.querySelector(".pamyatnik10>span");
const pamyatnik11s = document.querySelector(".pamyatnik11>span");
const pamyatnik12s = document.querySelector(".pamyatnik12>span");
const pamyatnik13s = document.querySelector(".pamyatnik13>span");
const pamyatnik14s = document.querySelector(".pamyatnik14>span");
const pamyatnik15s = document.querySelector(".pamyatnik15>span");
const pamyatnik16s = document.querySelector(".pamyatnik16>span");
const pamyatnik17s = document.querySelector(".pamyatnik17>span");
const pamyatnik18s = document.querySelector(".pamyatnik18>span");
const pamyatnik19s = document.querySelector(".pamyatnik19>span");
const pamyatnik20s = document.querySelector(".pamyatnik20>span");
const pamyatnik21s = document.querySelector(".pamyatnik21>span");
const pamyatnik22s = document.querySelector(".pamyatnik22>span");
const pamyatnik23s = document.querySelector(".pamyatnik23>span");
const pamyatnik24s = document.querySelector(".pamyatnik24>span");
const pamyatnik1 = document.querySelector(".pamyatnik1");
const youtubemodal = document.querySelector(".youtubemodal");
const pamyatnik2 = document.querySelector(".pamyatnik2");
const pamyatnik3 = document.querySelector(".pamyatnik3");
const pamyatnik4 = document.querySelector(".pamyatnik4");
const pamyatnik5 = document.querySelector(".pamyatnik5");
const pamyatnik6 = document.querySelector(".pamyatnik6");
const pamyatnik7 = document.querySelector(".pamyatnik7");
const pamyatnik8 = document.querySelector(".pamyatnik8");
const pamyatnik9 = document.querySelector(".pamyatnik9");
const pamyatnik10 = document.querySelector(".pamyatnik10");
const pamyatnik11 = document.querySelector(".pamyatnik11");
const pamyatnik12 = document.querySelector(".pamyatnik12");
const pamyatnik13 = document.querySelector(".pamyatnik13");
const pamyatnik14 = document.querySelector(".pamyatnik14");
const pamyatnik15 = document.querySelector(".pamyatnik15");
const pamyatnik16 = document.querySelector(".pamyatnik16");
const pamyatnik17 = document.querySelector(".pamyatnik17");
const pamyatnik18 = document.querySelector(".pamyatnik18");
const pamyatnik19 = document.querySelector(".pamyatnik19");
const pamyatnik20 = document.querySelector(".pamyatnik20");
const pamyatnik21 = document.querySelector(".pamyatnik21");
const pamyatnik22 = document.querySelector(".pamyatnik22");
const pamyatnik23 = document.querySelector(".pamyatnik23");
const pamyatnik24 = document.querySelector(".pamyatnik24");
const pamyatnik25 = document.querySelector(".pamyatnik25");
const pamyatnik26 = document.querySelector(".pamyatnik26");
const pamyatnik27 = document.querySelector(".pamyatnik27");
const pamyatnik28 = document.querySelector(".pamyatnik28");
const clCyber = document.querySelector(".clock_cyber");
const clSteam = document.querySelector(".clock_steam");
const clPresent = document.querySelector(".clock_present");
const clCenter = document.querySelector(".clock_center");
const t1 = document.querySelector(".title1");
const t2 = document.querySelector(".title2");
const vern = document.querySelectorAll(".vern");
const oC = document.querySelector(".oblast_cyber");
const wrap = document.querySelector(".wrapper");
const hero = document.querySelector(".hero");
const modal_text = document.querySelector(".modal_text>p");
const nameHero = document.querySelector(".nameHero");
const lifeTime = document.querySelector(".lifeTime");
const modal = document.getElementById("myModal");
let modal_content = document.querySelector(".modal-content");
const footerr = document.querySelector(".o_nas");
let StateNumber = 0;
let slider = document.querySelector(".slider");
const huian = document.querySelector(".close");
const cHuian = document.querySelector(".cClose");
const monument_modal = document.querySelector(".monument_modal");
let isPrompt = false;
let cyber_title = document.querySelectorAll(".cyber_title");
let steam_title = document.querySelectorAll(".steem_title");
const images = document.querySelectorAll(".slider img");
let modal_arrows = document.querySelector(".modal_arrows");
let modal_arrows_past_next = document.querySelector(".modal_arrows_past_next");
let modal_arrows_past_back = document.querySelector(".modal_arrows_past_back");
let currentIndex = 0;
let isRealHero = false;
let realHeroPath = "";
let futureHeroPath = "";
let sound = "";
const changeCentryBtn1 = document.querySelector(".changeCentry1");
const changeCentryBtn2 = document.querySelector(".changeCentry2");
let currentOblast = "";
const HeroDate = document.querySelector("lifeTime");
let reference = document.querySelector(".reference");
let content;
let contentIndex = 0;

function showCategory(categoryToShow, e) {
  const allItems = document.querySelectorAll(".gallery_pamyatnik");
  
  document.querySelectorAll(".filter>button").forEach((el) => {
    el.classList.add("filter_btn");
    el.classList.remove("filter_btn_active");
  });
  e.target.classList.remove("filter_btn");
  e.target.classList.add("filter_btn_active");

  allItems.forEach((item) => {
    if (item.classList.contains(categoryToShow)) {
      item.style.transition = "opacity 1.5s ease-in-out, visibility 0s linear 0.3s";
      item.style.opacity = "1";
      item.style.visibility = "visible";
    } else {
      item.style.transition = "opacity 0.3s ease, visibility 0s linear 0s";
      item.style.opacity = "0";
      item.style.visibility = "hidden";
    }
  });
}

let isVidio = false;
function showAllCategories(e) {
  const categories = {
    science: document.querySelectorAll(".science"),
    med: document.querySelectorAll(".med"),
    war: document.querySelectorAll(".war"),
    econom: document.querySelectorAll(".econom"),
    sport: document.querySelectorAll(".sport"),
    heroes: document.querySelectorAll(".heroes"),
  };

  document.querySelectorAll(".filter>button").forEach((el) => {
    el.classList.add("filter_btn");
    el.classList.remove("filter_btn_active");
  });
  e.target.classList.remove("filter_btn");
  e.target.classList.add("filter_btn_active");
  for (const category in categories) {
    categories[category].forEach((item) => {
      item.style.visibility = "visible";
      item.style.transition = "opacity 0.3s ease, visibility 0s linear 0s";
      item.style.opacity = "1";
    });
  }
}

document.querySelector(".steem_title").addEventListener("click", () => {
  StateNumber = 3;
  clCenter.style.display = "none";
  clCyber.style.display = "block";
  clSteam.style.display = "block";
  cl.click();
});
document.querySelector(".cyber_title").addEventListener("click", () => {
  StateNumber = 3;
  clCenter.style.display = "none";
  clCyber.style.display = "block";
  clSteam.style.display = "block";
  cl.click();
});
document.querySelector(".pClose").addEventListener("click", () => {
  modalPast.style.display = "none";
  monumentVidio.style.display = "none";
  isVidio = false;
  monument.style.display = "block";
});
document.querySelectorAll(".scienceb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("science", e));
});

document.querySelectorAll(".medb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("med", e));
});

document.querySelectorAll(".warb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("war", e));
});

document.querySelectorAll(".economb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("econom", e));
});

document.querySelectorAll(".sportb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("sport", e));
});

document.querySelectorAll(".heroesb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("heroes", e));
});

// Назначение обработчика для кнопки Show All
document.querySelectorAll(".showAll").forEach((button) => {
  button.addEventListener("click", (el) => showAllCategories(el));
});

function setActiveMicro(switch1) {
  if (switch1) {
    document.querySelector(".micro").src = "./img/micro_active.png";
  } else {
    document.querySelector(".micro").src = "./img/micro.png";
  }
}

isVidio = false;
function checkSlideType() {
  if (content[contentIndex].type == "vidio") {
    monument.style.display = "none";
    monumentVidio.style.display = "block";
    monumentVidio.src = content[contentIndex].reference;
  }
  if (content[contentIndex].type == "image") {
    monument.style.display = "block";
    monumentVidio.style.display = "none";
    monument.src = content[contentIndex].reference;
  }
}
function changeMonumnentImageNext() {
  contentIndex += 1;
  if (contentIndex >= content.length) {
    contentIndex = 0;
  }
  checkSlideType();
}

function changeMonumnentImageBack() {
  contentIndex -= 1;
  if (contentIndex < 0) {
    contentIndex = content.length - 1;
  }
  if (content[contentIndex].type == "vidio") {
    monument.style.display = "none";
    monumentVidio.style.display = "block";
    monumentVidio.src = content[contentIndex].reference;
  }
  if (content[contentIndex].type == "image") {
    monument.style.display = "block";
    monumentVidio.style.display = "none";
    monument.src = content[contentIndex].reference;
  }
  checkSlideType();
}
function changeHeroImage() {
  if (isRealHero) {
    modal_arrows.style.transform = "rotate(0deg)";
    hero.src = futureHeroPath;
  } else {
    modal_arrows.style.transform = "rotate(180deg)";
    hero.src = realHeroPath;
  }
  isRealHero = !isRealHero;
}

function showImage(index) {
  images[currentIndex].classList.remove("active");
  images[index].classList.add("active");
  currentIndex = index;
}

document.querySelector(".slider").addEventListener("click", function (event) {
  if (event.target.classList.contains("prev")) {
    let index = currentIndex - 1;
    if (index < 0) {
      index = images.length - 1;
    }
    showImage(index);
  } else if (event.target.classList.contains("next")) {
    let index = currentIndex + 1;
    if (index >= images.length) {
      index = 0;
    }
    showImage(index);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    modal.style.display = "none";
    isRealHero = false;
    setActiveMicro(false);
    modal_arrows.style.transform = "rotate(0deg)";
    window.speechSynthesis.cancel();
  }
  if (e.key == 2) {
    StateNumber = 3;
    clCenter.style.display = "none";
    clCyber.style.display = "block";
    clSteam.style.display = "block";
    cl.click();
  }
  if (e.key == 1) {
    StateNumber = 2;
    clCenter.style.display = "block";
    clCyber.style.display = "none";
    clSteam.style.display = "none";
    cl.click();
  }
  if (e.key == 3) {
    StateNumber = 1;
    clCenter.style.display = "block";
    clCyber.style.display = "none";
    clSteam.style.display = "none";
    cl.click();
  }
  if (e.key == 4) {
    StateNumber = 4;
    clCenter.style.display = "none";
    clCyber.style.display = "none";
    clSteam.style.display = "none";
    clPresent.style.display = "block";

    setPresent();
  }
});

showImage(currentIndex);

function setModal(text, label, img1, img2, heroSound) {
  if (isPrompt == false) {
    futureHeroPath = img1;
    realHeroPath = img2;
    modal.style.display = "flex";
    slider.style.display = "none";
    modal_text.innerHTML = text;
    nameHero.innerHTML = label;
    modal_content.style.visibility = "visible";
    hero.src = futureHeroPath;
    sound = heroSound;
  } else {
    modal.style.display = "block";
    slider.style.display = "block";
    modal_content.style.visibility = "hidden";
    isPrompt = false;
  }
}

function promptModal() {
  isPrompt = true;
  setModal("", "", "", "", "");
}

huian.addEventListener("click", () => {
  modal.style.display = "none";
  modalPast.style.display = "none";
  isVidio = false;
  monumentVidio.style.display = "none";
  monument.style.display = "block";
  isRealHero = false;
  modal_arrows.style.transform = "rotate(0deg)";
});

cHuian.addEventListener("click", () => {
  modal.style.display = "none";
  modalPast.style.display = "none";
  isVidio = false;
  monumentVidio.style.display = "none";
  monument.style.display = "block";
  window.speechSynthesis.cancel();
});

window.onclick = function (event) {
  if (event.target == modal || event.target == modalPast) {
    window.speechSynthesis.cancel();
    setActiveMicro(false);
    modal.style.display = "none";
    modalPast.style.display = "none";
    isVidio = false;
    monumentVidio.style.display = "none";
    monument.style.display = "block";
    modal_arrows.style.transform = "rotate(0deg)";
  }
};

let rotated = false; // Флаг для чередования состояpamyatnik1Span = document.queяySelectorа".pamний
let langChange = false; //изменение языка
let lastSteamButton = bt15; //последняя нажатая кнопка(прошлое)
let refType = 1;
let refTypeS = 1;

function clearMonuments() {
  for (let i of document.querySelectorAll(".pamyatnik")) {
    i.style.display = "none";
  }
}

function hideImages() {
  pamyatnik1.style.opacity = "0";
  pamyatnik2.style.opacity = "0";
  pamyatnik3.style.opacity = "0";
}

function showImages() {
  pamyatnik1.style.opacity = "100";
  pamyatnik2.style.opacity = "100";
  pamyatnik3.style.opacity = "100";
  pamyatnik1.style.transition = "all 0.75s ease-in";
  pamyatnik2.style.transition = "all 0.75s ease-in";
  pamyatnik3.style.transition = "all 0.75s ease-in";
}

function restartAnimation() {
  const el = document.querySelector(".title1");
  const el2 = document.querySelector(".title2");
  const el3 = document.querySelector(".text");
  el.classList.remove("animated");
  el2.classList.remove("animated");
  el3.classList.remove("animated1");
  void el.offsetWidth;
  void el2.offsetWidth;
  void el3.offsetWidth;
  el.classList.add("animated");
  el2.classList.add("animated");
  el3.classList.add("animated1");
  if (langChange) {
    setTimeout(() => {
      el3.style.left = "51%";
    }, 50);
  } else {
    el3.style.left = "50%";
  }
}

lang.addEventListener("click", () => {
  if (!langChange) {
    lang.innerHTML = 'BY <img class="" src="./img/globus.png"/>';
  } else {
    lang.innerHTML = 'RU <img class="" src="./img/globus.png"/>';
  }
  ggmk.src = "./img/ggmk.png";
  langChange = !langChange;

  if (!langChange) {
    for (let i of vern) {
      i.innerHTML = "Нажмите, чтобы вернуться";
    }
    text.innerHTML = "Нажмите, чтобы начать";
    bt16.innerHTML = "Гомельская область";
    bt15.innerHTML = "Минская область";
    bt19.innerHTML = "Бресткая область";
    bt20.innerHTML = "Могилевская область";
    bt21.innerHTML = "Витебская область";
    bt22.innerHTML = "Гродненнская область";
    h_footer.innerHTML = "Как связаться с нами?";
    li3.innerHTML = "Номер телефона: 8 (0232) 50-12-73";
    li2.innerHTML = "Адрес: г. Гомель, ул. Объездная, 2";
    pamyatnik1s.innerHTML = 'Мемориальный <br />комплекс<br/>"Хатынь"';
    pamyatnik2s.innerHTML = "курган славы";
    pamyatnik3s.innerHTML = "Мемориальный <br/>косплекс<br />Шталаг 342";
    pamyatnik4s.innerHTML = 'Мемориал<br/>"Яма"';
    pamyatnik5s.innerHTML = "Мемориал <br/>вечный огонь";
    pamyatnik6s.innerHTML = "Памятник <br />ополченцам-подпольщикам";
    pamyatnik7s.innerHTML = "Памятник узникам <br />концлагеря";
    pamyatnik8s.innerHTML = "Памятник войнам<br />освободителям";
    pamyatnik9s.innerHTML = "Памятник<br />жертвам <br />холокоста";
    pamyatnik10s.innerHTML =
      "Мемориальный комплекс <br />осводбодителям пинска";
    pamyatnik11s.innerHTML = "Монумент<br />с танком";
    pamyatnik12s.innerHTML = "Памятный знак в память об ...";
    pamyatnik13s.innerHTML =
      "Памятник-танк<br />на могиле генерала <br />Б.С.Бахарова";
    pamyatnik14s.innerHTML =
      "Памятник<br />воинам<br />-интернационалист-<br />ам";
    pamyatnik15s.innerHTML = "Памятник битве при лесной";
    pamyatnik17s.innerHTML = "Курган славы";
    pamyatnik18s.innerHTML = "Памятник десантникам";
    pamyatnik19s.innerHTML = "Мемориальный комплекс<br/> в честь советских ...";
    pamyatnik20s.innerHTML = 'Мемориальный комплекс <br />"Прорыв"';
    pamyatnik21s.innerHTML = "Памятник Памяти <br />Узников Гетто";
    pamyatnik22s.innerHTML =
      "Памятник Учителям и Ученикам - <br />Погибшим В Годы Великой Отечественной Войны";
    pamyatnik23s.innerHTML = "Братская могила советских ...";
    // pamyatnik24s.innerHTML = "комплекс <br />холокоста";
    if (StateNumber == 1) {
      t2.innerHTML = "Память о прошлом";
    } else if (StateNumber == 0 || StateNumber == 3) {
      t2.innerHTML = "Параллели времени";
      t1.innerHTML = "Интерактивные часы";
    } else {
      t2.innerHTML = "Взгляд в будущее";
    }

    document.querySelector(".scienceb").innerHTML = "НАУКА";
    document.querySelector(".medb").innerHTML = "МЕДИЦИНА";
    document.querySelector(".warb").innerHTML = "АРМИЯ";
    document.querySelector(".economb").innerHTML = "ЭКОНОМИКА";
    document.querySelector(".sportb").innerHTML = "СПОРТ";
    document.querySelector(".heroesb").innerHTML = "герои беларуси";
    document.querySelector(".showAll").innerHTML = "ПОКАЗАТЬ ВСЕ";
  } else {
    for (let i of vern) {
      i.innerHTML = "Націсніце, каб вярнуцца";
    }
    text.innerHTML = "Націсніце, каб пачаць";
    bt16.innerHTML = "Гомельская вобласць";
    bt15.innerHTML = "Мінская вобласць";
    bt19.innerHTML = "Брэсцкая вобласць";
    bt20.innerHTML = "Магілёўская вобласць";
    bt21.innerHTML = "Віцебская вобласць";
    bt22.innerHTML = "Гродзенская вобласць";
    h_footer.innerHTML = "Як звязацца з намі?";
    li3.innerHTML = "Нумар тэлефона: 8 (0232) 50-12-73";
    li2.innerHTML = "Адрас: г. Гомель, вул. Аб'язная, 2";
    pamyatnik1s.innerHTML = 'Мемарыяльны<br/> комплекс <br/>"Хатынь"';
    pamyatnik2s.innerHTML = "Курган славы";
    pamyatnik3s.innerHTML = "Мемарыяльны <br/>комплекс<br />Шталаг 342";
    pamyatnik4s.innerHTML = 'Мемарыял<br />"Яма"';
    pamyatnik5s.innerHTML = "Мемарыял <br/>вечны агонь";
    pamyatnik6s.innerHTML = "Помнік апалчэнцам<br/>-падпольшчыкам";
    pamyatnik7s.innerHTML = "Помнік<br/> вязням<br/> канцлагера";
    pamyatnik8s.innerHTML = "Помнік войнам<br />вызваліцелям";
    pamyatnik9s.innerHTML = "Помнік<br />ахвярам<br />халакоста";
    pamyatnik10s.innerHTML =
      "Мемарыяльны комплекс <br />азвадбадзіцелям Пінска";
    pamyatnik11s.innerHTML = "Манумент<br />з танкам";
    pamyatnik12s.innerHTML = "Памятны знак у памяць аб ...";
    pamyatnik13s.innerHTML =
      "Помнік-танк<br />на магіле генерала <br />Б.С.Бахарава";
    pamyatnik14s.innerHTML =
      "Помнік<br />воінам<br />-інтэрнацыяналіст-<br />ам";
    pamyatnik15s.innerHTML = "Помнік бітве пры лясной";
    ggmk.src = "./img/ggmk_bel.png";
    pamyatnik17s.innerHTML = "Курган <br/>славы";
    pamyatnik18s.innerHTML = "Помнік дэсантнікам";
    pamyatnik19s.innerHTML = "Мемарыяльны комплекс<br/> у гонар савецкіх ...";
    pamyatnik20s.innerHTML = 'Мемарыяльны комплекс <br />"Прарыў"';
    pamyatnik21s.innerHTML = "Помнік Памяці <br/>Вязняў Гета";
    pamyatnik22s.innerHTML =
      "Помнік настаўнікам і вучням -<br/>загінуўшым у гады Вялікай Айчыннай вайны";
    pamyatnik23s.innerHTML = "Брацкая магіла савецкіх ...";
    // pamyatnik24s.innerHTML = "Комплекс <br />халакоста";
    if (StateNumber == 1) {
      t2.innerHTML = "Памяць аб мінулым";
    } else if (StateNumber == 0 || StateNumber == 3) {
      t2.innerHTML = "Паралелі часу";
      t1.innerHTML = "Інтэрактыўны гадзіннік";
    } else {
      t2.innerHTML = "Погляд у будучыню";
    }

    document.querySelector(".scienceb").innerHTML = "НАВУКА";
    document.querySelector(".medb").innerHTML = "МЕДЫЦЫНА";
    document.querySelector(".warb").innerHTML = "АРМІЯ";
    document.querySelector(".economb").innerHTML = "ЭКАНОМІКА";
    document.querySelector(".sportb").innerHTML = "СПОРТ";
    document.querySelector(".heroesb").innerHTML = "Героі Беларусі";
    document.querySelector(".showAll").innerHTML = "ПАКАЗАЦЬ УСЕ";
  }
  lastSteamButton.click();
  restartAnimation();
});

// Функция для управления отображением элементов
function toggleVisibility(elements, isVisible) {
  elements.forEach((el) => {
    el.style.visibility = isVisible ? "visible" : "hidden";
    el.style.zIndex = isVisible ? 999 : 0;
    el.style.opacity = isVisible ? "0.8" : "0";
  });
}

// Обработчики событий
clSteam.addEventListener("click", () => {
  StateNumber = 1;
  clCenter.style.display = "block";
  clCyber.style.display = "none";
  clSteam.style.display = "none";
  clPresent.style.display = "none";
  cl.click();
});

clCyber.addEventListener("click", () => {
  StateNumber = 2;
  clCenter.style.display = "block";
  clCyber.style.display = "none";
  clSteam.style.display = "none";
  clPresent.style.display = "none";
  cl.click();
});
clPresent.addEventListener("click", () => {
  StateNumber = 4;
  clCenter.style.display = "block";
  clCyber.style.display = "none";
  clSteam.style.display = "none";
  clPresent.style.display = "none";
  setPresent();
  cl.click();
});
clCenter.addEventListener("click", () => {
  StateNumber = 3;
  clCenter.style.display = "none";
  clCyber.style.display = "block";
  clSteam.style.display = "block";
  clPresent.style.display = "block";
  cl.click();
});
function setSteem() {
  let m = 0 + Math.random() * 110;
  let s = 0 + Math.random() * 110;
  sBackCont.style.flex = 1;
  cBackCont.style.flex = 0;
  sc.style.transform = `rotate(${s}deg)`;
  mn.style.transform = `rotate(${m}deg)`;
  t1.style.display = "inline";
  toggleVisibility(cyber, false);
  toggleVisibility(steem, true);
  toggleVisibility(present, false);
  sBack.src = "img/sBack.png";
  zagolovok.style.backgroundImage = "url(./style/szagolovok.png)";
  footerr.style.backgroundImage = "url(./style/sfoot.png)";
  t2.innerHTML = langChange ? "Памяць аб мінулым" : "Память о прошлом";
  text.style.display = "none";
  document.querySelector(".clock").style.marginLeft = "10%";
}
function setCyber() {
  t1.style.display = "inline";
  sBackCont.style.flex = 0;
  cBackCont.style.flex = 1;
  toggleVisibility(cyber, true);
  toggleVisibility(steem, false);
  toggleVisibility(present, false);

  cBack.src = "img/future_phone.png";
  let m = 250 + Math.random() * 110;
  let s = 250 + Math.random() * 110;
  sc.style.transform = `rotate(${s}deg)`;
  mn.style.transform = `rotate(${m}deg)`;
  zagolovok.style.backgroundImage = "url(./img/cyber_header.png)";
  footerr.style.backgroundImage = "url(./img/cyber_footer.png)";
  t2.innerHTML = langChange ? "Погляд у будучыню" : "Взгляд в будущее";
  document.querySelector(".clock").style.marginLeft = "calc(90% - 250px)";
  text.style.display = "none";
}
function setPresent() {
  sBackCont.style.flex = 0;
  cBackCont.style.flex = 1;
  t1.style.display = "inline";
  toggleVisibility(cyber, false);
  toggleVisibility(steem, false);
  toggleVisibility(present, true);
  document.querySelector(".clock").style.marginLeft = "calc(48% - 125px)";
  cBack.src = "img/present_phone.png";
  let m = 120 + Math.random() * 110;
  let s = 120 + Math.random() * 110;
  sc.style.transform = `rotate(${s}deg)`;
  mn.style.transform = `rotate(${m}deg)`;
  zagolovok.style.backgroundImage = "url(./img/present_header.png)";
  footerr.style.backgroundImage = "url(./img/present_footer.png)";
  t1.style.display = "none";
  t2.innerHTML = langChange ? "Рэха сапраўднага" : "Эхо настоящего";

  text.style.display = "none";
}
function setCenter() {
  zagolovok.style.backgroundImage = "url(style/header_image.png)";
  sc.style.transform = `rotate(0deg)`;
  mn.style.transform = `rotate(0deg)`;
  t1.style.visibility = "visible";
  t1.style.display = "inline";
  t1.innerHTML = langChange ? "Інтэрактыўны гадзіннік" : "Интерактивные часы";
  t2.innerHTML = langChange ? "Паралелі часу" : "Параллели времени";
  cBack.src = "img/centralbackground.png";
  sBack.src = "img/centralbackground.png";
  footerr.style.backgroundImage = "none";

  toggleVisibility(cyber, false);
  toggleVisibility(steem, false);
  toggleVisibility(present, false);
  document.querySelector(".clock").style.marginLeft = "calc(48% - 125px)";
  setTimeout(() => {
    text.style.display = "block";
  }, 10);
}
cl.addEventListener("click", (e) => {
  let m, s;
  t1.innerHTML = "<span style='visibility:hidden'>fds</span>";
  switch (StateNumber) {
    case 1:
      setSteem();
      break;

    case 2:
      setCyber();
      break;

    case 3:
      setCenter();
      break;

    case 4:
      setPresent();
      break;
  }
  // Анимация стрелок
  sc.style.transform = `rotate(${s}deg)`;
  mn.style.transform = `rotate(${m}deg)`;
});

function setActiveSteemButton(e) {
  document.querySelectorAll(".sButton>button").forEach((el) => {
    el.classList.add("sButton_attachment");
    el.classList.remove("sButton_attachment_active");
  });
  e.classList.add("sButton_attachment_active");
}

bt15.addEventListener("click", () => {
  setActiveSteemButton(bt15);
  oblast.style.backgroundImage = "url(./style/минская.png)";
  if (langChange) {
    sAP.innerHTML = "Мінская вобласць";
  } else {
    sAP.innerHTML = "Минская область";
  }
  if (!langChange) {
    sImg.src = "./img/allBelarusMinsk.png";
  } else {
    sImg.src = "./img/allBelarusMinsk_bel.png";
  }

  if (lastSteamButton != bt15) {
    clearMonuments();
    pamyatnik1.style.display = "inline-block";
    pamyatnik2.style.display = "inline-block";
    pamyatnik3.style.display = "inline-block";
    pamyatnik4.style.display = "inline-block";
  }
  lastSteamButton = bt15;
  currentArea = "area1";
});

bt16.addEventListener("click", () => {
  setActiveSteemButton(bt16);
  oblast.style.backgroundImage = "url(./style/гомельская.png)";

  if (langChange) {
    sAP.innerHTML = "Гомельская вобласць";
  } else {
    sAP.innerHTML = "Гомельская область";
  }
  if (!langChange) {
    sImg.src = "img/allBelarusHomel.png";
  } else {
    sImg.src = "img/allBelarusHomel_bel.png";
  }

  if (lastSteamButton != bt16) {
    clearMonuments();
    pamyatnik5.style.display = "inline-block";
    pamyatnik6.style.display = "inline-block";
    // pamyatnik11.style.display = "inline-block";
    pamyatnik7.style.display = "inline-block";
    pamyatnik8.style.display = "inline-block";
    pamyatnik25.style.display = "inline-block";
  }
  lastSteamButton = bt16;
  currentArea = "area2";
});

bt19.addEventListener("click", () => {
  setActiveSteemButton(bt19);
  if (langChange) {
    sAP.innerHTML = "Брэсцкая вобласць";
  } else {
    sAP.innerHTML = "Брестская область";
  }

  if (!langChange) {
    sImg.src = "./img/allBelarusBrest.png";
  } else {
    sImg.src = "./img/allBelarusBrest_bel.png";
  }
  oblast.style.backgroundImage = "url(./style/брестская.png)";

  if (lastSteamButton != bt19) {
    clearMonuments();
    pamyatnik9.style.display = "inline-block";
    pamyatnik10.style.display = "inline-block";

    pamyatnik12.style.display = "inline-block";
    pamyatnik28.style.display = "inline-block";
  }
  lastSteamButton = bt19;
  currentArea = "area3";
});

bt20.addEventListener("click", () => {
  setActiveSteemButton(bt20);
  oblast.style.backgroundImage = "url(./style/могилёвская.png)";
  if (langChange) {
    sAP.innerHTML = "Магілёўская вобласць";
  } else {
    sAP.innerHTML = "Могилёвская область";
  }
  if (!langChange) {
    sImg.src = "./img/allBelarusMogilev.png";
  } else {
    sImg.src = "./img/allBelarusMogilev_bel.png";
  }

  if (lastSteamButton != bt20) {
    clearMonuments();
    pamyatnik13.style.display = "inline-block";
    pamyatnik14.style.display = "inline-block";
    pamyatnik15.style.display = "inline-block";
    pamyatnik27.style.display = "inline-block";
  }
  lastSteamButton = bt20;
  currentArea = "area4";
});

bt21.addEventListener("click", () => {
  setActiveSteemButton(bt21);
  oblast.style.backgroundImage = "url(./style/витебская.png)";
  if (langChange) {
    sAP.innerHTML = "Віцебская вобласць";
  } else {
    sAP.innerHTML = "Витебская область";
  }
  if (!langChange) {
    sImg.src = "./img/allBelarusVitebsk.png";
  } else {
    sImg.src = "./img/allBelarusVitebsk_bel.png";
  }

  if (lastSteamButton != bt21) {
    clearMonuments();
    pamyatnik17.style.display = "inline-block";
    pamyatnik18.style.display = "inline-block";
    pamyatnik19.style.display = "inline-block";
    pamyatnik20.style.display = "inline-block";
  }
  lastSteamButton = bt21;
  currentArea = "area5";
});

bt22.addEventListener("click", () => {
  setActiveSteemButton(bt22);
  oblast.style.backgroundImage = "url(./style/гродненская.png)";
  if (langChange) {
    sAP.innerHTML = "Гродзенская вобласць";
  } else {
    sAP.innerHTML = "Гродненская область";
  }
  if (!langChange) {
    sImg.src = "./img/allBelarusGrodno.png";
  } else {
    sImg.src = "./img/allBelarusGrodno_bel.png";
  }

  if (lastSteamButton != bt22) {
    clearMonuments();
    pamyatnik21.style.display = "inline-block";
    pamyatnik22.style.display = "inline-block";
    pamyatnik23.style.display = "inline-block";
    // pamyatnik24.style.display = "inline-block";
  }
  lastSteamButton = bt22;
  currentArea = "area6";
});

//смена веков
let centryNumber = 20;
let currentArea = "area1";
const centry = document.querySelector(".centry");
const pamyatniks = document.querySelectorAll(".pamyatnik");

//памятники для будущего
function setHero(id, arrows) {
  reference.style.display = "none";
  fetch("heroes.json")
    .then((response) => response.json())
    .then((data) => {
      const heroData = data[id];

      if (!heroData) {
        console.error(`Герой с именем ${id} не найден в JSON`);
        return;
      }

      futureHeroPath = heroData.imgCyber;
      realHeroPath = heroData.imgReal;
      modal.style.display = "block";
      slider.style.display = "none";
      lifeTime.innerHTML = heroData.lifeTimeRu;

      if (arrows == false) {
        modal_arrows.style.display = "none";
      } else {
        modal_arrows.style.display = "block";
      }

      if (!langChange) {
        modal_text.innerHTML = heroData.textRu;
        nameHero.innerHTML = heroData.nameRu;
      } else {
        modal_text.innerHTML = heroData.textBY;
        nameHero.innerHTML = heroData.nameBy;
      }
      if (heroData.haveVidio) {
        reference.style.display = "block";
        reference.href = heroData.haveVidio;
      }

      modal_content.style.visibility = "visible";
      hero.src = heroData.imgCyber;
      sound = heroData.sound;
    })
    .catch((error) => console.error("Ошибка загрузки JSON:", error));
}

class HeroMark {
  constructor(id, name, imag, filter, x, y, arrows) {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.imag = imag;
    this.filter = filter;
    this.minLeft = 20;
    this.minTop = 10;
    this.maxLeft = 70;
    this.maxTop = 80;
    this.arrows = arrows;
    this.spawn = this.spawn.bind(this);
  }

  spawn() {
    const div = document.createElement("div");
    div.style.position = `absolute`;
    const dLeft = this.maxLeft - this.minLeft;
    const dTop = this.maxTop - this.minTop;
    div.style.left = `${this.x}%`;
    div.style.top = `${this.y}%`;
    div.classList.add("gallery_pamyatnik");
    if (Array.isArray(this.filter)) {
      this.filter.forEach((element) => {
        div.classList.add(element);
      });
    } else if (typeof this.filter === "string") {
      div.classList.add(this.filter);
    }

    div.title = this.name;
    div.innerHTML = `<img src="${this.imag}" alt="${this.name}"/>`;
    oC.appendChild(div);
    if (this.arrows == false) {
      console.log(this.arrows);
    }
    div.onclick = () => setHero(this.id, this.arrows);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("heroes.json")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 1; i <= Object.keys(data).length; i++) {
        var mark = new HeroMark(
          i,
          data[i].nameRu,
          data[i].imgCyber,
          data[i].filter,
          data[i].x,
          data[i].y,
          data[i].arrows
        );
        mark.spawn();
      }
    })
    .catch((error) => console.error("Ошибка загрузки JSON:", error));
});

//озвучка
const modal_text_p = document.querySelector("#modal_text_p");
const speak = document.getElementById("micro");

speak.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  setActiveMicro(true);
  const utterance = new SpeechSynthesisUtterance(modal_text_p.innerHTML);
  window.speechSynthesis.speak(utterance);
});

//прошлое
const monument = document.querySelector(".monument-modal");
const monumentVidio = document.querySelector(".monument-modal-vidio");
const modal_text_past = document.querySelector(".modal_text_past>p");
const nameMonument = document.querySelector(".nameMonument");
const modalPast = document.getElementById("myModalPast");
let modal_content_past = document.querySelector(".modal-content-past");
const pam = document.querySelectorAll(".pamyatnik");

//модалка для прошлого
function setPastModal(text, label, data, p) {
  if (isPrompt == false) {
    content = data.content;
    console.log(content);

    if (!content) {
      console.error("данные об памятнике " + p + " отсутствуют");
      return;
    }
    if (content.length > 1) {
      if (data.content[0].type == "vidio") {
        monument.style.display = "none";
        monumentVidio.style.display = "block";
        monumentVidio.src = data.content[0].reference;
      }
      if (data.content[0].type == "image") {
        monument.style.display = "block";
        monumentVidio.style.display = "none";
        monument.src = data.content[0].reference;
      }
      modal_arrows_past_back.style.display = "block";
      modal_arrows_past_next.style.display = "block";
    }
    if (content.length == 1) {
      if (data.content[0].type == "vidio") {
        monument.style.display = "none";
        monumentVidio.style.display = "block";
        monumentVidio.src = data.content[0].reference;
      }
      if (data.content[0].type == "image") {
        monument.style.display = "block";
        monumentVidio.style.display = "none";
        monument.src = data.content[0].reference;
      }
      modal_arrows_past_back.style.display = "none";
      modal_arrows_past_next.style.display = "none";
    }
    if (content.length == 0) {
      console.log("контент памятника " + p + " пуст");
    }
    modalPast.style.display = "block";
    slider.style.display = "none";
    modal_text_past.innerHTML = text;
    nameMonument.innerHTML = label;
  }
}

fetch("monuments.json")
  .then((response) => response.json())
  .then((data) => {
    pam.forEach((element) => {
      element.addEventListener("click", (event) => {
        let p = [...event.target.parentElement.classList][0].split("")[9];
        if (
          [...event.target.parentElement.classList][0].split("")[10] !=
          undefined
        ) {
          p =
            p + "" + [...event.target.parentElement.classList][0].split("")[10];
        }
        const text = !langChange ? data[p].textRu : data[p].textBy;
        const name = !langChange ? data[p].nameRu : data[p].nameBy;

        if (data[p].haveVidio) {
          modal_arrows_past_next.style.display = "block";
          monumentVidio.src = data[p].haveVidio;
        } else {
          modal_arrows_past_next.style.display = "none";
        }

        setPastModal(text, name, data[p], p);
      });
    });
  })
  .catch((error) => console.error("Ошибка загрузки JSON:", error));
