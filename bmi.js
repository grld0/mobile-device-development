function hitungbmi(weight, height) {
    return weight / (height * height);
  }
  
  function kategoribmi(bmi) {
    if (bmi < 18.5) {
      return "Dibawah normal";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Berat normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "Berat berlebihan";
    } else {
      return "Obesitas";
    }
  }
  
module.exports = {
    hitungbmi,kategoribmi
};