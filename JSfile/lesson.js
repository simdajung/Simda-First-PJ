const itemTitles = document.querySelectorAll('.item-title');

for (let i = 0; i < itemTitles.length; i++) {
    itemTitles[i].addEventListener('click', function () {

        console.log('클릭됨');
                console.log(itemTitles[i]);

        let itemContents = document.querySelectorAll('.item-content');
        console.log(itemContents);
        

        for (let el of itemContents) {
            el.classList.remove('active'); 
        }

        itemContents[i].classList.add('active');
    });
}


document.querySelector('#allCloseBtn').addEventListener('click', function () {
    let itemContents = document.querySelectorAll('.item-content');
    for (let el of itemContents) {
        el.classList.remove('active'); 
    }



});