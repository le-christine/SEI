---
title: Relational Model
type: Lesson
duration: "2:00"
author: Isha Arora

---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Relational Model

### Learning Objectives

*After this lesson, students will be able to:*
- Create a one-to-one, one-to-many, and many-to-many relationship in SQL.
- Determine when each type of relationship is most useful for certain datasets.

### Lesson Overview

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 10 min | Opening         | Discuss lesson objectives |
| 30 min | Guided Practice | One to One |
| 30 min | Guided Practice | One to Many |
| 30 min | Guided Practice | Many to Many |
| 10 min | Conclusion      | Review / Recap |

## Introduction (10 min)

Like we have discussed earlier, what makes SQL databases relational is that each table is 'related' to other table in some way. This model organizes data into one or more tables (or "relations") of columns and rows, with a unique key identifying each row. Rows are also called records or tuples. Columns are also called attributes. 

### Relational Mapping

Relationships happen when we start seeing multiple occurrences of duplicative information, or when one object needs to "connect" to another object.

There are three ways in which one table can be linked to another. Each is used in partcular scenarios. We will look at all 3 and their implementation one by one.

-----

## One to One (30 min)

The first way of linking tables is called a "one to one" relationship. It's not frequently used, but important to know it's an option.

In our previous lesson, we were working on a `Student` table which had few attributes. Let's now say that each student should have an address attached to it.

In real-world applications, `Address` is created to be a separate table linked to `Student`. We say that each student can have only one address and each addess is linked to a unique student. In such a case we say that `Student` and  `Address` have a one-to-one relationship.

The example below shows a one-to-one relationship between Book and Author. Although realistically it's not possbile but we are saying that an Author can write only 1 Book and a book can only be written by 1 author.

![](https://www.tech-recipes.com/wp-content/uploads/2015/09/One-To-Many_Relationship_SQL_Server.png)

### Code Along

We will now see how this relationship is implemented in SQL.

Let's first create `Address` table with few necessary attributes.

```
CREATE TABLE address (
	address_id SERIAL PRIMARY Key,
	street VARCHAR(150),
	city VARCHAR(50),
	zip VARCHAR(50)
);
```

Now, to create a relationship between these two tables, we will first have to add a new column in the `Students` table which will eventually store reference to `Address` record for that student. We will use `ALTER` to add a new column. `ALTER` keyword is used to change the description of the existing table. Our query will look like,

```
ALTER TABLE students ADD COLUMN student_address_id INT;
```

Let's go over the query, we are adding a new column of Integer datatype, named `student_address_id` to our `students` table.

Once the column is added we can now add a foreign key constraint on this column such that `student_address_id` in `students` table will have the reference to data in `Address` table.

A **Foreign Key** is a key used to link two tables together. It is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.

In our case we will again `ALTER` the `Students` table to create this constraint.

```
ALTER TABLE students 
ADD CONSTRAINT fk_students_address 
FOREIGN KEY (student_address_id) 
REFERENCES address (address_id);
```

Let's go over this query, 

`ALTER TABLE students` we are again altering `students` table to a foreign key on one of its columns. `fk_students_address` is just the name of the constraint, we can give any name here. Just think of it in terms of a variable in any programming language, it is just a placeholder.

`FOREIGN KEY (student_address_id) REFERENCES address (address_id)` we are declaring the column in `students` table which will be the foreign key and what this will reference to. Like mentioned before primary key `address_id` of `address` table.

Let's run `\d students` to have one final look at the table.

```
generalassembly=# \d students;
                                             Table "public.students"
       Column       |         Type          | Collation | Nullable |                   Default                    
--------------------+-----------------------+-----------+----------+----------------------------------------------
 student_id         | integer               |           | not null | nextval('students_student_id_seq'::regclass)
 name               | text                  |           | not null | 
 age                | integer               |           | not null | 
 mobile             | character varying(50) |           |          | 
 student_address_id | integer               |           |          | 
Indexes:
    "students_pkey" PRIMARY KEY, btree (student_id)
Foreign-key constraints:
    "fk_students_address" FOREIGN KEY (student_address_id) REFERENCES address(address_id)
```

### You Do

Add records in `address` table for each student you have in the `students` table. Then update `students` table to associate the address.

- Jack now wants to make an honest living and has moved to 200 Horton Ave., Lynbrook, NY.
- Captain Barbossa is somewhere out at the sea, refusing to settle down.
- Jill lives at 123 Webdev Dr. Boston, MA.
- John lives at 555 Five St, Fivetowns, NY.
- Jackie lives at 2 OldForThis Ct, Fivetowns, NY.
- Slagathorn prefers not to share the address.

------

## One to Many (30 min)

The [One-to-Many](https://www.tech-recipes.com/rx/56738/one-to-one-one-to-many-table-relationships-in-sql-server) relationship is defined as a relationship between two tables where a row from one table can have multiple matching rows in another table. This relationship can be created using Primary key-Foreign key relationship.	

![](https://www.ntu.edu.sg/home/ehchua/programming/sql/images/ManyToOne.png)

You simply put the ID of the "one" resource in the "many" as shown above. This is called a **foreign key**, because it is the key, or ID, of an item in a different table. 

### Code Along

In our example we will now create 2 new tables `courses` and `instructors`. Let's first create `courses` table which will have at least 2 attributes `course_code` and `course_name`.

```
CREATE TABLE courses (
	course_id SERIAL PRIMARY KEY,
	course_code VARCHAR(10),
	course_name VARCHAR(100)
);
```

While we are at it, let's put some data in it,

```
INSERT INTO courses VALUES (DEFAULT, 'SEI', 'Software Engineering Immersive');
INSERT INTO courses VALUES (DEFAULT, 'DSI', 'Data Science Immersive');
```

```
generalassembly=# SELECT * FROM courses;
 course_id | course_code |          course_name           
-----------+-------------+--------------------------------
         1 | SEI         | Software Engineering Immersive
         2 | DSI         | Data Science Immersive
(2 rows)

```

Now we say that each course can be taught by multiple instructors but one instructor at a time can teach only one course. In this way, there is a one-to-many relationship between course and instructors.

So now when we'll create `instructors` table we will also add a *referential integrity* to it, just like we did before. 

```
CREATE TABLE instructors (
	instructor_id SERIAL PRIMARY KEY, 
	name VARCHAR(255) NOT NULL, 
	email VARCHAR(200) NOT NULL, 
	instructor_course_id INT REFERENCES courses(course_id) NOT NULL DEFAULT (0)
);
```

We have created a new column `instructor_course_id` which is the foreign key referencing `course_id`, the primary key in `courses` table. An instructor should always be teaching a course; that's why we have put a not null constraint. 

But what if an instructor at the moment is not teaching any courses or is on hiatus - what do we do then? One option is to delete the record which is definitely not the best option. The better option is to set default value to `0`. Now we will know total number of instrcutors we have and how many are teaching currently.

```
generalassembly=# \d instructors
                                                Table "public.instructors"
        Column        |          Type          | Collation | Nullable |                      Default                       
----------------------+------------------------+-----------+----------+----------------------------------------------------
 instructor_id        | integer                |           | not null | nextval('instructors_instructor_id_seq'::regclass)
 name                 | character varying(255) |           | not null | 
 email                | character varying(200) |           | not null | 
 instructor_course_id | integer                |           | not null | 0
Indexes:
    "instructors_pkey" PRIMARY KEY, btree (instructor_id)
Foreign-key constraints:
    "instructors_instructor_course_id_fkey" FOREIGN KEY (instructor_course_id) REFERENCES courses(course_id)

```

### You Do

You have the tables ready and the relationships created, so now you can have some fun with the data!

Add some new instructors in the `instructors` table, try to match them up with the courses they feel comfortable teaching.

Oh! I almost forgot, Captain Barbossa no longer wants to be a student. He is insisting (not so nicely) to be an instructor of a new course *How to be a Pirate*. I would suggest we give in to his demands.

![](https://i.pinimg.com/originals/88/54/51/8854517cf5fac7e61bfb6d69eebae510.gif)

------

## Many to Many (30 min)

Let's think about a high school situation where students have many courses and courses have many students. 

How do we do this? We **could** attempt to use the above (wrong) way and put ALL of the student IDs associated with each course in each row of the course table, AND ALL of the course IDs associated with each student in each row on the student table. 

But then we are again putting arbitrary amounts of columns in our tables and the end result is not pretty. 

![](https://media.giphy.com/media/N9sfGVpuo4p56/giphy.gif)

Fortunately the eggheads of computer science yesteryear have come up with a beautiful, elegant solution: The join table. 

### The Join Table

![](https://media.giphy.com/media/jDiUeDQpIkGIM/giphy.gif)

![](https://smehrozalam.files.wordpress.com/2010/06/erd-many-to-many-2.jpg)

We use a join table! It's a table with the IDs of BOTH, thus connecting our data across databases! YAY!!!!

A join table might be JUST a join table, meaning it might have nothing but the two IDs, or it might represent something too! 

For example, the join table above represents a real thing: **enrollment**! Enrollment might have some of its own properties, like start and stop dates. Other times, the join table might not really represent anything that has a real life analogy, and it might not need to hold any data besides the ID's. 

### Code Along

We have already have `students` and `courses` tables in our database. We just have to create a join table signifying the enrollment, just like we have discussed in the example above. For now we will keep things really simple and just have a column for student ID and course ID. 

Let's create our join table. We will call it `student_course` table.

```
CREATE TABLE student_course_enrollment (
	enrollment_id SERIAL PRIMARY KEY,
	student_id INT REFERENCES students(student_id) NOT NULL,
	course_id INT REFERENCES courses(course_id) NOT NULL,
	UNIQUE (student_id, course_id)
);
```

There is a lot happening in this create table query, let's go over it one by one. 

First, we are creating a join table with a primary key... `CREATE TABLE student_course_enrollment ( enrollment_id SERIAL PRIMARY KEY,`

Then we are adding a not null constraint on both our foreign keys, a student should not be able to enroll without a course and vice versa `student_id INT REFERENCES students(student_id) NOT NULL, course_id INT REFERENCES courses(course_id) NOT NULL,`

Finally, we want that a student should only enroll in a course once, that's why we made the combination of both `student_id` and `course_id` unique `UNIQUE (student_id, course_id)`

Now if you describe your table you can see all the above constraints.

```
generalassembly=# \d student_course_enrollment
                                     Table "public.student_course_enrollment"
    Column     |  Type   | Collation | Nullable |                             Default                              
---------------+---------+-----------+----------+------------------------------------------------------------------
 enrollment_id | integer |           | not null | nextval('student_course_enrollment_enrollment_id_seq'::regclass)
 student_id    | integer |           | not null | 
 course_id     | integer |           | not null | 
Indexes:
    "student_course_enrollment_pkey" PRIMARY KEY, btree (enrollment_id)
    "student_course_enrollment_student_id_course_id_key" UNIQUE CONSTRAINT, btree (student_id, course_id)
Foreign-key constraints:
    "student_course_enrollment_course_id_fkey" FOREIGN KEY (course_id) REFERENCES courses(course_id)
    "student_course_enrollment_student_id_fkey" FOREIGN KEY (student_id) REFERENCES students(student_id)
```

### You Do

The stage is set, you have courses you can offer; you have instructors ready to teach them; you also have interested students. Now is the time we start making some money. Using the join table table we just created, enroll students in the courses they are interested in.

Make sure your Captain Barbossa gets at least few students enrolled in his course. Let us all strive for peace on campus.

-----

## Conclusion (10 min)

Your instructors are happy, your students are happy, and most importantly, your pirates are happy.

To make sure YOU'RE happy with what you learned in this lesson, find a partner and take a few minutes to discuss the following questions:
- When would you use a one-to-one relationship?
- What about a one-to-many relationship?
- And finally, when would you use a many-to-many relationship / join table?


