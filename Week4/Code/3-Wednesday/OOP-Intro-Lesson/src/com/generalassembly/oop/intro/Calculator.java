package com.generalassembly.oop.intro;

public class Calculator {
    public static double sum(double first, double second) {
        double sum = first + second;
        return sum;
    }

    public static void main(String[] args) {
        Calculator calculator = new Calculator();

        System.out.println(sum(10, 20));
        System.out.println(sum(3.14, 2.718));
        System.out.println(sum(1.414, 3.14));
    }
}