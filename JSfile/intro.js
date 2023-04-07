
             //<div>가 현재 화면에 보이는지 파악 쉬워짐
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

let div = document.querySelectorAll('div')
observer.observe(div[0])
observer.observe(div[1])
observer.observe(div[2])
observer.observe(div[3])