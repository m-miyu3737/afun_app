function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function submitOrder() {
  // ここに、管理者へ通知できるような処理を追加する
  window.location.href = "complete.html"; // 注文完了画面へリダイレクト
}