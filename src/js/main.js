fetch("./html/main_page.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("mainPageContent").innerHTML = html;
  });
