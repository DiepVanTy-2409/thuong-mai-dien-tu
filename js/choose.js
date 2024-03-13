document.addEventListener('DOMContentLoaded', function () {
    // Định nghĩa hàm handleFileUpload
    function handleFileUpload(button, dragArea) {
        const input = dragArea.querySelector('input');

        button.addEventListener('click', () => {
            input.click();
        });

        input.removeEventListener('change', fileChangeListener); // Xóa sự kiện lắng nghe trước khi thêm một sự kiện mới
        input.addEventListener('change', fileChangeListener); // Thêm một sự kiện lắng nghe mới

        // Code cho việc kéo và thả ảnh
        dragArea.addEventListener('dragover', dragOverHandler);
        dragArea.addEventListener('dragleave', dragLeaveHandler);
        dragArea.addEventListener('drop', dropHandler);

        function fileChangeListener() {
            const file = this.files[0];
            showFile(file, dragArea); // Chuyển cả dragArea vào hàm showFile
        }

        function dragOverHandler(event) {
            event.preventDefault();
            dragText.textContent = "Thả để tải ảnh lên";
        }

        function dragLeaveHandler(event) {
            event.preventDefault();
            dragText.textContent = "Kéo và Thả để tải ảnh lên";
        }

        function dropHandler(event) {
            event.preventDefault();
            const file = event.dataTransfer.files[0];
            showFile(file, dragArea); // Chuyển cả dragArea vào hàm showFile
        }
    }

    // Gọi hàm handleFileUpload cho mỗi khu vực kéo và thả
    const dragArea1 = document.querySelector('.drag-area_img1');
    const button1 = dragArea1.querySelector('.choose_img1');
    handleFileUpload(button1, dragArea1);

    const dragArea2 = document.querySelector('.drag-area_img2');
    const button2 = dragArea2.querySelector('.choose_img2');
    handleFileUpload(button2, dragArea2);

    // Hiển thị ảnh khi được kéo và thả
    function showFile(file, dragArea) { // Thêm tham số dragArea
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
});
