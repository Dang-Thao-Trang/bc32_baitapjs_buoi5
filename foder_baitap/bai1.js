function searchPoint() {
  //input
  let benchmark = +document.getElementById("benchmark").value;
  let subject = document.getElementById("subject").value;
  let area = document.getElementById("area").value;
  let point1 = +document.getElementById("point1").value;
  let point2 = +document.getElementById("point2").value;
  let point3 = +document.getElementById("point3").value;
  //process
  //Đây là hàm xuất kết quả khu vực ưu tiên
  let aArea = function () {
    let addArea = "";
    if (area === "areaX") {
      addArea = 0;
    } else if (area === "areaA") {
      addArea = 2;
    } else if (area === "areaB") {
      addArea = 1;
    } else {
      addArea = 0.5;
    }
    return addArea;
  };
  //Đây là hàm xuất kết quả đối tượng được ưu tiên
  let aSubject = function () {
    let addSubject = "";
    if (subject === "subject0") {
      addSubject = 0;
    } else if (subject === "subject1") {
      addSubject = 2.5;
    } else if (subject === "subject2") {
      addSubject = 1.5;
    } else if (subject === "subject3") {
      addSubject = 0.5;
    }
    return addSubject;
  };

  let sumPoint = 0;
  sumPoint += point1 + point2 + point3 + aArea() + aSubject();
  console.log(sumPoint);

  if (benchmark > 30 || point1 > 10 || point2 > 10 || point3 > 10) {
    alert("Vui lòng nhập số điểm phù hợp!!!");
  } else if (!benchmark || !point1 || !point2 || !point3) {
    alert("Vui lòng nhập đầy đủ thông tin");
  } else if (point1 === 0 || point2 === 0 || point3 === 0) {
    resultPoint = "Bạn đã rớt, vì có điểm khống chế (Điểm = 0)";
  } else if (sumPoint >= benchmark) {
    resultPoint =
      "Xin chúc mừng bạn đã đậu, tổng điểm bạn đạt được là: " +
      sumPoint +
      " điểm";
  } else if (sumPoint < benchmark) {
    resultPoint =
      "Bạn không đậu, tổng điểm bạn đạt được: " + sumPoint + " điểm";
  }
  //output
  document.getElementById("result").innerHTML = resultPoint;
}
