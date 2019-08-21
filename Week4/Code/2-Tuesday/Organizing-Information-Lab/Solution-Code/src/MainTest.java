import org.junit.jupiter.api.Assertions;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {

    @org.junit.jupiter.api.Test
    void findLargestAndSmallest() {
        Assertions.assertArrayEquals(new int[]{1, 7}, Main.findLargestAndSmallest(new int[]{1, 5, 7, 2, 3}));
        Assertions.assertArrayEquals(new int[]{3, 3}, Main.findLargestAndSmallest(new int[]{3, 3}));
        Assertions.assertArrayEquals(new int[]{1, 5}, Main.findLargestAndSmallest(new int[]{1, 2, 3, 4, 5}));
        Assertions.assertArrayEquals(new int[]{7, 7}, Main.findLargestAndSmallest(new int[]{7, 7, 7, 7, 7, 7}));
        Assertions.assertArrayEquals(new int[]{3, 5}, Main.findLargestAndSmallest(new int[]{5, 4, 3}));
        Assertions.assertArrayEquals(new int[]{-5, 5}, Main.findLargestAndSmallest(new int[]{5, 4, -5, 3}));
    }

    @org.junit.jupiter.api.Test
    void removeDuplicatesFromArray() {
        Assertions.assertArrayEquals(new int[]{1, 7}, Main.findLargestAndSmallest(new int[]{1, 5, 7, 2, 3}));
        Assertions.assertArrayEquals(new int[]{3, 3}, Main.findLargestAndSmallest(new int[]{3, 3}));
        Assertions.assertArrayEquals(new int[]{1, 5}, Main.findLargestAndSmallest(new int[]{1, 2, 3, 4, 5}));
        Assertions.assertArrayEquals(new int[]{7, 7}, Main.findLargestAndSmallest(new int[]{7, 7, 7, 7, 7, 7}));
        Assertions.assertArrayEquals(new int[]{3, 5}, Main.findLargestAndSmallest(new int[]{5, 4, 3}));
        Assertions.assertArrayEquals(new int[]{-5, 5}, Main.findLargestAndSmallest(new int[]{5, 4, -5, 3}));
    }

    @org.junit.jupiter.api.Test
    void sumOfTwoLargest() {
        Assertions.assertArrayEquals(new int[]{1, 7}, Main.findLargestAndSmallest(new int[]{1, 5, 7, 2, 3}));
        Assertions.assertArrayEquals(new int[]{3, 3}, Main.findLargestAndSmallest(new int[]{3, 3}));
        Assertions.assertArrayEquals(new int[]{1, 5}, Main.findLargestAndSmallest(new int[]{1, 2, 3, 4, 5}));
        Assertions.assertArrayEquals(new int[]{7, 7}, Main.findLargestAndSmallest(new int[]{7, 7, 7, 7, 7, 7}));
        Assertions.assertArrayEquals(new int[]{3, 5}, Main.findLargestAndSmallest(new int[]{5, 4, 3}));
        Assertions.assertArrayEquals(new int[]{-5, 5}, Main.findLargestAndSmallest(new int[]{5, 4, -5, 3}));
    }
}