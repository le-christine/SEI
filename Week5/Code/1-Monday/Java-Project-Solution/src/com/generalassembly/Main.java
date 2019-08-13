package com.generalassembly;

import java.util.Scanner;

/* Rock Paper Scissors Solution code
* CREATED BY: Michael Sy
* FOR General Assembly - AmEx Java Immersive
* Not intended to fulfill all the Feature or Technical Requirements.
* */
public class Main {

    static String history = "";

    public static void main(String[] args) {
        int choice = mainMenu();
        while(gameRunner(mainMenu()));
    }

    // Runs the main menu portion.
    // Return: Integer - A choice depending on the user input (Note: Enum can be used for this as well)
    public static int mainMenu(){
        System.out.println("Welcome to Rock, Paper, Scissors!\n");
        System.out.println("MAIN MENU\n=====\n");
        Scanner sc = new Scanner(System.in);
        int choice = 0;
        while (choice == 0){
            printMenuOptions();
            String input = sc.nextLine();
            choice = menuChoice(input);
            if(choice == 0){
                System.out.println("Enter a valid option.");
            }
        }

        return choice;
    }

    // Method which runs the RPS game.
    // Param: A user-inputt choice from the main menu
    // Returns: True if the game is running. False if user wants to quit.
    private static boolean gameRunner(int choice){
        Scanner sc = new Scanner(System.in);
        // Quit
        if (choice == 3){
            System.out.println("Good bye!");
            return false;
        }
        // Game History
        if (choice == 2) System.out.println(history);
        // Play
        if (choice == 1){
            System.out.println("Type 'rock', 'paper', or 'scissors' to play.\n" +
                    "Type 'quit' to go back to the main menu.");
            int playerMove = 0;
            boolean playerWin = false;
            int computerMove = 0;
            while (playerMove == computerMove) {
                playerMove = moveChoice(sc.nextLine());
                if (playerMove == 0) {
                    System.out.println("Enter a valid option.");
                } else if (playerMove == 4) {
                    System.out.println("Returning to main menu... ");
                    return true;
                }
                //Check if user and opponent have the same move, or resolve movements
                else {
                    computerMove = computerTurn();
                    printMovement("Player", playerMove);
                    if (computerMove == playerMove) System.out.println("Tied! Move again!");
                    else playerWin = resolveGame(playerMove, computerMove);
                }
            }
            if(playerWin){
                System.out.println("Player wins!");
            }
            else System.out.println("Player loses :(");
        }
        return true;
    }

    ////// HELPER METHODS //////////


    // Displays options.
    private static void printMenuOptions() {
        System.out.println("1. Type 'play' to play.");
        System.out.println("2. Type 'history' to view your game history.");
        System.out.println("3. Type 'quit' to stop playing.\n");
    }

    private static int menuChoice(String input){
        switch(input.toLowerCase()){
            case "play":
                return 1;
            case "history":
                return 2;
            case "quit":
                return 3;
            default:
                return 0;
        }
    }

    private static int moveChoice(String input){
        switch(input.toLowerCase()){
            case "rock":
                return 1;
            case "paper":
                return 2;
            case "scissors":
                return 3;
            case "quit":
                return 4;
            default:
                return 0;
        }
    }
    private static int computerTurn(){
        int choice = (int)(Math.random()*3)+1;
        printMovement("Computer", choice);
        return choice;
    }

    // Method to print a move by its number.
    // Rock = 1, Paper = 2, Scissors = 3
    private static void printMovement(String player, int choice){
        String move = moveType(choice);
        switch (choice){
            case 1:
                System.out.printf("%s picked %s!\n", player, move);
                break;
            case 2:
                System.out.printf("%s picked %s!\n", player, move);
                break;
            case 3:
                System.out.printf("%s picked %s!\n", player, move);
                break;
        }
    }

    private static String moveType(int choice){
        switch (choice){
            case 1:
                return "rock";
            case 2:
                return "paper";
            case 3:
                return "scissors";
            default:
                return "ERR";
        }
    }
    // Resolves a player vs computer game. True if player wins. False if he loses.
    // Using if statements is an alternative to switch-case
    private static boolean resolveGame(int a, int b){
        // Rock = 1, Paper = 2, Scissors = 3

        if (a == 1) {
            if (b == 2) return resolveGameToHistory(a, b, "LOSS");
            if (b == 3) return resolveGameToHistory(a, b, "WIN");
        }
        if (a == 2) {
            if (b == 1) return resolveGameToHistory(a, b, "WIN");
            if (b == 3) return resolveGameToHistory(a, b, "LOSS");
        }
        if (a == 3) {
            if (b == 1) return resolveGameToHistory(a, b, "LOSS");
            if (b == 2) return resolveGameToHistory(a, b, "WIN");
        }
        // Need a default answer, but should never reach this.
        return false;
    }
    private static boolean resolveGameToHistory(int a, int b, String win_loss){
        String format = String.format("%s:Player picked %s, Computer picked %s", win_loss, moveType(a),moveType(b));
        history+=format+"\n";
        if(win_loss.equals("LOSS")) return false;
        else return true;
    }
}
