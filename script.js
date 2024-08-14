let botttomPlay = document.getElementById("play");
let songPlay = document.querySelectorAll(".fa-play");
let btmRange = document.querySelector(".btmRange");
let songItem = document.querySelectorAll(".song");
let bottomBack = document.querySelector(".fa-backward");
let bottomNext = document.querySelector(".fa-forward");
var audio = new Audio("songs/1.mp3");
let songs = Array.from(songItem);
let songPlays = Array.from(songPlay);
let index = 0;


let main =[
    {name : "Nasheed_ চলো সাক্ষাতে হে রুহ... _ Mir Mumin _ New Nasheed",filePath:"songs/0.mp3",image: "img/img1.jpg"},
    {name : "নাশিদ ক্লান্ত প্রহরে । মীর মুমিন",filePath:"songs/1.mp3",image: "img/img2.png"},
    {name : "নাশিদ_ যেখানে সুখের নেইকো শেষ _ Mir Mumin Nasheed",filePath:"songs/2.mp3",image: "img/img3.jpg"},
    {name : "নাশিদঃ চলো প্রেমে পড়ি সেই রবের সাথে _ মাহের মুহাজির আল হাদরিমি",filePath:"songs/3.mp3",image: "img/img4.jpg"},
    {name : "বৃষ্টি ঝড়ে আধার প্রান্তরে। যেখানে ফুলেরা কখনো ঝড়ে না",filePath:"songs/4.mp3",image: "img/img5.jpg"},
    {name : "শক্ত প্রাচীর ঘেরা এ পথে।। মীর মুমিন __ হুজাইফা",filePath:"songs/5.mp3",image: "img/img6.jpg"},
    {name : "হে যুবক! জেগে উঠো _ Cover - Ahmad Faiyaaz _ Ummah Studio",filePath:"songs/6.mp3",image: "img/img7.png"},
]

songs.forEach(function(element,i){
    element.querySelector(".h4").innerText = main[i].name;
    element.querySelector("img").src = main[i].image;
})


audio.addEventListener("timeupdate",function(){
        let time = (audio.currentTime/audio.duration)*100;
        btmRange.value = time; 
})


btmRange.addEventListener("input",function(){
        audio.currentTime = (btmRange.value*audio.duration)/100
})


botttomPlay.addEventListener("click",function(e){
    if(botttomPlay.classList == "fa-solid fa-2x fa-circle-play"){
        e.target.classList.remove ("fa-circle-play");
        e.target.classList.add ("fa-circle-pause");
        songPlays[index].parentNode.style.scale = 1.06;
        songPlays[index].parentNode.style.backgroundColor = "rgba(255, 255, 255, 8)";
        songPlays[index].classList.remove ("fa-play");
        songPlays[index].classList.add ("fa-pause");
        audio.play()
    }else{
        e.target.classList.remove ("fa-circle-pause");
        e.target.classList.add ("fa-circle-play");
        allElement()
        audio.pause()
    }
});


bottomBack.addEventListener("click",function(){
     if(index == 0){
        index = 6
     }else{
        index--
     }
     allElement();
     songPlays[index].parentNode.style.scale = 1.06;
     songPlays[index].parentNode.style.backgroundColor = "rgba(255, 255, 255, 8)";
     songPlays[index].classList.remove ("fa-play");
     songPlays[index].classList.add ("fa-pause");
     botttomPlay.classList.remove ("fa-circle-play");
     botttomPlay.classList.add ("fa-circle-pause");
     audio.src = main[index].filePath;
     audio.play();
})


bottomNext.addEventListener("click",function(){
     if(index == 6){
        index = 0
     }else{
        index++
     }
     allElement();
        songPlays[index].parentNode.style.scale = 1.06;
        songPlays[index].parentNode.style.backgroundColor = "rgba(255, 255, 255, 8)";
        songPlays[index].classList.remove ("fa-play");
        songPlays[index].classList.add ("fa-pause");
        botttomPlay.classList.remove ("fa-circle-play");
        botttomPlay.classList.add ("fa-circle-pause");
        audio.src = main[index].filePath;
        audio.play();
})


const allElement = function(){
    Array.from(songPlay).forEach(function(element){
            audio.pause();
            element.parentNode.style.scale = 1;
            element.parentNode.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
            element.classList.remove ("fa-pause");
            element.classList.add ("fa-play");

    })
}


songPlays.forEach(function(element,x){

    element.addEventListener("click",function(){
        if(element.classList == "fa-solid fa-play"){
            allElement();
            index = x;
            audio.src = main[index].filePath;
            audio.play();
            element.parentNode.style.scale = 1.06
            element.parentNode.style.backgroundColor = "rgba(255, 255, 255, 8)";
            element.classList.remove ("fa-play");
            element.classList.add ("fa-pause");
            botttomPlay.classList.remove ("fa-circle-play");
            botttomPlay.classList.add ("fa-circle-pause");
        }else{
            audio.pause();
            element.parentNode.style.scale = 1
            element.parentNode.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
            element.classList.remove ("fa-pause");
            element.classList.add ("fa-play");
            botttomPlay.classList.remove ("fa-circle-pause");
            botttomPlay.classList.add ("fa-circle-play");
        }
    })
})