import java.util.Arrays;

public class ArrayManipulationDemo {
    public static void main(String args[]) {
        // Initialize array:
        int[] primeNumbers = {5, 3, 11, 7, 2}; // next 13, 17, 19, 23

        // Get the element at a specified index:
        int firstPrime = primeNumbers[0];

        System.out.println("index 0: " + firstPrime);
        // Print it:
        System.out.println(Arrays.toString(primeNumbers));

        // Sort it:
        Arrays.sort(primeNumbers);
        System.out.println(Arrays.toString(primeNumbers));

        // Get its length:
        System.out.println(primeNumbers.length); // it's a constant, not a method (we'll talk about this later)

        // See if value is found in array, returns -1 if not found.
        // Note: binarySearch() only works if the array is sorted:
        int indexOf11 = Arrays.binarySearch(primeNumbers, 11);
        System.out.println("index of 11: " + indexOf11);

        // Check: how to get the value?
        // if(indexOf11 >= 0) {
        System.out.println("looking for 11, found value: " + primeNumbers[indexOf11]);
        // }
    }
}