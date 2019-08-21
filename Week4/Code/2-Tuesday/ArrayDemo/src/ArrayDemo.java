public class ArrayDemo {
    public static void main(String args[]) {
        // Declares an array of integers.
        int[] anArray; // Note data type, followed by [] indicating array.

        // Allocates memory for 10 integers:
        anArray = new int[10];

        // Assign elements:
        anArray[0] = 111;
        anArray[1] = 222; // And so on...

        // Access elements:
        System.out.println("Element at index 0: " + anArray[0]);
        System.out.println("Element at index 1: " + anArray[1]); // and so on
        System.out.println("The array has a size of " + anArray.length);
    }
}
