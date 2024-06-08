let btn = document.getElementById("btn");
let quoteText = document.querySelector("q");
let author = document.getElementById("author");
let body = document.querySelector("body");
let header = document.querySelector("header");
let colorButton = document.getElementById("color-button");
let colorButton2 = document.getElementById("color-button2");
let colorButton3 = document.getElementById("color-button3");
let container = document.getElementById("container");


colorButton.addEventListener("click", function () {
    body.style.backgroundColor = "darksalmon";
    container.style.backgroundColor = "white";
    header.style.color = "white"
    btn.style.color = "white";
    btn.style.backgroundColor = "darksalmon";
    author.style.color = "darksalmon"
    
btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor = "rgb(220, 120, 106)";
});

btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor = "darksalmon";
});

})

colorButton2.addEventListener("click", function () {
    body.style.backgroundColor = "lightgreen";
    container.style.backgroundColor = "white";
    header.style.color = "white"
    btn.style.color = "white";
    btn.style.backgroundColor = "lightgreen";
    author.style.color = "lightgreen"
    
btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor = "rgb(126, 220, 130)";
});

btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor = "lightgreen";
});

})

colorButton3.addEventListener("click", function () {
    body.style.backgroundColor = "cornflowerblue";
    container.style.backgroundColor = "white";
    header.style.color = "white"
    btn.style.color = "white";
    btn.style.backgroundColor = "cornflowerblue";
    author.style.color = "cornflowerblue"
    
btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor = "rgb(53, 124, 254)";

});

btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor = "";
});

})

let quotes = [
    {
        quote: "Time is like water in the sea, it will have no specific color or taste unless we know how to use it.",
        author: "― Naguib Mahfouz"
    },
    {
        quote: "A person is not weak if he cries, but strong if he knows when to cry.",
        author: "― Taha Hussein"
    },
    {
        quote: "The revolution of souls severs ropes, and the revolution of minds removes mountains.",
        author: "― Ahmad Shawqi"
    },
    {
        quote: "In the tapestry of fate, woven with threads of joy and sorrow, it is the hands of destiny that guide us, shaping our journey through the labyrinth of life.",
        author: "― Ahmed Shawqi"
    },
    {
        quote: "In the stillness of the night, when the world is hushed in slumber, it is then that the whispers of our hearts are heard most clearly, guiding us towards the dawn of a new day.",
        author: "― Naguib Surur."
    },
    {
        quote: "There can be no peace without justice. Without resistance there will be no justice",
        author: "― Arundhati Roy"
    },
    {
        quote: "In the silence of solitude, where words fade and thoughts linger, it is the echoes of our own souls that resonate most deeply, speaking truths that words alone cannot express.",
        author: "― Naguib Surur"
    },
    {
        quote: "Let your tears roll tonight, but tomorrow you will start the battle again. What defeats us, always, is just our own sorrow.",
        author: "― Amin Maalouf"
    },
    {
        quote: "Powerful is the one whose motto in life: I might suffer but will never surrender.",
        author: "― May Ziade"
    },
    {
        quote: "In the end, forgetting is nothing but turning a page in the book of life. It may seem an easy matter, but as long as you can’t tear it, you will keep on stumbling upon it between each season of your life.",
        author: "― Nizar Qabbani"
    },
];

let currentNum;
btn.addEventListener("click", function(){
let randomNum;

do {
        randomNum = Math.floor(Math.random() * quotes.length);
    } while (randomNum===currentNum);

    currentNum=randomNum;
    //console.log(randomNum)
    quoteText.innerHTML = quotes[randomNum].quote;
    author.innerHTML = quotes[randomNum].author;
})
