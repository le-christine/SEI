---
title: Big O and Algorithms
type: Morning Exercise
duration: "1:00"
creator:
    name: Melissa Arliss (adapted from NYC-SEI)
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Big O & Algorithms

## Intro to Algorithms

### What is an algorithm?

> A step-by-step set of instructions to solve a problem for any valid input.

We've been using algorithms, in one way or another, for a majority of this class so far! If you've used a nested `for` loop, you've used an algorithm before.

### What is efficiency?

> A measure of time and space (processing time and memory). 

When developers write code, they need to measure how taxing a given program will be on a machine. The faster and lighter a program is, the less machine work needs to be done.

### Why algorithms?

Algorithms are important because:
- Understanding algorithms let us reuse knowledge from the field.
- Better-performing algorithms can enhance the user experience by decreasing wait times.
- Better-performing algorithms can save companies money by reducing equipment needs.
- Algorithms and algorithm analysis are an important part of the shared language developers use to talk about programs (especially in **INTERVIEWS!**).

------

## What is Big O Notation?

- _Big O_ is used to approximate how long an algorithm takes to run.

  > More formally, Big O can be used to describe the runtime of an algorithm as input grows.

- We will mostly be looking for the __WORST CASE SCENARIO__ for each algorithm.
- In addition, we're looking not at a specific number, but an _order of magnitude_ (represented by the letter _n_).
  
  > We do this because as _n_ gets significantly large, the other terms become insignificant.

### Common Big O Values

| Input Size (n) |	O(1) |	O(log(n))	 |  O(n)	| O(nlog(n))	| O(n<sup>2</sup>) |
| :-------------: |	:-------------: |	:-------------:	 | :-------------:	| :-------------:	| :-------------: |
| 1	| 1	 | 0 | 1 |	1 |	1 |
| 8	| 1	|  3	| 8 | 24 | 64  |
| 30	 | 1 | 	~5	 | 30 | 150 | 	900 |
| 500	 | 1 | 	~9	 | 500 | 4500 | 250,000 |
| 1000 | 	1 | 	~10	 | 1000	 | 10,000 | 	1,000,000 |
| 16,000	 | 1	 | ~14	 | 16,000	 | 224,000  | 	256,000,000 |
| 100,000	 | 1	 | ~17	 | 100,000	 | 1,700,000  | 	10,000,000,000 |

Observe how curves for different complexities compare to each other.
- O(1) is a totally flat line. It's constant no matter how much data is given to it.
- O(log(n)) goes up, then nearly flattens out.
- O(n) goes up and right in a straight line.
- O(n<sup>2</sup>) starts to spike up sharply as input size gets large.

![time complexity graph from Yaacov Apelbaum, apelbaum.wordpress.com](https://apelbaum.files.wordpress.com/2011/10/yaacovapelbaumbigoplot.jpg)

Big O notation gives an upper limit for how long or how much space an algorithm could take. We try to get estimates that are close to what time or space will actually be required, but Big O is a guarantee that the resources it takes to complete the algorithm, as inputs grow infinitely large, will be less than or equal to some constant multiple complexity of an algorithm.

> Note: Those constant multiples can get *really* large, meaning sometimes an O(n) algorithm will run faster than an O(log(n)) algorithm.

### Evaluating Complexity

How can you predict the complexity of a given algorithm? We can look for certain features to help us characterize it.

- Think of a name (often `n`) for the size of the input. If you have multiple inputs, like `arr1`, `arr2`, assign different names for each one (size of `arr1` is `n`; size of `arr2` is `m`).
- For consecutive statements, add the complexities of each.
- For branching statements (`if/else`), use the complexity of the worse branch.
- For loops, multiply the maximum number of times the loop can run by the complexity of the work inside the loop.
- Simplify: eliminate constant multiples within parentheses (`O(2n)` -> `O(n)`), constant multiples of a single big-o family (`8*O(n)` -> `O(n)`), and entire smaller terms (`O(n) + 3*O(1)` -> `O(n)`).  Don't remove smaller terms that use a different name for the input size: `O(n) + O(log(m))` doesn't simplify.

-----

## Examples

### O(1) (constant time)

To say an algorithm takes constant (or `O(1)`) time means: no matter how big the input(s) are, the computer will do basically same amount of work to perform the algorithm on them.

We'll consider most mathematical operations to be `O(1)`: `+`, `-`, `*`, `/`, `%`, `<`, `>`. `==`, `===`.  (This assumes that the numbers are all with some limited size like 32-bit numbers or 64-bit numbers.)

Assignment (`=`), `return`, and accessing a value in an array are other examples of steps that are considered `O(1)`.

```java
public int myMethod(int a) {
    if(a <= 10) {
        return a;
    } else {
        int b = a/.5 - 1;
        return a * b;
    }
}
```

### O(n) (linear time)

To say an algorithm is linear or `O(n)` means the resources required grow proportionally to the size of the input.

Algorithms that process each input at least once will take at least **O(n)** time. Loops are a common example.  

```java
public int getSum(int[] array) {
    int total = 0;
    for(int i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
```

### O(n<sup>2</sup>) (quadratic time)

If a single for loop operates in O(n) time, then it makes sense that a nested for loop would operate in O(n^2) time:

```java
for(int i = 0; i < input; i++) {
    for(int j = 0; j < input; j++) {
        System.out.println(i + "," + j);
    }
}
```

### O(log(n)) (logarithmic time)

Any algorithm which cuts the problem size in half at each step is logarithmic or `O(log (n))`.

These algorithms take longer for larger inputs, but the rate of increase is very slow compared to a lot of other possibilities.

A common example is finding an item in a sorted list with a balanced search tree or a binary search! We'll learn about these soon.

### O(n log(n))

You'll usually see `O(n log(n))` in "divide and conquer" algorithms that cut a problem into halves, *solve both halves*, and combine the results into a final solution.  This `O(n log(n))` complexity is famous for being the fastest possible time complexity of sorting algorithms on unrestricted inputs.

Of course, this would also be the time complexity of a loop that ran `n` times and did  `O(log(n))` work inside.

----

## Practice Time

Work with your partner and find the worst case time complexity of each of these algorithms.

### #1

```java
private static int firstFunction(int[] numArray) {
  int total = 0;

  for(int i = 0; i < numArray.length; i++) {
    total += numArray[i];
  }

  for(int i = 0; i < numArray.length; i++) {
    if(numArray[i] /2 < i) {
      total -= numArray[i] / 2;
    }
  }
  return total;
}
```

### #2

```java
private static int secondFunction(int[] numArray) {
  int total = 0;

  for(int i = 0; i < numArray.length; i++) {
    total += numArray[i] / (i+1);
  }
  for(int i = 0; i < numArray.length; i++) {
    for(int j = 0; j < i; j++) {
      total += i-j;
    }
  }
  return total;
}
```

### #3

```java
private static boolean thirdFunction(int[] numArray, int key) {
  int start = 0;
    int end = numArray.length - 1;
    while (start <= end) {
        int mid = (start + end) / 2;
        if (key == numArray[mid]) {
            return true;
        }
        if (key < numArray[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
}
```

### #4

```java
public void someFunction(LinkedList<Integer> myList) {
    int myInt = 7;
    int myProduct = 7 * 13;

    for(Integer i : myList) {
        if(i == myProduct) {
            return;
        }
    }
}
```

### #5

```java
public static void main(String[] args) {
    int[] myNumArray = {3, 9, 12, 1, 7, 17, 5, 4, 12, 2, 13};
    int total = firstFunction(myNumArray);
    int otherTotal = secondFunction(myNumArray);

    //ignore the sort
    Arrays.sort(myNumArray);
    boolean myBool = thirdFunction(myNumArray, 5);
}
```

