// 로또 번호 생성 함수
function getRandomLotto(numbers, count) {
  // 선택된 요소를 저장하는 배열
  let selectedNumbers = [];
  // count 만큼 요소 선택
  while (selectedNumbers.length < count) {
    // 랜덤하게 인덱스 선택 (랜덤함수가 0~1사이 값을 가지므로 numbers의 길이만큼 곱해주고 floor함수로 정수를 만들어 줌)
    let randomIndex = Math.floor(Math.random() * numbers.length);
    // numbers 배열에서 랜덤한 인덱스를 선택하여 number에 저장
    let number = numbers[randomIndex];
    // 선택된 요소가 없으면 추가
    if (!selectedNumbers.includes(number)) {
      selectedNumbers.push(number);
    }
  }
  return selectedNumbers;
}

// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");
// ballContainer
const ballContainer = document.querySelector(".ballContainer");

btn.addEventListener("click", function () {
  // 1부터 45까지의 번호 배열 생성
  const numbers = Array.from({ length: 45 }, (_, index) => index + 1);
  // 추첨할 번호 개수
  const count = 7;
  // 번호 추첨
  const selectedNumbers = getRandomLotto(numbers, count);

  // 선택된 번호를 하나씩 ball 클래스를 가진 요소에 표시
  let index = 0; // 번호 배열 인덱스
  const interval = setInterval(function () {
    if (index < selectedNumbers.length) {
      // 6번째 번호가 선택되면 + 버튼 표시
      if (index === 6) {
        // p 태그 생성
        const ballElement = document.createElement("p");
        // plus 클래스 추가
        ballElement.classList.add("plus");
        // + 버튼 표시
        ballElement.textContent = "+";
        // ballContainer에 + 버튼 표시
        ballContainer.appendChild(ballElement);
      }
      // p 태그 생성
      const ballElement = document.createElement("p");
      // ball 클래스 추가
      ballElement.classList.add("ball");
      // 선택된 번호를 표시
      ballElement.textContent = selectedNumbers[index];
      // ballContainer에 번호 표시
      ballContainer.appendChild(ballElement);
      index++;
    } else {
      // 모든 번호가 표시된 후에 interval 정지
      clearInterval(interval);
    }
  }, 1000); // 1초마다 번호 표시
});
