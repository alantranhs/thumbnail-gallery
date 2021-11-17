
  var slideIndex = 1;
  var $lightgallery = document.getElementById('lightgallery');

  function currentDiv(n) {
    showDivs(slideIndex = n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("js-slider");
    var items = document.getElementsByClassName("js-img-thumb");

    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    for (i = 0; i < items.length; i++) {
      items[i].className = items[i].className.replace("-solid", "");
    }
    x[slideIndex-1].style.display = "block";
    items[slideIndex-1].className += "-solid";
  }

  showDivs(slideIndex);

  lightGallery($lightgallery, {
    download: false,
  });
