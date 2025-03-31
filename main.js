const button = document.getElementById('talak');
  const div = document.getElementById('jautajums');

  function changeContent() {
    div.innerHTML = '<h1>Cik ilgi guļ karalis?</h1> <img src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2014%2F0303%2Fnba_g_ljamests_1296x729.jpg" alt="Lebron" width="500">';
  }
  button.addEventListener('click', changeContent);