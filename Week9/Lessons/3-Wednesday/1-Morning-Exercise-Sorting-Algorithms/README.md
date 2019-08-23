---
Title: Sorting Algorithms
Type: Morning Exercise
Duration: "1:00"
Creator: Melissa Arliss (adapted from NYC-SEI)
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Sorting Algorithms

## Overview

Sorting data is a common operation. Whether we're sorting by numerical value, alphabetical order, or some custom definition, we need a way to organize our data. For example, what if you're writing a fantasy sports app, and you want to be able to list all the leaders by a certain statistical category? Sorting algorithms can help you do that.

-----

## Introduction: Bubble Sort

One of the simplest sorting algorithms is called bubble sort. Here's how it works:

1) Start at the beginning of an array (or list).
2) Compare the current item to the next.
3) Swap them if the current item is greater than the next.
4) Go to the next item.
5) Repeat steps 1–4 until no swaps take place.

> **Knowledge Check:** What are some potential pros and cons of this method?

Some advantages of bubble sort are:

1) It's simple to implement.
2) It's fast on data that's already **mostly** sorted.

The largest disadvantage of using bubble sort is that it's much slower than other algorithms when working with data that isn't already mostly sorted, as it may require a lot of iterations through the list.

Here's an example of how bubble sort operates on the array `[5, 1, 4, 2, 8]` ([source](https://en.wikipedia.org/wiki/Bubble_sort)):

__First Pass__

( 5 1 4 2 8 ) --> ( 1 5 4 2 8 ): Here, the algorithm compares the first two elements and swaps them because 5 > 1.

( 1 5 4 2 8 ) --> ( 1 4 5 2 8 ): Swap because 5 > 4.

( 1 4 5 2 8 ) --> ( 1 4 2 5 8 ): Swap because 5 > 2.

( 1 4 2 5 8 ) --> ( 1 4 2 5 8 ): Because these elements are already in order (8 > 5), the algorithm doesn't swap them.

__Second Pass__

( 1 4 2 5 8 ) --> ( 1 4 2 5 8 )

( 1 4 2 5 8 ) --> ( 1 2 4 5 8 ): Swap because 4 > 2.

( 1 2 4 5 8 ) --> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) --> ( 1 2 4 5 8 )

Now, the array is already sorted, but the algorithm needs one whole pass without any swaps to know it's done.

__Third Pass__

( 1 2 4 5 8 ) --> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) --> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) --> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) --> ( 1 2 4 5 8 )

> **Knowledge Check:** Discuss with the person next to you if you see anything wrong with the third pass. How could this algorithm be improved?

### The Bubble Sort Algorithm

Let's take a look at the pseudocode for bubble sort:

```
func bubblesort( var a as array )
    for i from 1 to N
        for j from 0 to N - 1
           if a[j] > a[j + 1]
              swap( a[j], a[j + 1] )
end func
```

As you can see, it's a basic nested `for` loop that compares each element to the element that follows. Then, the pseudocode swaps the two elements if the original element is greater than the next.

### Independent Practice: Bubble Sort in Java

Now, you'll write Java code to implement the pseudocode algorithm above. For a small optimization, think about how to know when the algorithm is complete without having to run the nested `for` loops. Once this has been achieved, stop the algorithm.

Use this code to get started:

```java
public static void main(String[] args) {
	int[] unsorted = {10, 15, 1, 3, 14, 2, 17, 9, 51, 6, 16, 22, 8};

	bubbleSort(unsorted);

	for(int i = 0; i < unsorted.length; i++) {
		System.out.println(unsorted[i]);
	}
}

private static void bubbleSort(int[] unsorted) {
	// Your code here. Include a print statement
	// declaring after which pass (iteration through
	// the outside loop) the algorithm is sorted.
	// It should be the ninth.		
}
```

> **Knowledge Check:** Take three minutes to do this, then share your solutions.

----

## Introduction: Insertion Sort

Insertion sort is another relatively simple sorting algorithm. Like bubble sort, it works best on arrays and lists that are already mostly sorted. It's faster and more optimized than bubble sort, especially on smaller lists. Insertion sort works by iterating through the list or array and **inserting** each element where it belongs in the collection.

Here's how insertion sort works on the same array we sorted above:

( 5 __1__ 4 2 8 ) --> ( __1__ 5 4 2 8 ): Here, the algorithm starts at the second element and iterates backward until it finds where the element fits. In this case, the element goes before __5__.

( 1 5 __4__ 2 8 ) --> ( 1 __4__ 5 2 8 ): Now, the algorithm goes to the third element and finds that it belongs between __1__ and __5__.

( 1 4 5 __2__ 8 ) --> ( 1 __2__ 4 5 8 ): The fourth element, __2__, belongs between __1__ and __4__.

( 1 2 4 5 __8__ ) --> ( 1 2 4 5 8 ): Now, because all the elements are already in order, no change is made.

Basically, insertion sort works by going forward through an array, stopping at each element, and looking back to find the proper place for that element. This sort of operation requires nested `for` loops.

### The Insertion Sort Algorithm

Now, as a class, let's come up with the pseudocode for insertion sort.

<details>
<summary>Solution</summary>

```
func insertionSort( var a as array )
    for i from 1 to N
        for j from i to 1
            if a[j] < a[j-1]
                swap a[j] and a[j-1]
end func
```

</details>

### Independent Practice: Implement Insertion Sort

Your turn! Implement insertion sort to sort an array of integers. Print each swap after it occurs to better see how insertion sort reorders the elements.    

Use this code to get started:

``` java
public static void main(String[] args) {
	int[] unsorted = {7, 3, 2, 4, 9, 1, 14, 12};

	int[] sorted = doInsertionSort(unsorted);

	for(int i = 0; i < sorted.length; i++) {
		System.out.println(sorted[i]);
	}
}

private static int[] doInsertionSort(int[] input) {
    // Your code here

    return input;
}
```

> **Knowledge Check:** Take three minutes to do this, then share your solutions.

----

## Conclusion (5 min)

There's no perfect sorting algorithm. There is, however, a perfect time and place for several sorting algorithms. That's why it's necessary to know the properties of these algorithms and how their respective strengths and weaknesses stack up against each other.

The two algorithms we discussed in this lesson have similar strengths and weaknesses. Unfortunately, neither one does well with larger, less sorted data sets. For that, we need a more powerful algorithm.
