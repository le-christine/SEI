public static void main(String[] args)
{
    int[] numbers  = new int[]{5,12,2,32,-2,-10,-1,100,16,101};

    System.out.println("Unsorted numbers:");
    for (int i=0;i<numbers.length;i++) {
        System.out.println(String.valueOf(numbers[i]));
    }

    numbers = mergeSort(numbers, numbers.length);

    System.out.println("Sorted numbers:");
    for (int i=0;i<numbers.length;i++) {
        System.out.println(String.valueOf(numbers[i]));
    }
}
private static int[] mergeSort(int[] nums, int n){
    if (n < 2) {
        return nums;
    }

    int mid = n / 2;
    int[] l = new int[mid];
    int[] r = new int[n-mid];

    for (int i = 0; i < mid; i++) {
        l[i] = nums[i];
    }

    for (int i = mid; i < n; i++) {
        r[i - mid] = nums[i];
    }

    mergeSort(l, mid);
    mergeSort(r, n-mid);

    return merge(nums, l, r, mid, n - mid);
}

private static int[] merge(int[] a, int[] l, int[] r, int left, int right){
    int i = 0, j = 0, k = 0;
    while (i < left && j < right) {
        if (l[i] <= r[j]) {
            a[k++] = l[i++];
        }
        else {
            a[k++] = r[j++];
        }
    }
    while (i < left) {
        a[k++] = l[i++];
    }
    
    while (j < right) {
        a[k++] = r[j++];
    }

    return a;
}
