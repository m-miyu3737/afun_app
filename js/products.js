function openModal(type) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modalText");

  // 表示内容の切り替え
  if (type === "商品説明") {
    modalText.innerHTML = "こちらは商品の説明文です。<br>スパイスの風味が効いた特製カレーです。";
  } else if (type === "原材料") {
    modalText.innerHTML = "原材料：鶏肉、玉ねぎ、トマト、スパイス各種、塩、油など。";
  } else if (type === "アレルゲン") {
    modalText.innerHTML = "アレルゲン：乳成分・小麦・鶏肉が含まれます。";
  } else {
    modalText.innerHTML = "情報が見つかりません。";
  }

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}