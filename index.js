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
const monument_modal= document.querySelector(".monument_modal");
let isPrompt = false;
const images = document.querySelectorAll(".slider img");
let modal_arrows = document.querySelector(".modal_arrows");
let modal_arrows_past = document.querySelector(".modal_arrows_past");3
let currentIndex = 0;
let isRealHero = false;
let realHeroPath = "";
let futureHeroPath = "";
let sound = "";
const changeCentryBtn1 = document.querySelector(".changeCentry1");
const changeCentryBtn2 = document.querySelector(".changeCentry2");
let currentOblast = "";
const HeroDate = document.querySelector("lifeTime");
let reference=document.querySelector(".reference")
let categories = {
  science: document.querySelectorAll(".science"),
  med: document.querySelectorAll(".med"),
  war: document.querySelectorAll(".war"),
  econom: document.querySelectorAll(".econom"),
  sport: document.querySelectorAll(".sport"),
  other: document.querySelectorAll(".other"),
};

function showCategory(categoryToShow, e) {
  categories = {
    science: document.querySelectorAll(".science"),
    med: document.querySelectorAll(".med"),
    war: document.querySelectorAll(".war"),
    econom: document.querySelectorAll(".econom"),
    sport: document.querySelectorAll(".sport"),
    other: document.querySelectorAll(".other"),
  };
  document.querySelectorAll(".filter>button").forEach((el) => {
    el.classList.add("filter_btn");
    el.classList.remove("filter_btn_active");
  });
    e.target.classList.remove("filter_btn");
    e.target.classList.add("filter_btn_active");

  for (const category in categories)
    categories[category].forEach((item) => {
      if (category === categoryToShow) {
        item.style.transition =  "opacity 1.5s ease-in-out, visibility 0s linear 0.3s";
        item.style.opacity = "1";
        item.style.visibility = "visible";
      } else {
        item.style.transition = "opacity 0.3s ease, visibility 0s linear 0s";
        item.style.opacity = "0";
        item.style.visibility = "hidden";
      }
    });
}
let isVidio=false
function showAllCategories(e) {
  const categories = {
    science: document.querySelectorAll(".science"),
    med: document.querySelectorAll(".med"),
    war: document.querySelectorAll(".war"),
    econom: document.querySelectorAll(".econom"),
    sport: document.querySelectorAll(".sport"),
    other: document.querySelectorAll(".other"),
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
document.querySelector(".pClose").addEventListener("click",()=>{
  modalPast.style.display = "none";
  monumentVidio.style.display="none"
  isVidio=false
  monument.style.display="block"
})
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

document.querySelectorAll(".otherb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("other", e));
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

isVidio=false
function changeMonumnentImage() {
  if (isVidio) {
    modal_arrows_past.style.transform = "rotate(180deg)";
    modal_arrows_past.style.transform = "rotate(0deg)";
    monument.style.display="block";
    monumentVidio.style.display="none"

  } else {
    modal_arrows_past.style.transform = "rotate(0deg)";
    modal_arrows_past.style.transform = "rotate(180deg)";
    monument.style.display="none";
    monumentVidio.style.display="block"

  }
  isVidio = !isVidio;
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
    clCenter.style.display = "block";
    clCyber.style.display = "none";
    clSteam.style.display = "none";
    cl.click();
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

function promModal() {
  modal_arrows.style.display = "none";
  if (!langChange) {
    setModal(
      "Промышленный комплекс формирует: почти треть создаваемого ВВП (27,1% в 2021 г.), три четверти экспорта (75-80%), значительную сумму валютных поступлений; обеспечивает рабочими местами четверть экономически активного населения страны. При этом почти половину промышленного производства формируют частные предприятия (организации без доли государства). Промышленность - одна из наиболее динамично развивающихся отраслей белорусской экономики. По итогам 2021 г. промышленность приросла на 6,5% - это один из лучших результатов среди стран Евразийского экономического союза (ЕАЭС).",
      "Промышленный комплекс - основа развития национальной экономики",
      "img/промышленность1.jpg",
      "./img/промышленность1.jpg",
      "sound/prom.wav"
    );
  } else {
    setModal(
      "Прамысловы комплекс фарміруе: амаль трэць ствараемага ВУП (27,1% у 2021 г.), тры чвэрці экспарту (75-80%), значную суму валютных паступленняў; забяспечвае працоўнымі месцамі чвэрць эканамічна актыўнага насельніцтва краіны. Пры гэтым амаль палову прамысловай вытворчасці фармуюць прыватныя прадпрыемствы (арганізацыі без долі дзяржавы). Прамысловасць - адна з найбольш дынамічна развіваюцца галін беларускай эканомікі. Па выніках 2021 года прамысловасць прырасла на 6,5% - гэта адзін з лепшых вынікаў сярод краін Еўразійскага эканамічнага саюза (ЕАЭС).",
      "Прамысловы комплекс-аснова развіцця нацыянальнай эканомікі",
      "img/промышленность1.jpg",
      "./img/промышленность1.jpg",
      "sound/prom.wav"
    );
  }
}

function scienceModal() {
  modal_arrows.style.display = "none";
  if (!langChange) {
    setModal(
      "В ряду крупных новейших достижений - искусственное выращивание органов и тканей, разработка нанолекарств с заданными свойствами, создание искусственного интеллекта, по ряду параметров превосходящего человеческий. По всем названным мировым достижениям наша наука находится на передовых позициях, а в некоторых разработках - даже лидирует. Машиностроители разрабатывают новейшие электротранспортные средства и компоненты; физики и электронщики создают высококонкурентные лазеры и схемы, востребованные в США, Японии. Созданы комплекс автоматизированного составления цифровых карт, суперкомпьютер для геологических исследований и офисный суперкомпьютер с супервысокой для этого класса машин производительностью - 100 терафлопс (1 триллион операций в секунду).",
      "Наука — фундамент нашей государственности",
      "img/наука.jpg",
      "./img/наука.jpg",
      "sound/science.wav"
    );
  } else {
    setModal(
      "Нарадзілася 14 верасня 1990 года ў Мінску, у рабочай сям'і, бацька і маці працавалі дворнікамі. Скончыла сярэднюю школу № 151 у Мінску. Пасля заканчэння школы прафесійна займалася бальнымі танцамі. У 2010-2011 гадах працавала ў Мінскім аддзяленні Беларускай чыгункі, у 2011 годзе — у кампаніі з дадатковай адказнасцю «Сатурн-2», якая займалася аптовым гандлем прадуктамі харчавання. З 2012 года завочна вучылася на эканамічным факультэце Мінскага інавацыйнага ўніверсітэта па спецыяльнасці «менеджмент (інфармацыйны)». У 2013-2015 гадах працавала ў ТАА «Мар'яна Інвест», якое займалася рознічным гандлем каўбаснымі вырабамі і вэнджанінай. З 2017 года працавала бортправадніцай-інструктарам авіякампаніі «Белавія» і лётала ў складзе экіпажаў пасажырскіх самалётаў Boeing і Embraer.",
      "Марына Васілеўская",
      "img/наука.jpg",
      "./img/наука.jpg",
      "sound/science.wav"
    );
  }
}

function promptModal() {
  isPrompt = true;
  setModal("", "", "", "", "");
}

huian.addEventListener("click", () => {
  modal.style.display = "none";
  modalPast.style.display = "none";
  isVidio=false
  monumentVidio.style.display="none"
  monument.style.display="block"
  isRealHero = false;
  modal_arrows.style.transform = "rotate(0deg)";
});

cHuian.addEventListener("click", () => {
  modal.style.display = "none";
  modalPast.style.display = "none";
  isVidio=false
  monumentVidio.style.display="none"
  monument.style.display="block"
  window.speechSynthesis.cancel();
});

window.onclick = function (event) {
  if (event.target == modal || event.target == modalPast) {
    window.speechSynthesis.cancel();
    setActiveMicro(false);
    modal.style.display = "none";
    modalPast.style.display = "none";
    isVidio=false
    monumentVidio.style.display="none"
    monument.style.display="block"
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

lang.addEventListener("click", () => {
  if (!langChange) {
    lang.innerHTML = 'BY <img class="" src="./img/globus.png"/>';
  } else {
    lang.innerHTML = 'RU <img class="" src="./img/globus.png"/>';
  }

  langChange = !langChange;

  if (!langChange) {
    for (let i of vern) {
      i.innerHTML = "Нажмите чтобы вернуться<";
    }
    text.innerHTML = "Нажмите чтобы начать";
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
    pamyatnik6s.innerHTML = "Памятник <br />ополченцам-подпольщикам<";
    pamyatnik7s.innerHTML = "Памятник узникам <br />концлагеря";
    pamyatnik8s.innerHTML = "Памятник войнам<br />освободителям";
    pamyatnik9s.innerHTML = "Памятник<br />жертвам <br />холокоста";
    pamyatnik10s.innerHTML =
      "Мемориальный комплекс <br />осводбодителям пинска";
    pamyatnik11s.innerHTML = "Монумент<br />с танком";
    pamyatnik12s.innerHTML = "Памятник <br />урбановичу";
    pamyatnik13s.innerHTML =
      "Памятник-танк<br />на могиле генерала <br />Б.С.Бахарова";
    pamyatnik14s.innerHTML =
      "Памятник<br />воинам<br />-интернационалист-<br />ам";
    pamyatnik15s.innerHTML = "Памятник битве при лесной";
    pamyatnik17s.innerHTML = "Курган славы";
    pamyatnik18s.innerHTML = "Памятник десантникам";
    pamyatnik19s.innerHTML = "Комплекс<br/> холокоста";
    pamyatnik20s.innerHTML = 'Мемориальный комплекс <br />"Прорыв"';
    pamyatnik21s.innerHTML = "Памятник Памяти <br />Узников Гетто";
    pamyatnik22s.innerHTML = "Мемориал <br/>Курган <br />Славы";
    pamyatnik23s.innerHTML = "Вечный огонь";
    pamyatnik24s.innerHTML = "комплекс <br />холокоста";
    if (StateNumber == 1) {
      t2.innerHTML = "Память о прошлом";
    } else if (StateNumber == 0 || StateNumber == 3) {
      t2.innerHTML = "Параллели времени";
      t1.innerHTML = "Интерактивные часы";
    } else {
      t2.innerHTML = "Взгляд в будущее";
    }

    document.querySelector('.scienceb').innerHTML = 'НАУКА'
    document.querySelector('.medb').innerHTML = 'МЕДИЦИНА'
    document.querySelector('.warb').innerHTML = 'АРМИЯ'
    document.querySelector('.economb').innerHTML = 'ЭКОНОМИКА'
    document.querySelector('.sportb').innerHTML = 'СПОРТ'
    document.querySelector('.otherb').innerHTML = 'ДРУГОЕ'
    document.querySelector('.showAll').innerHTML = 'ПОКАЗАТЬ ВСЕ'
  } 
  
  else {
    for (let i of vern) {
      i.innerHTML = "Націсніце, каб вярнуцца<";
    }
    text.innerHTML = "Націсніце каб пачаць";
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
    pamyatnik12s.innerHTML = "Помнік <br/>урбановічу";
    pamyatnik13s.innerHTML =
      "Помнік-танк<br />на магіле генерала <br />Б.С.Бахарава";
    pamyatnik14s.innerHTML =
      "Помнік<br />воінам<br />-інтэрнацыяналіст-<br />ам";
    pamyatnik15s.innerHTML = "Помнік бітве пры лясной";
    pamyatnik17s.innerHTML = "Курган <br/>славы";
    pamyatnik18s.innerHTML = "Помнік дэсантнікам";
    pamyatnik19s.innerHTML = "Комплекс<br/>халакоста";
    pamyatnik20s.innerHTML = 'Мемарыяльны комплекс <br />"Прарыў"';
    pamyatnik21s.innerHTML = "Помнік Памяці <br />Вязняў Гета";
    pamyatnik22s.innerHTML = "Мемарыял<br/> Курган <br />Славы";
    pamyatnik23s.innerHTML = "Вечны агонь";
    pamyatnik24s.innerHTML = "Комплекс <br />халакоста";
    if (StateNumber == 1) {
      t2.innerHTML = "Памяць аб мінулым";
    } else if (StateNumber == 0 || StateNumber == 3) {
      t2.innerHTML = "Паралелі часу";
      t1.innerHTML = "Інтэрактыўны гадзіннік";
    } else {
      t2.innerHTML = "Погляд у будучыню";
    }

    document.querySelector('.scienceb').innerHTML = 'НАВУКА'
    document.querySelector('.medb').innerHTML = 'МЕДЫЦЫНА'
    document.querySelector('.warb').innerHTML = 'АРМІЯ'
    document.querySelector('.economb').innerHTML = 'ЭКАНОМІКА'
    document.querySelector('.sportb').innerHTML = 'СПОРТ'
    document.querySelector('.otherb').innerHTML = 'ДРУГОЕ'
    document.querySelector('.showAll').innerHTML = 'ПАКАЗАЦЬ УСЕ'
  }
  lastSteamButton.click();
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
  cl.click();
});

clCyber.addEventListener("click", () => {
  StateNumber = 2;
  clCenter.style.display = "block";
  clCyber.style.display = "none";
  clSteam.style.display = "none";
  cl.click();
});

clCenter.addEventListener("click", () => {
  StateNumber = 3;
  clCenter.style.display = "none";
  clCyber.style.display = "block";
  clSteam.style.display = "block";
  cl.click();
});
function setSteem(){
  let m = Math.random() * 170;
  let s = Math.random() * 170;
  sBackCont.style.flex = 1;
  cBackCont.style.flex = 0;
  sc.style.transform = `rotate(${s}deg)`;
  mn.style.transform = `rotate(${m}deg)`;
  t1.style.display="inline"
  toggleVisibility(cyber, false);
  toggleVisibility(steem, true);
  toggleVisibility( present,false);
  sBack.src = "img/sBack.png";
  zagolovok.style.backgroundImage = "url(./style/szagolovok.png)";
  footerr.style.backgroundImage = "url(./style/sfoot.png)";
  t2.innerHTML = langChange ? "Памяць аб мінулым" : "Память о прошлом";
  text.style.display = "none";
  document.querySelector(".clock").style.marginLeft = "10%";

}
function setPast(){
  t1.style.display="inline"
  sBackCont.style.flex = 0;
  cBackCont.style.flex = 1;
  toggleVisibility(cyber, true);
  toggleVisibility(steem, false);
  toggleVisibility( present,false);

  cBack.src = "img/future_phone.png";
let m = 360 + 190 + Math.random() * 170;
let s = 360 + 190 + Math.random() * 170;
 sc.style.transform = `rotate(${s}deg)`;
 mn.style.transform = `rotate(${m}deg)`;
  zagolovok.style.backgroundImage = "url(./img/cyber_header.png)";
  footerr.style.backgroundImage = "url(./img/cyber_footer.png)";
  t2.innerHTML = langChange
    ? "Погляд у будучыню"
    : "Взгляд в будущее";
  document.querySelector(".clock").style.marginLeft = "calc(90% - 250px)";
  text.style.display = "none";
}
function setPresent(){
  sBackCont.style.flex = 0;
  cBackCont.style.flex = 1;
  t1.style.display="inline"
  toggleVisibility(cyber, false);
  toggleVisibility(steem, false);
  toggleVisibility( present,true);
  cBack.src = "img/present_phone.png";
let  m = 360 + 190 + Math.random() * 170;
 let  s = 360 + 190 + Math.random() * 170;
   sc.style.transform = `rotate(${s}deg)`;
   mn.style.transform = `rotate(${m}deg)`;
  zagolovok.style.backgroundImage = "url(./img/present_header.png)";
  footerr.style.backgroundImage = "url(./img/present_footer.png)";
  t1.style.display="none"
  t2.innerHTML = langChange
    ? "Рэха сапраўднага"
    : "Эхо настоящего";

  text.style.display = "none";
  
}
function setCenter(){
  zagolovok.style.backgroundImage = "url(style/header_image.png)";
  sc.style.transform = `rotate(0deg)`;
  mn.style.transform = `rotate(0deg)`;
  t1.style.visibility = "visible";
  t1.style.display="inline"
  t1.innerHTML = langChange
    ? "Інтэрактыўны гадзіннік"
    : "Интерактивные часы";
  t2.innerHTML = langChange ? "Паралелі часу" : "Параллели времени";
  cBack.src = "img/centralbackground.png";
  sBack.src = "img/centralbackground.png";
  footerr.style.backgroundImage = "none";

  toggleVisibility(cyber, false);
  toggleVisibility(steem, false);

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
      setSteem()
      break;

    case 2:
    setPast()
      break;

    case 3:
setCenter()
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
  sImg.src = "./img/allBelarusMinsk.png";
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
  sImg.src = "img/allBelarusHomel.png";
  if (lastSteamButton != bt16) {
    clearMonuments();
    pamyatnik5.style.display = "inline-block";
    pamyatnik6.style.display = "inline-block";
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
  sImg.src = "./img/allBelarusBrest.png";
  oblast.style.backgroundImage = "url(./style/брестская.png)";

  if (lastSteamButton != bt19) {
    clearMonuments();
    pamyatnik9.style.display = "inline-block";
    pamyatnik10.style.display = "inline-block";
    pamyatnik11.style.display = "inline-block";
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
  sImg.src = "./img/allBelarusMogilev.png";
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
  sImg.src = "./img/allBelarusVitebsk.png";
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
  sImg.src = "./img/allBelarusGrodno.png";
  if (lastSteamButton != bt22) {
    clearMonuments();
    pamyatnik21.style.display = "inline-block";
    pamyatnik22.style.display = "inline-block";
    pamyatnik23.style.display = "inline-block";
    pamyatnik24.style.display = "inline-block";
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
function setHero(id) {
  reference.style.display="none"
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

      if (!langChange) {
        modal_text.innerHTML = heroData.textRu;
        nameHero.innerHTML = heroData.nameRu;
        lifeTime.innerHTML = heroData.lifeTimeRu;
      } else {
        modal_text.innerHTML = heroData.textBY;
        nameHero.innerHTML = heroData.nameBy;
        lifeTime.innerHTML = heroData.lifeTimeBy;
      }
      if(heroData.haveVidio){
        reference.style.display="block"
        reference.href=heroData.haveVidio
       
      }
 
      modal_content.style.visibility = "visible";
      hero.src = heroData.imgCyber;
      sound = heroData.sound;
    })
    .catch((error) => console.error("Ошибка загрузки JSON:", error));
}

class HeroMark {
  constructor(id, name, imag, filter,x,y) {
    this.id = id;
    this.name = name;
    this.x=x;
    this.y=y
    this.imag = imag;
    this.filter = filter;
    this.minLeft = 20;
    this.minTop = 10;
    this.maxLeft = 70;
    this.maxTop = 80;
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
    div.classList.add(`${this.filter}`);
    div.title = this.name;
    div.onclick = () => setHero(this.id);
    div.innerHTML = `<img src="${this.imag}" alt="${this.name}"/>`;
    oC.appendChild(div);
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
        );
        mark.spawn();
      }
    })
    .catch((error) => console.error("Ошибка загрузки JSON:", error));
}
);

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
function setPastModal(text, label, img1, img2) {
  if (isPrompt == false) {
    modalPast.style.display = "block";
    slider.style.display = "none";
    isVidio=false
    modal_text_past.innerHTML = text;
    nameMonument.innerHTML = label;
    monument.src = img1;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("monuments.json")
    .then((response) => response.json())
    .then((data) => {
      pam.forEach((element) => {
        element.addEventListener("click", (event) => {
          let p = [...event.target.parentElement.classList][0].split("")[9];
          if([...event.target.parentElement.classList][0].split("")[10]!=undefined){
            p=p+""+[...event.target.parentElement.classList][0].split("")[10]
          }
          const text = !langChange ? data[p].textRu : data[p].textBy;
          const name = !langChange ? data[p].nameRu : data[p].nameBy;
          if(data[p].haveVidio){
            modal_arrows_past.style.display="block"
            monumentVidio.src=data[p].haveVidio
          }
          else{
            modal_arrows_past.style.display="none"
          }
          setPastModal(text, name, data[p].imgNow, data[p].imgPast);
        });
      });
    })
    .catch((error) => console.error("Ошибка загрузки JSON:", error));
});
