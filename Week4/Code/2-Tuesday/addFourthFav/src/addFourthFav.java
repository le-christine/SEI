import java.util.Arrays;

public class addFourthFav {
    public static void main(String args[]) {
        addFourthFav();
    }

    public static void addFourthFav() {
        String[] favoriteThings = {"roses", "whiskers on kittens", "raindrops"};
        favoriteThings[3] = "chocolate"; // check: why 3 and not 4?
        System.out.println(Arrays.toString(favoriteThings));
        // String myString = new String(Arrays.toString(favoriteThings));
        // System.out.println(myString);
    }
}
