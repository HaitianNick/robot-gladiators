var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 76;

var fight = function() {
    // Alert players that they are starting the round 
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of `playerAttack' from the value of 'enamyHealth' and use that result to update the value in the `enemyHealth` variable.
    enemyHealth = enemyHealth - playerAttack;

    // Log the resulting message to the console so we know that it worked.
    console.log(playerName + " attacked! " + enemyName + " now has " + enemyHealth + " health remaining.");
   
    // check enemies health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

     // Log a resulting message to the console so we know that it worked.
     console.log(enemyName + " attacked! " + playerName + " now has " +  playerHealth + " health remaining.");

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

};

fight();
