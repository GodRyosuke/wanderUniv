let navLinks = document.getElementById('navLinks');
// 3重線をクリックされたらメニュー開く
document.querySelectorAll('.fa-bars').forEach(function(bar) {
    bar.addEventListener('click', showMenu);
});
// メニュー閉じる
document.getElementById('navLinks').addEventListener('click',hideMenu);

function showMenu() {
    navLinks.style.right = "0";
    // navLinks.style.display = "block";
}
function hideMenu() {
    navLinks.style.right = "-200px";
    // navLinks.style.display = "none";
}