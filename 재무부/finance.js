// finance.js

// 입력 폼 요소들을 가져옵니다.
const typeSelect = document.getElementById('type');
const amountInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');
const financeData = document.getElementById('finance-data');

// 입력 폼 제출 시 실행되는 함수
function handleSubmit(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    // 입력된 값 가져오기
    const type = typeSelect.value;
    const amount = amountInput.value;
    const description = descriptionInput.value;

    // 입력된 내용을 테이블에 추가
    addFinanceData(type, amount, description);

    // 입력 후 입력 폼 초기화
    amountInput.value = '';
    descriptionInput.value = '';
}

// 재무 내역을 테이블에 추가하는 함수
function addFinanceData(type, amount, description) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${type}</td>
        <td>${amount}</td>
        <td>${description}</td>
    `;
    financeData.appendChild(newRow);
}

// 폼 제출 이벤트 리스너 추가
document.querySelector('form').addEventListener('submit', handleSubmit);
