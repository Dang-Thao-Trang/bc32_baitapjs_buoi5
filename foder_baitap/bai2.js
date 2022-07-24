function countKw() {
  //input
  let customer = document.getElementById("customer").value;
  let electric = +document.getElementById("electric").value;
  //process
  let money = 0;
  if (electric <= 50) {
    //50kg : 500;
    money += electric * 500;
  } else if (electric <= 100) {
    // 50-100: 650
    money += 50 * 500 + (electric - 50) * 650;
  } else if (electric <= 200) {
    // 100-200: 850
    money += 50 * 500 + 50 * 650 + (electric - 100) * 850;
  } else if (electric <= 350) {
    // 200-350: 1100
    money += 50 * 500 + 50 * 650 + 100 * 850 + (electric - 200) * 1100;
  } else {
    // >350: 1300
    money +=
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (electric - 350) * 1300;
  }
  console.log(money);
  //output
  let divResult = document.getElementById("electricBill");
  divResult.style.display = "block";
  divResult.innerHTML =
    "Hóa đơn điện của khách hàng: " +
    customer +
    "<br/> " +
    money.toLocaleString() +
    " vnd.";
}
