let player1_score = 0;
let player2_score = 0;

function adduser() 
{
  player1_name=document.getElementById("player1_name_input").value; 
  player2_name=document.getElementById("player2_name_input").value;  
  localStorage.setItem("player1_name",player1_name);
  localStorage.setItem("player2_name",player2_name);
  window.location="game_page.html";

  document.getElementById("player_1_score").innerHTML = player1_name + player1_score;
  document.getElementById("player_2_score").innerHTML = player2_name + player2_score;

}


