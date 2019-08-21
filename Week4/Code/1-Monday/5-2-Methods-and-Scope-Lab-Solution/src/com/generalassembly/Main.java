package com.generalassembly;

import java.util.Scanner;

public class Main {

    public static void main(String[] args){
        printResults();
    }

    static void printResults(){
        System.out.println("Max of 2 or 5 is: "+ maxOfTwoNumbers(2,5));
//        askThree();
        System.out.println("Is character 'a' a vowel?: " + isCharacterAVowel('a'));
        System.out.println("Number of arguments in this function numberOfArguments(): "+ numberOfArguments());
        System.out.println("Number of arguments in this function numberOfArguments(0): "+ numberOfArguments(0));
        System.out.println("Number of arguments in this function numberOfArguments(0,0): "+ numberOfArguments(0,0));
        System.out.println("The reverse of apple is: "+ reverseString("apple"));

        String[] words = {"apple","watermelon","durian","orange"};
        System.out.println("The length of the longest word between 'apple', 'watermelon', 'durian', and 'orange' is :"+findLongestWord(words) );
        System.out.println("Filtering words longer than 5: ");
        filterLongWords(words, 5);
    }
    static int maxOfTwoNumbers(int a, int b){
        if (a > b) return a;
        else return b;
    }

    static void askThree(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 3 numbers to determine the max between them:");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        System.out.println(maxOfThree(a,b,c));
    }
    static int maxOfThree(int a, int b, int c){
        return Math.max(Math.max(a,b),c);
    }

    static boolean isCharacterAVowel(char ch){
        switch(ch){
            case 'a':
                return true;
            case 'e':
                return true;
            case 'i':
                return true;
            case 'o':
                return true;
            case 'u':
                return true;
            default:
                return false;
        }
    }


    static int numberOfArguments(){
        return 0;
    }
    static int numberOfArguments(int i){return 1;}
    static int numberOfArguments(int i,int j){return 2;}

    static String reverseString(String str){
        // If we went over Immutable objects: Why is this inefficient?
        String result = "";
        for(int i = str.length()-1; i >= 0; i--){
            result+=str.charAt(i);
        }
        return result;
    }

    static int findLongestWord(String[] words){
        int max = 0;
        for(int i = 0; i < words.length;i++){
            if (max < words[i].length()) max = words[i].length();
        }
        return max;
    }
    static void filterLongWords(String[] words, int count){
        for(int i = 0; i < words.length;i++){
            if (count < words[i].length()) System.out.println(words[i]);
        }
    }
}

