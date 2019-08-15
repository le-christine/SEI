/**
 * Created by drewmahrt on 4/26/16.
 */
public class Recursion {

    public static void main(String[] args) {
        System.out.println("CountX(xixtx): "+countX("xixtx"));
        System.out.println("CountX(aaa): "+countX("aaa"));

        System.out.println("Fib(5): "+fibonacci(5));
        System.out.println("Fib(2):"+fibonacci(2));

        System.out.println("EndX(xxre): "+endX("xxre"));
        System.out.println("EndX(xaxxhixx): "+endX("xaxxhixx"));

        //Uncomment the line below if you do the bonus
        //System.out.println("Number of sevens(87277): "+countSevens(87277));
    }

    //1. Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.
    public static int countX(String str) {
        if (str.length() == 0) {
            return 0;
        }

        if ((str.substring(0, 1).equals('x'))) {
            return countX(str.substring(1));
        }
    }

    //2. The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition.
    // The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the
    // sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on.
    // Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing
    // the start of the sequence.
    public static int fibonacci(int n) {
        if (n == 1 || n == 2) {
            return 1;
        }

        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    //3. Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to
    // the end of the string.
    private static String endX(String str) {
        int pos = str.indexOf('x');
        return (pos < 0) ?
            str :
            str.substring(0, pos) + endX(str.substring(pos + 1)) + x;
    }

    //BONUS

    // Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2.
    // (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes
    // the rightmost digit (126 / 10 is 12).
    public static int countSevens(int n) {
        if (n == 0) {
            return 0;
        }

        int num = n % 10;
        if (num == 7) {
            return 1 + countSevens(n / 10);
        }

        return countSevens(n / 10);
    }
}
