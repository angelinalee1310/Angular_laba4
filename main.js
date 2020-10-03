let success = document.getElementById('success')
let error = document.getElementById('error')
let n=1
let loadImg = url => new Promise((resolve, reject)=>{
        let img = document.getElementById(`img${n++}`)
        img.src = url
        img.onload = () => resolve(true)
        img.onerror = () => reject(false)
    })
Promise.all([
    loadImg('https://im0-tub-ru.yandex.net/i?id=f652f63ca5203dd67ec66f4283f91026&ref=rim&n=33&w=250&h=188'),
    loadImg('http://img.crazys.info/files/i/2012.6.13/1339523022_oboi_v_mire_zabavnyh_zhivotnyh_1_50_bender777post.jpg'),
    loadImg('https://images.chesscomfiles.com/uploads/v1/user/48089174.13748a81.1200x1200o.1da7ba6ca3c5.jpeg')
]).then(suc, err)
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


