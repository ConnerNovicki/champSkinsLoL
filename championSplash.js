"use strict";
/**************ENTER CHAMP NAME HERE *******************/
var champToLoad = "Teemo";

/*Load champions via riot api*/
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      //Display champ name
      var titleDiv = document.getElementById('champName').innerHTML = champToLoad;
      getThumb(myObj);
      getSplash(myObj);
    }
};
xmlhttp.open("GET", "https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/" + champToLoad + ".json", true);
xmlhttp.send();

function getThumb(obj){
    var titleDiv = document.getElementById('title');
    var link = "https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/";
        var imgUrl = obj.data[champToLoad].image.full;
        var full_url = link + imgUrl;
        var titleImage = document.createElement("IMG");
        titleImage.src = full_url;
        titleImage.setAttribute("class","img-circle");
        titleDiv.appendChild(titleImage);
}

function getSplash(obj){
  var list = document.getElementById('target');
  var div = document.getElementById('images');
  var skins = obj.data[champToLoad].skins;
    console.log(skins);
  for (var i=0; i < skins.length; i++){
    var imgUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champToLoad + "_" + skins[i].num + ".jpg";
    console.log(imgUrl);
    //first skin to be shown on carousel
    if (i == 0){
      var target1 = document.createElement("li");
      target1.setAttribute("data-target","#pics");
      target1.setAttribute("data-slide-to", i);
      target1.setAttribute("class","active");
      list.appendChild(target1);
      /***************************************************/
      var newDiv1 = document.createElement("DIV");
      newDiv1.setAttribute("class","item active");
      div.appendChild(newDiv1);
      var imgElement1 = document.createElement("IMG");
      imgElement1.src = imgUrl;
      //imgElement1.width = 800;
      newDiv1.appendChild(imgElement1);
      /*****************************************************/
      var captionDiv1 = document.createElement("DIV");
      captionDiv1.setAttribute("class","carousel-caption");
      newDiv1.appendChild(captionDiv1);
      var caption1 = document.createElement("H3");
      caption1.innerHTML = skins[i].name;
      console.log(skins[i].name);
      captionDiv1.appendChild(caption1);
      }
    //subsequent skins
    else {
      var target2 = document.createElement("li");
      target2.setAttribute("data-target","#pics");
      target2.setAttribute("data-slide-to", i);
      list.appendChild(target2);
    /*****************************************************/
      var newDiv2 = document.createElement("DIV");
      newDiv2.setAttribute("class","item");
      div.appendChild(newDiv2);
      var imgElement2 = document.createElement("IMG")
      imgElement2.src = imgUrl;
      //imgElement2.width=800;
      newDiv2.appendChild(imgElement2);
      /*****************************************************/
      var captionDiv2 = document.createElement("DIV");
      captionDiv2.setAttribute("class","carousel-caption");
      newDiv2.appendChild(captionDiv2);
      var caption2 = document.createElement("H3");
      caption2.innerHTML = skins[i].name;
      console.log(skins[i].name);
      captionDiv2.appendChild(caption2);
    }
  }
}
