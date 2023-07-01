document.addEventListener('DOMContentLoaded', function() {
  var size1Input = document.getElementById('size1');
  var size2Input = document.getElementById('size2');
  var resultInput = document.getElementById('result');
  var timeout;
  var waitTime = 2000;

  size1Input.addEventListener('input', updateResultWithDelay);
  size2Input.addEventListener('input', updateResultWithDelay);

  function updateResultWithDelay() {
    clearTimeout(timeout);
    timeout = setTimeout(updateResult, waitTime);
  }

  size1Input.addEventListener('input', updateResult);
  size2Input.addEventListener('input', updateResult);

  function updateResult() {
    clearTimeout(timeout);
    var size1 = size1Input.value;
    var size2 = size2Input.value;
    
    if (size1 !== "" && size2 !== "") {
      var requestData = JSON.stringify({
        size1: size1,
        size2: size2
      });

      axios.post('https://script.google.com/macros/s/AKfycbyUfBREVUBxwk2ljW3WaFHacaCFRDkHj7xUtygzMCnEJkLjYkVsuJby3uFS20TOcK1D/exec', requestData)
        .then(function(response) {
          resultInput.value = response.data.result;
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});