import java.util.Stack;

public class BracketMatcher {

    public static void main(String[] args) {
        BracketMatcher bracketMatcher = new BracketMatcher();
        System.out.println(bracketMatcher.test("abc(123)!{def}456:D"));
        System.out.println(bracketMatcher.test("abc(123"));
        System.out.println(bracketMatcher.test("[]{}(({}))"));
    }

    public boolean test(String input) {

    }
}
