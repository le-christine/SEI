package test.co.ga.junitttesting;

import org.junit.Before;
import org.junit.Test;
import main.co.ga.junitttesting.Student;

import static org.junit.jupiter.api.Assertions.*;

public class StudentTest {

    private Student student;

    @Before
    public void initializeStudent() {
        student = new Student("Leslie", "Knope", 'A');
    }

    @Test
    public void testIfFullNameIsCorrect() {
        String expected = "Leslie Knope";
        String actual = student.getFullName();

        assertEquals(expected, actual);
    }

    @Test
    public void testIfLetterGradeIsCorrect() {
        char expected = 'A';
        char actual = student.getLetterGrade();

        assertEquals(expected, actual);

    }}