$(document).ready(function () {
    var crystalGame = {


        currentScore: 0,
        crystalScores: [],
        gameRunning: false,

        //crystalize() initializes the game.

        crystalize: function () {
            this.currentScore = 0;
            this.crystalScores = [];
            while (this.crystalScores.length < 4) {
                var num = (Math.floor(Math.random() * 10) + 1) * 50;
                if (this.crystalScores.indexOf(num) > -1) continue;
                this.crystalScores[this.crystalScores.length] = num;
            }
            console.log(this.crystalScores);
            this.gameRunning = true;
        },

        clickStart: $("#overlay").click(function() {
            console.log("hello");
            $("#overlay").css("visibility","hidden");
            $("#title-div").css("visibility","visible");
            $("#crystal-buttons").css("visibility","visible");
        }),



        crystalAppear: function() {
            if (gameRunning) {

            }
        },






        scorePoints: $(".crystal").click(function () {
            if (!crystalGame.gameOver) {
                crystalGame.currentScore += crystalGame.crystalScores[$(".crystal").index(this)];
                $("#current-score").text(crystalGame.currentScore);
                if (crystalGame.currentScore > crystalGame.targetScore) {
                    crystalGame.loseGame();
                } else if (crystalGame.currentScore === crystalGame.targetScore) {
                    crystalGame.winGame();
                }
            }
        }),
        //new game button, hidden during play, pops up so the game isn't automatically restart only functions if game is over
        newGame: $("#new-game-button").click(function () {
            if (crystalGame.gameOver) {
                $("#new-game-button").css("visibility", "hidden");
                $("#win-loss-message").text("");
                crystalGame.crystalize();
            }
        }),
        //lose game: losses incremented and displayed, game over pops up new game button
        loseGame: function () {
            this.losses++;
            $("#losses-count").text(crystalGame.losses);
            this.gameOver = true;
            $("#win-loss-message").text("You lose!");
            $("#new-game-button").css("visibility", "visible");
        },
        //win game: wins incremented and displayed, game over pops up new game button
        winGame: function () {
            this.wins++;
            $("#wins-count").text(crystalGame.wins);
            this.gameOver = true;
            $("#win-loss-message").text("You win!");
            $("#new-game-button").css("visibility", "visible");
        },
    }
    crystalGame.crystalize();
});