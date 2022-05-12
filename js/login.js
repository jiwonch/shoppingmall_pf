const email = document.getElementById("email");
const password = document.getElementById("password");

function login_f() {
    if (email.value == "cherry@dot.com") {
        if (password.value == "12345") {
            location.href = 'index.html';
        } else {
            alert('비밀번호를 다시 입력하세요.')
        }
    } else {
        alert('로그인에 실패했습니다.');
    }
}