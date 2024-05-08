// script.js
function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const uploadedFilesContainer = document.getElementById('uploadedFiles');

    // businessfileDiv 변수 선언 및 초기화
    const businessFileDiv = document.getElementById('businessfile');

    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // 업로드된 파일의 이름 가져오기
        const fileName = file.name;

        // 새로운 파일 제목을 담을 p 요소 생성
        const newFileElement = document.createElement('p');
        newFileElement.textContent = fileName;

        // 기존 파일 목록에 새로운 파일 제목을 추가 (최신순으로 추가)
        businessFileDiv.prepend(newFileElement);

        const fileItem = document.createElement('div');
        fileItem.textContent = `File Name: ${file.name}, Size: ${file.size} bytes`;

        // 여기서 파일을 업로드하거나 다른 작업을 수행할 수 있습니다.

        uploadedFilesContainer.appendChild(fileItem);
    }
}
