
// Import the readline module and create an interface for reading input/output from the console
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sleepTime = 0;
let restPoints = 0;

/**
 * AskSleepDuration()
 * ----------------
 * Function for basic sleep tracking.
 * - Asks the user how long they slept.
 * - Ends the program if the user types "exit".
 * - Gives encouraging responses based on hours of sleep.
 */
function AskSleepDuration() {
  rl.question('Describe how long you slept? (type "exit" to exit): ', (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Thanks for taking care of your rest!");

      if (input.toLowerCase() === "whole night") {
        sleepTime = 8;
        console.log("That’s a full night of rest!");
      } else if (input.toLowerCase() === "a few hours") {
        sleepTime = 4;
        console.log("Not bad, but try to get more sleep tonight.");
      } else if (input.toLowerCase() === "not much") {
        sleepTime = 2;
        console.log("Youe muct be tired - make time to rest.");
      } else if (input.toLowerCase() == "barely") {
        sleepTime = 1;
        console.log("Try to get some deep rest soon.");
      } else {
        console.log("Invalid input. Please try again with: whole night, a few hours, not much, or barely.");
      }

      console.log("We've estimated that you've slept " + sleepTime + " hours");
      restPoints += sleepTime;
      console.log("Total rest points: " + restPoints);
      rl.question('Do you want to track more sleep? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
          AskSleepDuration();
        } else {
          console.log("Thanks for using the sleep tracker!");
          rl.close();
        }
      });

      /*Write your code below here*/

      /*
      if(logic){
        //modify the variable and do the console log here
      }
      */

      /*Write your code above here*/
    };
  }

/**
 * TrackSleepStatus()
 * ---------------------
 * Function for advanced sleep tracking (Level 3 – Math & Logic).
 * - Asks what kind of help the user needs.
 * - Check if the answer is "track"
 * - If it's "track", then check what the sleepTime is. Add a number to the rest points based on the sleep time (see README.md)
 * - Check if the answer is "stats"
 * - If it's "stats", then give a different console log response based on the amount of sleep points
 */
function TrackSleepStatus() {
      rl.question('Describe how long you slept? (type "exit" to exit): ', (input) => {
        if (input.toLowerCase() === "exit") {
          console.log("Thanks for tracking your rest. Sweet dreams!");
          rl.close();
          return;
        }

        /*Write your code below here*/

        function TrackSleepStatus() {
          rl.question('Describe how long you slept? (type "exit" to exit): ', (input) => {
            if (input.toLowerCase() === "exit") {
              console.log("Thanks for tracking your rest. Sweet dreams!");
              rl.close();
              return;
            }
          });
        }

        function displayStats() {
          console.log(`Current restPoints: ${restPoints}`);

          if (restPoints < 30) {
            console.log("You're running low on rest — try to recharge soon.");
          } else if (restPoints >= 30 && restPoints <= 70) {
            console.log("You're in a healthy rest zone.");
          } else { // restPoints > 70
            console.log("You're well-rested and balanced!");
          }
        }

      });

      function startProgram() {
        rl.question('Enter your command: ', (command) => {
          let lowerCommand = command.toLowerCase();

          if (lowerCommand === 'restart') {
            restPoints = 0; // Reset restPoints
            console.log("Rest points have been reset.");
            startProgram(); // Ask for the command again
          } else if (lowerCommand === 'exit') {
            console.log("Exiting Sleep Tracker. Goodbye!");
            rl.close(); // Close the readline interface
          } else {
            // This handles the "no" case for the first if statement
            console.log("Invalid command. Please choose from: track, stats, restart, exit.");
            startProgram(); // Ask for the command again
          }
        });
      }
    };


  /*Write your code above here*/

  /**
   * AskInitialQuestion()
   * ----------------
   * Starting function for the sleep tracker.
   * - Asks if the user got some rest.
   * - Ends if they type "exit".
   * - Check for "yes" or "no"
   * - Leads into AskSleepDuration() or CheckSleepProblems().
   */
  function AskInitialQuestion() {
    rl.question('Describe how long you slept? (type "exit" to exit): ', (input) => {
      if (input.toLowerCase() === "exit") {
        console.log("See you next time!");
      }

      /*Write your code below here*/

      if (input.toLowerCase() === "yes") {
        console.log("Wonderful! Let's track your sleep hours.");
        AskSleepDuration();
      }
      if (input.toLowerCase() === "no") {
        console.log("No worries. Let's see how we can help.")
      }

      /*Write your code above here*/

    });
  }

  // Start the program
  AskInitialQuestion();


  //BONUS BELOW, IGNORE BELOW UNLESS YOU ARE DOING THE BONUS

  /**
   * CheckSleepProblems()
   * ---------------------
   * Function for advanced sleep tracking.
   * - Asks "what happened last night?" to get the user to respond.
   * - Based on the answer from the user, deduct restPoints as indicated in README.md
   * - Go back to the AskInitialQuestion()
   */
  function CheckSleepProblems() {
    rl.question('?QUESTION? (type "exit" to exit): ', (input) => {
      if (input.toLowerCase() === "exit") {
        console.log("Thanks for tracking your rest. Sweet dreams!");
        rl.close();
        return;
      }

      /*Write your code below here*/


      /*Write your code above here*/
    });
  }
