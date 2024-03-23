var tru = document.getElementsByClassName('tru')
var cong = document.getElementsByClassName('cong')
var valueNumber = document.getElementsByClassName('valueNumber')
function thayDoi(n, k){
    return n + k > 0 ? n + k : 0
}
function ganMOi(x) {
    valueNumber[0].innerText = x
} 
tru[0].addEventListener('click', function () {
    var oldValue = valueNumber[0].innerText
    var intOldValue = parseInt(oldValue)
    ganMOi(thayDoi(intOldValue, -1))
})

cong[0].addEventListener('click', function () {
    var oldValue = valueNumber[0].innerText
    var intOldValue = parseInt(oldValue)
    ganMOi(thayDoi(intOldValue, 1))
})

var moTa = document.getElementsByClassName('moTa')
var danhGia = document.getElementsByClassName('danhGia')
var blockChungNe = document.getElementsByClassName('blockChungNe')
moTa[0].addEventListener('click', function(){
    moTa[0].classList.add('gachChan')
    moTa[0].classList.remove('doiMau')
    danhGia[0].classList.add('doiMau')
    danhGia[0].classList.remove('gachChan')
    blockChungNe[1].classList.add('hide')
    blockChungNe[0].classList.remove('hide')
    document.getElementsByClassName('formGuiDanhGia')[0].classList.add('hide')
    chieuCaoMax = Math.max(chieuCao[0].offsetHeight, chieuCao[1].offsetHeight)
    document.getElementsByClassName('cacSanPhamLienquan')[0].style.marginTop = 'calc(4em + ' + chieuCaoMax + 'px)'
    console.log(chieuCaoMax)
})
danhGia[0].addEventListener('click', function(){
    danhGia[0].classList.add('gachChan')
    danhGia[0].classList.remove('doiMau')
    moTa[0].classList.add('doiMau')
    moTa[0].classList.remove('gachChan')
    blockChungNe[0].classList.add('hide')
    blockChungNe[1].classList.remove('hide')
    chieuCaoMax = Math.max(chieuCao[0].offsetHeight, chieuCao[1].offsetHeight)
    document.getElementsByClassName('cacSanPhamLienquan')[0].style.marginTop = 'calc(4em + ' + chieuCaoMax + 'px)'
    console.log(chieuCaoMax)
})
document.getElementsByClassName('guiDanhGia')[0].addEventListener('click', function(){
    document.getElementsByClassName('formGuiDanhGia')[0].classList.remove('hide')
    chieuCaoMax = Math.max(chieuCao[0].offsetHeight, chieuCao[1].offsetHeight)
    document.getElementsByClassName('cacSanPhamLienquan')[0].style.marginTop = 'calc(4em + ' + chieuCaoMax + 'px)'
    console.log(chieuCaoMax)
})
function toMau(index) {
    for (let t = 0; t <= index; t++){
        soSao[t].classList.remove('fa-regular')
        soSao[t].classList.add('fa-solid')
    }
}
var parent = document.getElementsByClassName("danhGiaSao")[0];
var child = document.getElementsByClassName("keDoc");
for (let i = 0; i < child.length; i++){
    child[i].style.height = parent.clientHeight + "px";
}
var giaTri = document.getElementsByClassName('giaTriPhanTramDanhGia')
var giaTriBieuDoPhanTram = document.getElementsByClassName('giaTriBieuDoPhanTram')
let valumeStarSum = 0
for (let i = 0; i< giaTriBieuDoPhanTram.length; i++){
    let giaTriPhamTram = parseInt(giaTri[i].outerText)
    valumeStarSum = valumeStarSum + giaTriPhamTram * (5 - i)
    giaTriPhamTram = 0.95 * giaTriPhamTram
    giaTriBieuDoPhanTram[i].style.width = giaTriPhamTram + '%'
}
var valumeStar = document.getElementsByClassName('valumeStar')[0]
valumeStar.innerText = valumeStarSum / 100
var soSao = document.getElementsByClassName('soSao')
for (let i = 0 ; i < soSao.length; i++){
    soSao[i].addEventListener('click', function(){
        for (let t = 0; t < soSao.length; t++){
            soSao[t].classList.add('fa-regular')
            soSao[t].classList.remove('fa-solid')
        }
        toMau(i)
    })
}
var chieuCao = document.getElementsByClassName('blockChungNe');
var chieuCaoMax = Math.max(chieuCao[0].offsetHeight, chieuCao[1].offsetHeight)
document.getElementsByClassName('cacSanPhamLienquan')[0].style.marginTop = 'calc(4em + ' + chieuCaoMax + 'px)'
var anhItemS = document.getElementsByClassName('anhItem')
var anhDuocHienThi = document.getElementsByClassName('anhDuocHienThi')[0]
let listSrcImage = []
let indexImage = 0
for (let i = 0; i < anhItemS.length; i++){
    listSrcImage.push(anhItemS[i].getAttribute('src'))
}

anhDuocHienThi.src = listSrcImage[0]

var back = document.getElementsByClassName('button-back')[0]
var next = document.getElementsByClassName('button-next')[0]

function tinhTienAnh(k){
    anhItemS[indexImage].classList.remove('border_2px')
    indexImage = indexImage + k
    if (indexImage < 0){
        indexImage = listSrcImage.length - 1
    }
    if (indexImage == listSrcImage.length){
        indexImage = 0
    }
    anhItemS[indexImage].classList.add('border_2px')
    anhDuocHienThi.src = listSrcImage[indexImage]
}
function chonAnhNayNe(k){
    anhItemS[indexImage].classList.remove('border_2px')
    indexImage = k
    anhItemS[indexImage].classList.add('border_2px')
    anhDuocHienThi.src = listSrcImage[indexImage]
}
// console.log(back)

back.addEventListener('click', function(){
    tinhTienAnh(-1)
})
next.addEventListener('click', function(){
    tinhTienAnh(1)
})
for (let i = 0; i < anhItemS.length; i++){
    anhItemS[i].addEventListener('click', function(){
        // console.log(1)
        chonAnhNayNe(i)
    })
}