const checkbox = document.getElementById('checkbox');
const proceedButton = document.getElementById('proceedButton');

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    proceedButton.classList.remove('disabled');
    proceedButton.classList.add('enabled');
    proceedButton.onclick = function () {
      window.location.href = "questions.html";
    };
  } else {
    proceedButton.classList.remove('enabled');
    proceedButton.classList.add('disabled');
    proceedButton.onclick = function () {
      return false;
    };
  }
});

window.addEventListener('load', function () {

  const checkbox = document.getElementById('checkbox');
  const proceedButton = document.getElementById('proceedButton');

  checkbox.checked = false;
  proceedButton.classList.remove('enabled');
  proceedButton.classList.add('disabled');
});


