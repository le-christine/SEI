package com.generalassembly.gc;

import java.util.Stack;

public class StackExample {
        public static void main(String[] args) {
            Stack<Integer> stack = new Stack<>();
            stack.add(10);
            stack.add(20);
            stack.add(30);
            stack.add(40);
            stack.add(50);
            for (int x = 0; x < stack.size(); x++) {
                System.out.println(stack.get(x));
            }
            stack.pop();
            for (int x = 0; x < stack.size(); x++) {
                System.out.println(stack.get(x));
            }
        }
    }
}