const slider = document.querySelector(".sliderWrapper")
const menuItems  = document.querySelectorAll(".menuItem")


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let chosenProduct = products[0] 

  const images = document.querySelector(".productImg")
  const titles = document.querySelector(".productTitle")
  const prices = document.querySelector(".productPrice")
  const colors = document.querySelectorAll(".color")
  const sizes = document.querySelectorAll(".size")




menuItems.forEach((item , index)=>{
    item.addEventListener(("click") , ()=>{
        //change the current slide
    slider.style.transform = `translateX(${-100 * index}vw)`
    //change the current product
    chosenProduct = products[index]
    //change text of current product
    titles.textContent = chosenProduct.title
    //change the current price
    prices.textContent = "$"+ chosenProduct.price
    //change the current images
    images.src = chosenProduct.colors[0].img

    //change the color 
    colors.forEach((color , index) =>{
        color.style.backgroundColor = chosenProduct.colors[index].code
    })
    })
})

colors.forEach((color , index)=>{
    color.addEventListener("click" , ()=>{
        images.src   = chosenProduct.colors[index].img
    })
})

sizes.forEach((size , index)=>{
    size.addEventListener('click' , ()=>{
        sizes.forEach((size)=>{
            size.style.backgroundColor = 'white'
            size.style.color = 'black'
        })
        size.style.backgroundColor = 'black'
        size.style.color = 'white'
    })
})

const buy = document.querySelector(".product-btn")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")


buy.addEventListener(("click") , ()=>{
    payment.style.visibility = "visible"
})

close.addEventListener(("click") , ()=>{
    payment.style.visibility = "hidden"
})
