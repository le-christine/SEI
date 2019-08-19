// Bubble Sort
public static void main(String[] args) {
    int[] unsorted = {10, 15, 1, 3, 14, 2, 17, 9, 51, 6, 16, 22, 8};

    bubbleSort(unsorted);

    for(int i = 0; i < unsorted.length; i++) {
        System.out.println(unsorted[i]);
    }
}

private static void bubbleSort(int[] unsorted) {
    int n = unsorted.length;

    int temp = 0;

    for (int i = 1; i < n; i++) {
        for (int j = 0; j < (n-1); j++) {
            if (unsorted[j] > unsorted[j + 1]) {
                temp = unsorted[j + 1];
                unsorted[j+1] = unsorted[j];
                unsorted[j] = temp;
            }
        }
    }
}

// Insertion Sort
public class MyClass {
    public static void main(String args[]) {
        int[] unsorted = {7, 3, 2, 4, 9, 1, 14, 12};
 
        int[] sorted = doInsertionSort(unsorted);

        for(int i = 0; i < sorted.length; i++) {
            System.out.println(sorted[i]);
        }
    }

    public static int[] doInsertionSort(int[] input) {
        int temp;

        for (int i = 1; i < input.length; i++) {
            for (int j = i; j > 0; j--) {
                if (input[j] < input[j-1]) {
                    temp = input[j];
                    input[j] = input[j-1];
                    input[j-1] = temp;
                }
            }
        }

        return input;
    }
}
