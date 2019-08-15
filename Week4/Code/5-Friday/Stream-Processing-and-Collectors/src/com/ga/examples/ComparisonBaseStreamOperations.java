package com.ga.examples;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ComparisonBaseStreamOperations {

    public static class Person {

        private String name;
        private int age;

        public Person(String name,
                      int age) {
            this.name = name;
            this.age = age;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }

        @Override
        public String toString() {
            return "Person{" +
                    "name='" + name + '\'' +
                    ", age=" + age +
                    '}';
        }
    }

    public static void main(String[] args) {

        //sorted - Sort by name
        List<Person> largePersonList =
                Arrays.asList(
                        new Person("Tom", 30),
                        new Person("John", 29),
                        new Person("Jenny", 20),
                        new Person("Mark", 35),
                        new Person("Chris", 37),
                        new Person("Paige", 31),
                        new Person("Helen", 60),
                        new Person("Erin", 50),
                        new Person("Zach", 10),
                        new Person("Jane", 45),
                        new Person("Jeff", 70));

        List<Person> sortedList =
                largePersonList.stream()
                        .sorted((person1, person2) -> person1.getName().compareTo(person2.getName()))
                        .collect(Collectors.toList());

        sortedList.stream().forEach(person -> System.out.println(person));

        //min - find the youngest person
        Person youngestPerson =
            largePersonList.stream()
                .min(Comparator.comparing(Person::getAge))
                .orElse(null);

        System.out.println(youngestPerson);

        //max - find the oldest person.
        Person oldestPerson =
                largePersonList.stream()
                        .max(Comparator.comparing(Person::getAge))
                        .orElse(null);

        System.out.println(oldestPerson);


        //distinct
        Stream<Integer> integerStream = Stream.of(1,1,2,2,3,4,5);

        integerStream
            .distinct()
            .forEach(integer -> System.out.println(integer));

        //allMatch
        Boolean isAllOverTheAgeOfNine =
            largePersonList.stream()
                .allMatch(person -> person.getAge() > 9);

        System.out.println(isAllOverTheAgeOfNine);

        //anyMatch
        Boolean isAnyOverTheAgeOfFifty =
            largePersonList.stream()
                .anyMatch(person -> person.getAge() > 50);

        System.out.println(isAnyOverTheAgeOfFifty);

        //noneMatch
        Boolean isNoneOverTheAgeOfSeventy =
            largePersonList.stream()
                .noneMatch(person -> person.getAge() > 70);

        System.out.println(isNoneOverTheAgeOfSeventy);
    }
}
