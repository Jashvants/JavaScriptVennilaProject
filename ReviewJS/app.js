// local reviews data
const reviews = [
  {
    id: 1,
    name: "Elon Musk",
    job: "Ceo Of Tesla",
    img:
      "https://i.insider.com/617127ab33f4b300189ad412?width=1136&format=jpeg",
    text:
      "Elon Reeve Musk FRS is a business magnate and investor. He is the founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI",
  },
  {
    id: 2,
    name: "Changpeng Zhao",
    job: "CEO of Binance",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSse9uOVdzQixFFNM9PWixAtYPWbU5VOFS9PNY0TbfoGw&s",
    text:
      "Changpeng Zhao, commonly known as CZ, is a Chinese-Canadian business executive. Zhao is the founder and CEO of Binance, the world's largest cryptocurrency exchange by trading volume as of July 2022. CZ was born in Jiangsu, China and moved to Canada at a young age with his family. He is currently based in Singapore",
  },
  {
    id: 3,
    name: "Jeff Bezos",
    job: "Executive Chairman of Amazon",
    img:
      "https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg?crop=4:3",
    text:
      "Jeffrey Preston Bezos is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut. He is the founder, executive chairman, and former president and CEO of Amazon.",
  },
  // {
  //   id: 4,
  //   name: "bill anderson",
  //   job: "the boss",
  //   img:
  //     "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  //   text:
  //     "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  // },
];

// select item
const img =document.getElementById("person-img");
const author =document.getElementById("author");
const job  =document.getElementById("job");
const info  =document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Set starting item
let currentItem= 0;

// Load intial
window.addEventListener("DOMContentLoaded", function(){
  showPerson()
 
});

// show person based on item
function showPerson(){
  const item= reviews[currentItem];
  img.src = item.img;
  author.textContent =item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length -1){
    currentItem=0;
  }
  showPerson();
});

prevBtn.addEventListener('click',  function(){
  currentItem--;
  if(currentItem<0){
    currentItem= reviews.length-1 ;
  }
  showPerson();
})

//Random Suprise me
randomBtn.addEventListener("click", function(){
  currentItem = Math.floor(Math.random() *reviews.length);
  console.log(currentItem);
  showPerson();
})