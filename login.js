function addUser() {
    user_1 = document.getElementById("user1").value;
    user_2 = document.getElementById("user2").value;

    localStorage.setItem("user_1" , user_1);
    localStorage.setItem("user_2" , user_2);

    window.location = "quiz_game.html";
}