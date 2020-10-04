var carre = document.getElementById("btn");



let btnMouvement = 0;
function deplacement(){
  var id = setInterval(frame, 10);

  setTimeout(deplacement,2000); 
  function frame(){
    btnMouvement++;
    carre.style.marginBottom = btnMouvement +"px";
  }
  }
  deplacement();
/*
  var carreX = 0;
function appuiBtDeplacerCarre()
{
    var id = setInterval(frame, 10);
    function frame()
    {
        carreX++;
        document.getElementById("elementADeplacer").style.left = carreX + "px";
    }
}*/