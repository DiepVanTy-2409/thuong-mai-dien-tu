document.addEventListener('DOMContentLoaded', function () {
    // Định nghĩa hàm handleFileUpload
    function handleFileUpload(button, dragArea) {
        const input = dragArea.querySelector('input');

        button.addEventListener('click', () => {
            input.click();
        });

        input.addEventListener('change', function () {
            const file = this.files[0];
            showFile(file);
        });

        function showFile(file) {
            if (file) {
                const fileType = file.type;
                const validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
                if (validExtensions.includes(fileType)) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const imgTag = `<img src="${reader.result}" alt="Uploaded Image">`;
                        dragArea.innerHTML = imgTag;
                    };
                    reader.readAsDataURL(file);
                } else {
                    alert("Đây không phải là file ảnh");
                    dragText.textContent = "Kéo và Thả để tải ảnh lên";
                }
            }
        }
    }

    // Gọi hàm handleFileUpload cho mỗi khu vực kéo và thả
    const dragArea1 = document.querySelector('.drag-area_img1');
    const button1 = dragArea1.querySelector('.choose');
    handleFileUpload(button1, dragArea1);

    const dragArea2 = document.querySelector('.drag-area_img2');
    const button2 = dragArea2.querySelector('.choose');
    handleFileUpload(button2, dragArea2);

    // Code cho việc kéo và thả ảnh
    const dropArea = document.querySelector('.drag-area');
    const dragText = dropArea.querySelector('.text-lg');
    const button = dropArea.querySelector('.choose');
    const input = dropArea.querySelector('input');

    button.addEventListener('click', () => {
        input.click();
    });

    input.addEventListener('change', function () {
        const file = this.files[0];
        showFile(file);
    });

    dropArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        dragText.textContent = "Thả để tải ảnh lên";
    });

    dropArea.addEventListener('dragleave', (event) => {
        event.preventDefault();
        dragText.textContent = "Kéo và Thả để tải ảnh lên";
    });

    dropArea.addEventListener('drop', (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        showFile(file);
    });

    // Hiển thị ảnh khi được kéo và thả
    function showFile(file) {
        if (file) {
            const fileType = file.type;
            const validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
            if (validExtensions.includes(fileType)) {
                const reader = new FileReader();
                reader.onload = () => {
                    const imgTag = `<img src="${reader.result}" alt="Uploaded Image">`;
                    dropArea.innerHTML = imgTag;
                };
                reader.readAsDataURL(file);
            } else {
                alert("Đây không phải là file ảnh");
                dragText.textContent = "Kéo và Thả để tải ảnh lên";
            }
        }
    }
});
