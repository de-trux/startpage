function updateGreeting() {
    var date = new Date();
    var hour = date.getHours();
    var greeting;
    if (hour >= 0 && hour < 12) {
      greeting = "Selamat Pagi";
    } else if (hour >= 12 && hour < 15) {
      greeting = "Selamat Siang";
    } else if (hour >= 15 && hour < 18) {
      greeting = "Selamat Sore";
    } else {
      greeting = "Selamat Malam";
    }
    document.getElementById("greeting").innerHTML = greeting;
  }