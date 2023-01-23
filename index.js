let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur consequatur sapiente dignissimos! Voluptatem, aut."
        image: "slider 2.png"
  
    },
    {
      name: "loki",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur consequatur sapiente dignissimos! Voluptatem, aut."
        image: "slider 1.png",
    },
    {
      name: "falcon and the winter soldier",
      dos:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur consequatur sapiente dignissimos! Voluptatem, aut."
        image: "slider 3.png"
    },
    {
      name: "wanda vision",
      dos:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur consequatur sapiente dignissimos! Voluptatem, aut."
        image: "slider 4.png"
    },
    {
      name: "luca",
      dos:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur consequatur sapiente dignissimos! Voluptatem, aut."
        image: "slider 5.png"
    }
    ]
  
  const carousel = document.querySelector('.carousel');
  let sliders=[];
  
  let slideIndex=0;
  const createSlide = () => {
    if(slideIndex>=movies.length){
      slideIndex=0;
    }
  
  
    let slide= document.createElement('div');
    var imgElement= document.createElement('img');
    let content= document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');
  
    imgElement.appendChild=(document.createTextNode(''));
    h1.appendChild=(document.createTextNode(movies[slideIndex].name));
    p.appendChild=(document.createTextNode(movies[slideIndex].des));
    content.appendChild('h1')
    content.appendChild=('p');
    slide.appendChild=('imgElement');
    carousel.appendChild=('slide');
  
    imgElement.src=movies.[slideIndex].image;
    slideIndex++;
  
  
    slide.classname= 'slider';
    content.classname= 'slider-content';
    h1.classname= 'movie-title';
    p.classname= 'movie-des';
  
  
    sliders.push(slide);
  
    if(sliders.length) {
        sliders[0].style.marginLeft = 'calc(-${100 * (sliders.lenght - 2)}% -${
        30 * (sliders.lenght - 2)
    } px ';

    }
  
  
  for let(i=0; i<3; i++){
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  },3000)
  




let cardContainers = [...document.querySelectorAll('.cardContainer')];
let preBtns = [...document.querySelectorAll('.preBtns')];
let nxtBtns = [...document.querySelectorAll('.nxtBtns')];

cardContainers.forEach ((items,i)=> {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.Width;

    nxtBtns[i].addEventListerner('Click', () =>{
        item.scrollleft += containerWidth - 200;

    })

    nxtBtns[i].addEventListerner('Click', () =>{
        item.scrollleft -= containerWidth + 200;

    })
})