let observer = new IntersectionObserver((e)=>{
    e.forEach((박스)=>{
        if (박스.isIntersecting){
        박스.target.style.opacity=1;
        // 박스.target.style.transform= 'rotate(0deg)';
    } else {
        박스.target.style.opacity=0;
    }
    })
})

let div = document.getElementsByClassName('box')
observer.observe(div[0])
observer.observe(div[1])
observer.observe(div[2])
observer.observe(div[3])
observer.observe(div[4])
observer.observe(div[5])
observer.observe(div[6])

