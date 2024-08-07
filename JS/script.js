document.getElementById("convert").addEventListener("click", function () {
  const temperatureInput = document.getElementById("temperature").value.trim();
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let convertedTemperature;

  if (!isValidNumber(temperatureInput)) {
    document.getElementById("result").textContent =
      "Please enter a valid number";
    document.getElementById("result").style.color = "#fff";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.fontSize = "24px";
    return;
  }

  const numericInput = parseFloat(temperatureInput);

  if (fromUnit === toUnit) {
    document.getElementById("result").innerHTML =
      "No conversion needed.<br>Temperature remains the same.";
    document.getElementById("result").style.color = "#fff";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.fontSize = "24px";
  } else {
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      convertedTemperature = (numericInput * 9) / 5 + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      convertedTemperature = ((numericInput - 32) * 5) / 9;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
      convertedTemperature = numericInput + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
      convertedTemperature = numericInput - 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      convertedTemperature = ((numericInput - 32) * 5) / 9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
      convertedTemperature = ((numericInput - 273.15) * 9) / 5 + 32;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Converted Temperature is: ${convertedTemperature.toFixed(
      2
    )} ${toUnit}`;
    resultDiv.style.color = "#fff";
    resultDiv.style.display = "block";
    resultDiv.style.fontSize = "24px";
  }
});

function isValidNumber(value) {
  return /^-?\d+(\.\d+)?$/.test(value);
}

document.addEventListener('DOMContentLoaded', function() {
  function setOptionBackgrounds(selectElement) {
    const options = selectElement.options;
    for (let i = 0; i < options.length; i++) {
      options[i].style.backgroundColor = '#16222A';
      options[i].style.color = 'white';
    }
  }

  const selectElements = document.querySelectorAll('select');
  selectElements.forEach(selectElement => {
    setOptionBackgrounds(selectElement);      
    selectElement.addEventListener('change', function() {
      setOptionBackgrounds(selectElement);
    });
  });
});

