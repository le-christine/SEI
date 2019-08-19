---
title: Merge Sort
type: Morning Exercise
duration: "1:00"
creator:
    name: Melissa Arliss (adapted from ADI)
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Merge Sort

## Overview

While Bubble Sort and Insertion Sort are good for lists and arrays that are already mostly sorted, most data does not arrive that way. For that reason, we need more powerful algorithms. One such algorithm is Merge Sort.

----

## Introduction: Merge Sort

> Check: What was a downside to sorting using bubble and insert sort?

Merge Sort is a "Divide and Conquer" algorithm. Here are the steps:

1. A list or array of size _n_ is turned into _n_ sublists with 1 element each.
2. Each sublist is sorted.
3. Then, the algorithm repeatedly merges sublists together into new, sorted sublists.
  - When merging the lists, elements from each list are compared against each other and are added into the merged sublist from smallest to largest.
4. This process continues until only the sorted list remains.

You can break the entire process down into two parts.

1. **Divide** the array repeatedly until there are arrays of size 1
2. **Merge** the arrays, sorting as you go.

You can see from those two parts where the name and type of sort comes from.

![Divide and conquer](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/1064px-Merge_sort_algorithm_diagram.svg.png)

> Check: Discuss this question in pairs: why might a "divide and conquer" algorithm work more quickly than the algorithms we already looked at?

> Check: How many "levels" did the completed diagram have?  

### Demo: MergeSort the students!

I am going to distribute randomly numbered pieces of paper, one to each student.  

Now, it's time to try the Merge Sort yourselves (literally)! Using the numbers you have, we're going to randomly sort and merge each other!

Perform merge sort using the steps in the ordered list that's written on the board. I will help you through each step.

### Independent Practice: The Merge Sort Algorithm

Use the steps on the board as guides, write out the pseudocode for the merge sort.

**Hint:** The most common solution for this is to split the process into two methods, one to handle splitting the arrays up, and another to handle merging the arrays back together. Refer to the solution below if you get stuck.

<details>
	<summary>Let's review your solutions before you do this in Java:</summary>

```
func mergeSort( var a as array )
     if ( n == 1 ) return a

     var l1 as array = a[0] ... a[n/2]
     var l2 as array = a[n/2+1] ... a[n]

     l1 = mergesort( l1 )
     l2 = mergesort( l2 )

     return merge( l1, l2 )
end func

func merge( var a as array, var b as array )
     var c as array

     while ( a and b have elements )
          if ( a[0] > b[0] )
               add b[0] to the end of c
               remove b[0] from b
          else
               add a[0] to the end of c
               remove a[0] from a
     while ( a has elements )
          add a[0] to the end of c
          remove a[0] from a
     while ( b has elements )
          add b[0] to the end of c
          remove b[0] from b
     return c
end func
```
</details>

### Independent Practice: Implementing Merge Sort

Your turn! Using the [starter code](./merge-sort-starter-code/MergeSort.java), and your pseudocode, implement Merge Sort.

First, we'll work on the mergeSort method. Then we'll share the solution for that part of the algorithm. You will then have some more time to write the merge method.

> Check: Let's review one person's solution with the class.

-----

## Conclusion

As stated before, there is no perfect sorting algorithm. While Insertion Sort is great for shorter, mostly ordered lists, it would be a poor choice to sort larger datasets, such as all entries in a phone book. Similarly, Merge Sort would be unnecessary and inefficient for a list of 20 numbers that are already mostly in the right order.

#### ADDITIONAL RESOURCES

- [More Efficient Merge Sort](http://www.java2novice.com/java-sorting-algorithms/merge-sort/)
