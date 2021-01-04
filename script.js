var baseA
var baseB
var height
var area
document.getElementById('trapezoidarea').addEventListener("click", myfunction)
  function myfunction () {
    baseA=document.getElementById('a').value
    baseB=document.getElementById('b').value
    height=document.getElementById('h').value
    baseA = +baseA
    baseB = +baseB
    height = +height
    area=[(baseA+baseB)/2]*height
    alert(area)
  }
  