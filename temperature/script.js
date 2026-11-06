
const API_URL = "http://localhost:5000/api/sensor";

async function updateSensor() {
  const connection = document.getElementById("connection");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("データ取得エラー");
    }

    const data = await response.json();

    document.getElementById("temperature").innerHTML =
      `${data.temperature}<span>℃</span>`;

    document.getElementById("humidity").innerHTML =
      `${data.humidity}<span>%</span>`;

    connection.textContent = "接続中";
    connection.style.color = "#2eaa70";

    document.getElementById("updated").textContent =
      new Date().toLocaleTimeString("ja-JP");

  } catch (error) {
    connection.textContent = "未接続";
    connection.style.color = "#e05252";
    console.error(error);
  }
}

updateSensor();
setInterval(updateSensor, 5000);
