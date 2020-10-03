//callback a) b)
let success = document.getElementById('success')
let error = document.getElementById('error')
function loadImg(callback){
    let img = document.getElementById('img')
    img.src = 'https://pbs.twimg.com/media/DdiyWr9U0AAYAWu.jpg:large'
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
}

loadImg((f)=>{
    if(f){
        success.style.display = 'block'
        setTimeout(()=>{ success.style.display = 'none'}, 3000)
        console.log("Загрузка завершена")
    }
    else{
        error.style.display = 'block'
        setTimeout(()=>{ error.style.display = 'none'}, 3000)
        console.log("Ошибка загрузки")
    }
})
/*
//promise c) d)
let success = document.getElementById('success')
let error = document.getElementById('error')

function loadImg(){
    return new Promise((resolve, reject)=>{
        let img = document.getElementById('img');
        setTimeout(()=>{
            img.src = 'https://pbs.twimg.com/media/DdiyWr9U0AAYAWu.jpg:large'
        }, 3000)
        img.onload = () => resolve(true)
        img.onerror = () => reject(false)
    })
}
loadImg().then(suc, err)
function suc(){
    success.style.display = 'block'
    setTimeout(()=>{ success.style.display = 'none'}, 3000)
    console.log("Загрузка завершена")
}
function err(){
    error.style.display = 'block'
    setTimeout(()=>{ error.style.display = 'none'}, 3000)
    console.log("Ошибка загрузки")
}
*/



