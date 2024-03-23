document.getElementsByClassName('banner')[0].style.height = document.getElementsByClassName('imageBanner')[0].offsetHeight + 'px'
window.addEventListener('resize', function (event) {
    var chieuCaoAnh = document.getElementsByClassName('imageBanner')[0].offsetHeight
    document.getElementsByClassName('banner')[0].style.height = chieuCaoAnh + 'px'
    // document.getElementsByClassName('phanChinh')[0].style.marginTop = 'calc(7em + ' + chieuCaoAnh + 'px)'
});
var dropDown = document.getElementsByClassName('btnDropDown')
let alphaArrow = [180, 180]
var arrow = document.getElementsByClassName('arrow')
var cacDanhMuc = document.getElementsByClassName('cacDanhMuc')

for (let i = 0; i < 2; i++) {
    dropDown[i].addEventListener('click', function () {
        arrow[i].style.transform = 'rotate(' + alphaArrow[i] + 'deg)'
        alphaArrow[i] = alphaArrow[i] > 0 ? 0 : 180
        console.log(alphaArrow)
        cacDanhMuc[i].style.display = alphaArrow[i] > 0 ? 'none' : 'block'
    })
}
var btnSort = document.getElementsByClassName('btnSort')[0]
var arrowMini = document.getElementsByClassName('arrowMini')[0]
var cacCachXepNe = document.getElementsByClassName('cacCachXepNe')[0]
var alphaMini = 180
var cachXep = document.getElementsByClassName('cachXep')
var select = document.getElementsByClassName('selected')
var nameSort = document.getElementsByClassName('tenLoaiSapXep')
var nameSelectEd = document.getElementsByClassName('nameSelectEd')[0]
btnSort.addEventListener('click', e=>{
    arrowMini.style.transform = 'rotate(' + alphaMini + 'deg)'
    alphaMini = alphaMini > 0 ? 0 : 180
    if (!alphaMini > 0){
        cacCachXepNe.classList.remove('hide')
    }else{
        cacCachXepNe.classList.add('hide')
    }
})
var selected = -1
for (let i = 0; i < cachXep.length; i++){
    cachXep[i].addEventListener('click', e=>{
        if (selected > -1){
            select[selected].classList.add('hide')
        }
        select[i].classList.remove('hide')
        selected = i
        // console.log(nameSort[i].innerHTML)
        nameSelectEd.innerHTML = nameSort[i].innerHTML
    })
}
var luaChonCuaBan = document.getElementsByClassName('luaChonCuaBan')
var checkNe = document.getElementsByClassName('checkNe')
for (let i = 0; i < luaChonCuaBan.length; i++){
    luaChonCuaBan[i].addEventListener('click', e=>{
        checkNe[i].checked = !checkNe[i].checked
    })
}
var backPage = document.getElementsByClassName('backPage')[0]
var nextPage = document.getElementsByClassName('nextPage')[0]
let indexPage = document.getElementsByClassName('indexPage')[0]
let sumPage = document.getElementsByClassName('sumPage')[0]
let valumeSumPage = parseInt(sumPage.innerHTML)
backPage.addEventListener('click', e=>{
    var oldIndexPage = parseInt(indexPage.innerHTML)
    indexPage.innerHTML = oldIndexPage > 1 ? oldIndexPage - 1 :  1
})
nextPage.addEventListener('click', e=>{
    var oldIndexPage = parseInt(indexPage.innerHTML)
    indexPage.innerHTML = oldIndexPage < valumeSumPage ? oldIndexPage + 1 :  valumeSumPage
})