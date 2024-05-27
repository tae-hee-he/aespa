let space = document.querySelector("#space")
const image = ["https://i.pinimg.com/736x/56/f9/15/56f91512653cc104325ffddcd79b0817.jpg","img/ae2.png","img/winter.png","img/ning.png","img/giselle.png","img/karina.png","img/ae3.png","img/ae4.png","https://i.pinimg.com/736x/20/f3/f0/20f3f0b08f95a7a2aaf87958e3838bf8.jpg","https://i.pinimg.com/736x/ac/88/1f/ac881f23297a25a023c51007c1bbf0fd.jpg","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"]

space.addEventListener('mousemove', function(e){
    console.log("마우스 움직임")
    const etImg = document.createElement("div");
    const todayImage = image[Math.floor(Math.random() * image.length)];
    const pic = todayImage.width;
    etImg.style.backgroundImage = `url(${todayImage})`
    etImg.style.width = 300+"px";
    etImg.style.height= 220+"px";
    etImg.style.pointerEvents = "none";
    etImg.style.backgroundSize = "contain";
    etImg.style.backgroundRepeat ="no-repeat";
    etImg.style.left= e.pageX -300 * 0.5 + "px";
    etImg.style.top= e.pageY -220 * 0.5 + "px";
    etImg.style.position = "absolute";
    etImg.style.transform = 'rotate('+ Math.random()*100+'deg)';
    document.body.append(etImg);
    setTimeout((e) => {
        etImg.style.opacity = 0;
    }, 2000);
}
)

