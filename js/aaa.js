
const dropArea = document.querySelector('.drag-area');
const dragText = dropArea.querySelector('.text-lg');
const button = dropArea.querySelector('.choose');
const input = dropArea.querySelector('input');

button.addEventListener('click', ()=>{
    input.click();
})

input.addEventListener('change', function(){
    const file = this.files[0];
    showFile(file);
})

dropArea.addEventListener('dragover',(event)=>{
    event.preventDefault();
    dragText.textContent="Thả để tải ảnh lên"
})

dropArea.addEventListener('dragleave',(event)=>{
    event.preventDefault();
    dragText.textContent="Kéo và Thả để tải ảnh lên"
})

dropArea.addEventListener('drop',(event)=>{
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    showFile(file)
})

function showFile(file){
    let fileType = file.type;
    let valiExtensions = ['image/jpeg', 'image/jpg','image/png'];
    if(valiExtensions.includes(fileType)){
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const fileUrl = fileReader.result;
            const imgTag = `<img src="${fileUrl}">`;


            dropArea.innerHTML = imgTag
        }
        fileReader.readAsDataURL(file);
    }else
        alert("Đây không phải là file ảnh");
        dragText.textContent="Kéo và Thả để tải ảnh lên"
}