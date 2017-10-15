// 랜덤으로 색상을 만드는 함수
export function getRandomColor() {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb',
        '#1c7cd6',
        '#1098ad',
        '#0ca678',
        '#37b24d',
        '#74b816',
        '#f59f00',
        '#f76707'
    ];

    // 0 부터 12까지 랜덤 숫자 생성
    const random = Math.floor(Math.random() * 13);

    // 랜덤 색상 리턴
    return colors[random];
}
