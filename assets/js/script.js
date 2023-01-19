const imgs = document.getElementById("img");// Serve para conseguir puxar o elemento pelo seu ID
const img = document.querySelectorAll("#img img"); // Serve para ele conseguir pegar todos os elementos que estão dentro do ID img

let idx = 0;

function carousel (){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 209}px)`;
}

setInterval(carousel, 1800);