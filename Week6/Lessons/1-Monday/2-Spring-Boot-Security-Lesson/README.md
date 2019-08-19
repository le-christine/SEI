| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Spring Security | Lesson | 3:00 | Isha Arora |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Spring Security

### LEARNING OBJECTIVES

*After this lesson, you will be able to:*
- Use Spring Security to authenticate and authorize users on your Spring Boot application.
- Explain the problems that JWT solves.
- Use JWT for authorization and password encryption.

### LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:---:|---|--- |
| 5 min  | [Opening](#opening-5-min) | Discuss lesson objectives |
| 20 min | [Guided Practice](#code-along-20-min)  | Setting Up Spring Security |
| 15 min | [Independent Practice](#you-do---test-your-routes-15-min)  | Test Your Routes |
| 15 min | [Guided Practice](#retrieving-user-info-from-database-15-min) | Retrieving User info from Database |
| 15 min | [Independent Practice](#you-do---test-all-routes-15-min)  | Test Your Routes |
| 20 min | [Introduction](#spring-authentication-using-jwt-20-min)  | Authentication using JWT |
| 20 min | [Guided Practice](#jwt-code-along-15-min)  | JWT |
| 15 min | [Independent Practice](#you-do---implementing-jwt-15-min)  | Implementing JWT |
| 15 min | [Guided Practice](#token-authentication-15-min)  | Token Authentication |
| 15 min | [Guided Practice](#password-encryption-15-min)  | Password Encryption |
| 15 min | [Independent Practice](#you-do---test-your-routes-with-jwt-15-min)  | Test Your Routes |
| 5 min  | [Conclusion](#conclusion-5-min)  | Review / Recap |

## Opening (5 min)

According to [spring.io](https://spring.io/projects/spring-security), Spring Security is a powerful and highly customizable authentication and access-control framework. It is the de-facto standard for securing Spring-based applications.

Spring Security is a framework that focuses on providing both authentication and authorization to Java applications. Like all Spring projects, the real power of Spring Security is found in how easily it can be extended to meet custom requirements.

Spring Security is implemented using Servlet filters in the background. Let's talk about Servlet filters first. You can customize your application such that every request and response goes through servlet filters. A servlet filter is a Java object that can intercept HTTP requests and response and put pre defined filters on them. These filters can also be used to route requests based on security logic, in other words authenticate & authorize the request. **Authentication** in simple terms means validating that you are, who you say you are. **Authorization** means whether you have the access to make the request you are making. Both are equally important and work in tandem for any user request.

![](https://i.ytimg.com/vi/Q3yStECBuAg/maxresdefault.jpg)

----

## Code Along (20 min)

For this exercise you can either use the same application that we built during [Spring data with Postgres](/Week5/Lessons/5-Friday/1-Spring-Data-PostgreSQL-Lesson) lesson. OR you can use the application given in [starter-code](/Week6/Code/1-Monday/Spring-Boot-Security-Lesson/starter-code). Open the app in IntelliJ.

### In Memory Authentication & Authorization
 
We will start really simple and focus more on how to implement authentication and autorization and not on where the data is coming in from. Just as what we have been doing so far, the first thing we are going to do is add Maven dependency in `pom.xml` file.

**pom.xml**

```
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

Make sure the project is build successfully. After that, we are going to add configurations using Java classes. Remember you can also write these configurations using xml. We are going to create a new class `SecurityConfig.java` under the package `com.example.springbootmonolith.config`. This file will hold all our configurations. Don't worry if it looks scary we are going to go over each line one by one.

**SecurityConfig**

```
package com.example.springbootmonolith.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
}
```

**@Configuration** annotation is an analog for xml file. It will be used to configure our application with security features.

The **@EnableWebSecurity** is a marker annotation. It allows Spring to find configuration class and automatically apply the class to the global WebSecurity. `WebSecurityConfigurerAdapter` is extended to enable HttpSecurity in our app. Also, to provide a default configuration in the `configure(HttpSecurity http)` method which we will implement shortly.

### Authentication

Next thing we'll implement is in memory authentication. What that means is that instead of getting user credentials from database we'll hardcode username and password in the code itself. We will do this by overriding a method in our config class. Using the builder pattern we can create multiple users with different attributes, authorities and roles. 

**SecurityConfig**

```
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.userdetails.User;

@Override
public void configure(AuthenticationManagerBuilder auth) throws Exception{
	
    User.UserBuilder users = User.withDefaultPasswordEncoder();
    auth.inMemoryAuthentication().withUser(users.username("test").password("test").roles("ADMIN"));
}	
```
> Please not the `User` object in this case is not the one we created but it is a security user details `User` object.

After adding user info we will now configure our requests. We do this by overriding another method.

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
```
@Override
protected void configure(HttpSecurity http) throws Exception {

    http.csrf().disable()
        .authorizeRequests()
        .antMatchers("/user/**").authenticated()
        .and()
        .httpBasic();
}
```  

> This `configure` method ensures that all requests are authenticated with Http based authentication.

[Cross-Site Request Forgery](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. CSRF attacks specifically target state-changing requests, not theft of data, since the attacker has no way to see the response to the forged request. CSRF protection is enabled by default in the Java configuration. To keep things simple we have disable it in our app for now.

`antMatchers()` allows configuring the HttpSecurity to only be invoked when matching the provided ant pattern. In the above case the `http.antMatcher` states that this HttpSecurity will only be applicable to URLs that start with `/user/`. Also, we’re using the `httpBasic()` element to define Basic Authentication, inside the configure() method.
 
Run your app and check [http://localhost:8080/user/list](http://localhost:8080/user/list) API. You will get an error back that the request is Unauthorized.

![](/Week6/Lessons/1-Monday/2-Spring-Boot-Security-Lesson/images/request_auth_failure.png)

So, now you will give the username and password that you added earlier as shown below,

![](/Week6/Lessons/1-Monday/2-Spring-Boot-Security-Lesson/images/request_auth_success.png)

The above was an example of user authentication. 

### Authorization

As you already know in any real world application each user will have at least one role assigned to it. Like discussed earlier check if an authenticated user has access to something is part of user authorization. There are different ways that we can implement authorization. It can be done on an entire path or using **@PreAuthorize** annotation on a specific endpoint.

Before we proceed with the above change let's take a step back and look at a use case here. Let's assume the client we are building this app for needs another type of role for DBAs and only DBAs can retrive or create a new role. So first thing we are going to do is add an `antMatcher()` for the above request.

```
.antMatchers("/role/**").hasRole("DBA")
```

> `hasRole()` method first authenticates the User then checks its role against the authorized Role.

For the above to work, we will also add another user in our config that will have the role of a 'DBA'.

```
@Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception{

        User.UserBuilder users = User.withDefaultPasswordEncoder();
        auth.inMemoryAuthentication().withUser(users.username("test").password("test").roles("ADMIN"));
        auth.inMemoryAuthentication().withUser(users.username("dba").password("dba").roles("DBA"));
    }
```

Another requirement that the client has is that all requests to `/user` path should not be authorized, but only ADMIN should be able to fetch all users. To fulfill this request, the only change we'll make is in `UserController` class.

**UserController**

```
@PreAuthorize("hasRole('ROLE_ADMIN')")
@GetMapping("/user/list")
public Iterable<User> listUsers(){
    return userService.listUsers();
}
```

Few other updates we'll do are for signup and login routes. We don't want to and cannot authenticate these requests as these will be entry points to our app. Spring security lets you define these routes specifically. We'll make just one more small change in the `configure()`.

```
.antMatchers("/signup/**", "/login/**").permitAll()
```
> As the name suggests `permitAll()` permits the requests to the given endpoints without authenticating them.

Finally your configure method will look like,

```
@Override
protected void configure(HttpSecurity http) throws Exception {
	http.csrf().disable()
        .authorizeRequests()
        .antMatchers("/signup/**", "/login/**").permitAll()
        .antMatchers("/user/**", "/profile/**", "/course/**").authenticated()
        .antMatchers("/role/**").hasRole("DBA")
        .and()
        .httpBasic();
}
```

-----

## You Do - Test Your Routes (15 min)

Pair up, take 15 minutes to test all the routes that you created against the changes you just made.

POST [http://localhost:8080/signup](http://localhost:8080/signup)

GET [http://localhost:8080/login/{username}/{password}](http://localhost:8080/login/batman/robin)
 
**Test for Authentication**

POST [http://localhost:8080/course](http://localhost:8080/course) 

GET [http://localhost:8080/course/list](http://localhost:8080/course/list)

POST [http://localhost:8080/profile/{username}](http://localhost:8080/profile/batman)

GET [http://localhost:8080/profile/{username}](http://localhost:8080/profile/batman)

PUT [http://localhost:8080/user/{username}/{courseId}](http://localhost:8080/user/batman/robin)

DELETE [http://localhost:8080/user/{userId}](http://localhost:8080/user/1)

**Test for Authorization**

POST [http://localhost:8080/role](http://localhost:8080/role)

GET [http://localhost:8080/role/{rolename}](http://localhost:8080/role/ROLE_ADMIN)

GET [http://localhost:8080/user/list](http://localhost:8080/user/list)

---

## Retrieving User info from Database (15 min)

Until now we were hardcoding our User data to authenticate and authorize our requests, now we are going to update our code to get User data from the database. 

First thing you need to do is comment out the existing method in `SecurityConfig` class.

```
//    @Override
//    public void configure(AuthenticationManagerBuilder auth) throws Exception{
//
//        User.UserBuilder users = User.withDefaultPasswordEncoder();
//        auth.inMemoryAuthentication().withUser(users.username("test").password("test").roles("ADMIN"));
//		  	auth.inMemoryAuthentication().withUser(users.username("dba").password("dba").roles("DBA"));
//    }
```

Before adding the new method we will first extend UserDetailsService to our existing `UserService` interface. There are two ways in Spring Security to talk to database, jdbcAuthentication and userDetailsService. 

**UserService**

```
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
...
...
}
```

Now, under `com.example.springbootmonolith.service` package go to class `UserServiceImpl`. In this class we will add a method to load User infor using username.

**UserServiceImpl**

```
package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.User;
import com.example.springbootmonolith.models.UserRole;
import com.example.springbootmonolith.repositories.UserRepository;
import com.example.springbootmonolith.repositories.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

public class UserServiceImpl implements UserService {
...

	@Autowired
    @Qualifier("encoder")
    PasswordEncoder bCryptPasswordEncoder;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = getUser(username);

        if(user==null)
            throw new UsernameNotFoundException("User null");

        return new org.springframework.security.core.userdetails.User(user.getUsername(), bCryptPasswordEncoder.encode(user.getPassword()),
                true, true, true, true, new ArrayList<>());
    }
    
    private List<GrantedAuthority> getGrantedAuthorities(User user){
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();

        authorities.add(new SimpleGrantedAuthority(user.getUserRole().getName()));

        return authorities;
    }

...
}

```

> `loadUserByUsername()` is called by Spring Security by default to to check against the User data.

Now go back to `SecurityConfig.java` and add the below code,

```
@Autowired
UserService userService;
    
public void configureGlobalSecurity(AuthenticationManagerBuilder auth) throws Exception {
	auth.userDetailsService(userService);
}

@Bean("encoder")
public PasswordEncoder encoder() {
	return new BCryptPasswordEncoder();
}
```

Your `SpringSecurity` class should now look like,

```
package com.example.springbootmonolith.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

    @Autowired
    UserService userService;

    @Bean("encoder")
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    public void configureGlobalSecurity(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable()
            .authorizeRequests()
            .antMatchers("/signup/**", "/login/**").permitAll()
            .antMatchers("/user/**", "/profile/**", "/course/**").authenticated()
            .antMatchers("/role/**").hasRole("DBA")
            .and()
            .httpBasic();
    }
    
    //    @Override
//    public void configure(AuthenticationManagerBuilder auth) throws Exception{
//
//        User.UserBuilder users = User.withDefaultPasswordEncoder();
//        auth.inMemoryAuthentication().withUser(users.username("test").password("test").roles("ADMIN"));
//    }

}

```

----

## You Do - Test All Routes (15 min)

In order for you to even create ADMIN role you need to first have the DBA role added to the database. What we'll do for now is that we will go directly into our database and run an insert query to add the data for DBA role. 

```
insert into user_role (name) values ('ROLE_DBA');
```

Pair up, take 15 minutes again to test all the routes that you tested earlier. Make sure everything is working successfully.

-----

## Spring: Authentication using JWT (20 min)

### What is a JSON Web Token?

[Official definition](https://tools.ietf.org/html/rfc7519): compact, URL-safe means of representing claims to be transferred between two parties. 

In other words: A JSON web token is JSON-formatted data sent securely between the server and the browser via HTTP requests. 

### Authentication with JWTs

The problem that JWTs seek to overcome: HTTP is stateless, but we need a way to tell the server that a user is logged in.

When making requests or performing actions that are only for authorized users, there needs to be a way to keep track of whether a user is logged in, since that information isn't stored in HTTP by nature. 

For instance, when we implemented Passport for user authentication, we used sessions to remind the server of "logged-in status" with every request made to the server. A session is a place to store data on the browser during one request which can be read during later requests. The session is a JS object that allows us to keep track of this information. When a new user signs into an application, we create a new session in the server, and a cookie for this session is sent in a response back to the browser. In future HTTP requests from the browser, the client sends a session cookie to the server to retrieve the user from the database to then authenticate the authorized interaction with the database (e.g. saving a post, editing data).

Another approach to keeping track of a user being logged in is to use JWTs with Passport. With JWTs, the user info is embedded in a token. Upon initial log in, the server creates a JSON "token" to store the user info. These tokens are "signed" by the server, and only the server holds the private key to read the token.

#### How It Works

![JWT vs. Sessions Diagram](https://cdn-images-1.medium.com/max/1600/1*d6YcPvq7TeU0DTamj629xw.png)

1. Client browser makes a request sending user login credentials and password (only has to do this once)
2. Server validates the credentials and sends a JSON response to the client that encodes user login data
3. Client stores this JSON web token
4. When the client sends a request to a route that requires authentication, it will send this token to the API to present its authorization for access

#### Advantages of using JWTs:

- JWTs are self-contained
    - You have all the information about the user within the token. After inital request from browser, the server doesn't need to interact with the database to know who the user is. Using JWTs limit database lookups.
- JWTs are compact, and transmission through HTTP actions is fast.
- JWTs work the same for browser clients and native mobile apps.

### What does a JWT look like?

A string with three parts, each separated by dots (`.`):

    - header
    - payload
    - signature

#### Header

**Header** is a JSON object consisting of two parts: the type of token (typ) and the hashing algorithm being used on the token (alg).

```js
Header example:
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### Payload

**Payload** is a JSON object containing claims. Claims refer to statements about an entity (e.g. user data). You can put as many claims into the payload as you want, though you want to be cognizant of keeping the JWT compact so as not to impact performance of HTTP actions.

```js
Payload example:
{
  "sub": "1234567890",
  "name": "John Doe",
  "userId": "5z-9328477bz"
  "admin": true
}
```

There are three different types of claims: public claims, private claims, and registered claims.

Registered claims refer to claims that have predetermined key names - e.g. common fields like issuer ("iss"), subject ("sub"), and expiration time ("exp").

Public claims are claims that we create - e.g. "name", "userId", and "admin" above.

Private claims are used when JWTs are sent between two parties. Only these two parties know what the claims respresent.

#### Signature

**Signature** is encoded header and payload signed with a secret key.

The header is encoded, and the payload is encoded. They are joined together with a `.` in between. This string is then hashed with the server's secret key, using header's hashing algorithm. This produces a new string, which is added onto the `<header>.<payload>` string with another `.` between.

The signature allows the receiver to ensure that the JWT was sent from an authentic source (the holder of the secret key). This encoding does not serve to encrypt the data, but to transform the data.

> Note: [Refresher on difference between encoding, encrypting, and hashing.](https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/)

#### Final product

Encoded string vs. decoded JSON:

![JWT: encoded string vs. decoded JSON](https://cdn-images-1.medium.com/max/2000/1*LAo6s2tlszZdk2x-uE1lqA.png)

----

## JWT Code Along (15 min)

Let's start by first adding Maven dependency for JWT.

**pom.xml**

```
<dependency>
	<groupId>io.jsonwebtoken</groupId>
	<artifactId>jjwt</artifactId>
	<version>0.9.1</version>
</dependency>
```

Like we discussed earlier, whenever we want create a JWT we need a secret key which will be used to generate a token. For this we will go to `application.properties` file and add a key-value pair there.

```
jwt.secret=pancakes
```

So, before we update our '/login' route lets first add a util class which will have all the utility methods to deal with our token. Create a new package `com.example.springbootmonolith.config` and create a new `JwtUtil` class under it.

**JwtUtil**

```
package com.example.springbootmonolith.config;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil implements Serializable {

    private static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;

    @Value("${jwt.secret}")
    private String secret;

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, userDetails.getUsername());
    }

    private String doGenerateToken(Map<String, Object> claims, String subject) {
        return Jwts.builder().setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                .signWith(SignatureAlgorithm.HS512, secret).compact();    }

}
```
One important thing to note here is that we are generating the token among other things using the `username`. When we will get any further requests using this token we will parse `username` out of the generated token and use it to access user information. Remember Http is a stateless protocol, every request will be treated as a new request.

Now what we'll do is simply have a login request which will then generate web token for us only if the User's username and password match to what we already have in the database. For this to happen we will first we will create a simple response object that will be sent back to the user if login is successful then update our `login()` in the `UserService` and `UserController`. We will update the `login()` method such that it returns the token

**JwtResponse**

```
package com.example.springbootmonolith.models;

public class JwtResponse {

    private String jwt;

    public JwtResponse(String jwt) {
        this.jwt = jwt;
    }

    public String getToken() {
        return this.jwt;
    }
}
```

**UserService**

```
public interface UserService extends UserDetailsService{
...
	public String login(User user);
...
}
```

**UserServiceImpl**

```
import com.example.springbootmonolith.util.JwtUtil;

public class UserServiceImpl implements UserService {
...
	@Autowired
    JwtUtil jwtUtil;

	@Override
    public String login(User user){
        if(userRepository.login(user.getUsername(), user.getPassword()) != null){
            UserDetails userDetails = loadUserByUsername(user.getUsername());
            return jwtUtil.generateToken(userDetails);
        }
        return null;
    }
...
}
```

**UserController**

```
public class UserController {
...

	@PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return ResponseEntity.ok(new JwtResponse(userService.login(user)));
    }
...
}
```

Test this link [http://localhost:8080/login](http://localhost:8080/login) to verify that you are getting a token back. 

Congratulations! You have successfully authenticated your User and sent a token back to the client for futher communication.

------

## You Do - Implementing JWT (15 min)

Login is updated to return only the JSON Web Token but `/signup` is still returning the entire user object. When a User signs up we only want to send a newly generated token as response. 

Update your signup logic to incorporate the above change. It will be done exactly as it was done for login. 

<details><summary>**UserService**</summary>

```
public interface UserService extends UserDetailsService{
...
	public String createUser(User newUser);
...
}
```

</details>

<details><summary>**UserServiceImpl**</summary>

```
public class UserServiceImpl implements UserService {
...
	@Override
    public String createUser(User newUser) {
        UserRole userRole = userRoleService.getRole(newUser.getUserRole().getName());
        newUser.setUserRole(userRole);
        
        if(userRepository.save(newUser) != null){
            UserDetails userDetails = loadUserByUsername(newUser.getUsername());
            return jwtUtil.generateToken(userDetails);
        }
        return null;
    }
...
}
```

</details>

<details><summary>**UserController**</summary>

```
public class UserController {
...

	@PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User newUser) {
        return ResponseEntity.ok(new JwtResponse(userService.createUser(newUser)));
    }
...
}
```

</details>

Check the [API](http://localhost:8080/signup) to make sure it is giving the correct response.

----

## Token Authentication (15 min)

Now all your successive communication between client and server will be done using the token until the session expires. Now picture this that the User is logged in for any other request that User makes it will be authenticated using the token so that means what we have till now is a half-baked pie. We still need to add logic for token verification.

Create a new class `JwtRequestFilter` under `com.example.springbootmonolith.config` package. This class will be responsible for parsing our token and using data from it to authenticate the request.

**JwtRequestFilter**

```
package com.example.springbootmonolith.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.springbootmonolith.config.JwtUtil;
import com.example.springbootmonolith.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        final String requestTokenHeader = request.getHeader("Authorization");

        String username = null;
        String jwtToken = null;
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            try {
                username = jwtUtil.getUsernameFromToken(jwtToken);
            } catch (IllegalArgumentException e) {
                System.out.println("Unable to get JWT Token");
            } catch (ExpiredJwtException e) {
                System.out.println("JWT Token has expired");
            }
        } else {
            logger.warn("JWT Token does not begin with Bearer String");
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userService.loadUserByUsername(username);

            if (jwtUtil.validateToken(jwtToken, userDetails)) {
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken
                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }
        chain.doFilter(request, response);
    }
}
```

Do not let the size of this class intimidate you. What we are mainly doing here is extending a class `OncePerRequestFilter` which is very useful with security authentication. For every request this filter will execute exactly once. After that we are overriding `doFilterInternal()` which accepts HttpServlet request and response as input. In this method we will parse the token to retrieve `username` from it. 

Also, every time we get a token we first need to check if it is still valid. Different applications have different expiry time set on every token. It is mostly lead by the senstivity of data. Like a banking application might set token expiry to may be less than 5 minutes, whereas an ecommerce might set it for may be couple of hours.

You must be seeing a bunch of compilation errors with methods not found. Our next step will be to add all these methods in `JwtUtil` class. This is where all our util methods for JWT will exist.

**JwtUtil**

```
package com.example.springbootmonolith.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

public class JwtUtil implements Serializable {
...
	public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

	//we will again use secret key to get username from the token
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }

	//check both expiry and the username received from the token to validate it
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

	//verify if the token has expired
    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }
...
}
```

Then we just need to add one more line in our `SecurityConfig` class to take the above filter into account. Our Spring security component will take care of the rest.

**SecurityConfig**

```
public class SecurityConfig extends WebSecurityConfigurerAdapter{
...
    @Autowired
    private JwtRequestFilter jwtRequestFilter;
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/signup/**", "/login/**").permitAll()
                .antMatchers("/user/**", "/profile/**", "/course/**").authenticated()
                .antMatchers("/role/**").hasRole("DBA")
                .and()
                .httpBasic();

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }
...
}
```

Restart the server. First generate a token by logging in [http://localhost:8080/login](http://localhost:8080/login). In Postman you will use Bearer token for auth as shown in the image below.

![](/Week6/Lessons/1-Monday/2-Spring-Boot-Security-Lesson/images/jwt_auth_success.png)

-----

## Password Encryption (15 min)

Till now we have been saving our password as a string in our database. Now we all know that is definitely not the best practice for obvious reasons. What we are going to do is use Spring Security way to encrypt our password. For this we only need to make changes while `createUser()` and `login()` in `UserServiceImpl` class. We will use existing `bCryptPasswordEncoder` object to encrypt the password and use its `matches()` method to compare it against what user has sent in `login`. 

**UserServiceImpl**

```
public class UserServiceImpl implements UserService {
...
	@Override
    public String createUser(User newUser) {
        UserRole userRole = userRoleService.getRole(newUser.getUserRole().getName());
        newUser.setUserRole(userRole);
        newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
     
        if(userRepository.save(newUser) != null){
            UserDetails userDetails = loadUserByUsername(newUser.getUsername());
            return jwtUtil.generateToken(userDetails);
        }
        return null;
    }	
    
    @Override
    public String login(User user){
        User newUser = userRepository.findByUsername(user.getUsername());
     
        if(newUser != null && bCryptPasswordEncoder.matches(user.getPassword(), newUser.getPassword())){
            UserDetails userDetails = loadUserByUsername(newUser.getUsername());
            return jwtUtil.generateToken(userDetails);
        }
        return null;
    }
...
}
```

-----

## You Do - Test Your Routes With JWT (15 min)

Again pair up, take 15 minutes to test all the routes using the JWT auth.

**Generate JWT**

POST [http://localhost:8080/signup](http://localhost:8080/signup)

POST [http://localhost:8080/login](http://localhost:8080/login)

**Test for Authentication**

POST [http://localhost:8080/course](http://localhost:8080/course) 

GET [http://localhost:8080/course/list](http://localhost:8080/course/list)

POST [http://localhost:8080/profile/{username}](http://localhost:8080/profile/batman)

GET [http://localhost:8080/profile/{username}](http://localhost:8080/profile/batman)

PUT [http://localhost:8080/user/{username}/{courseId}](http://localhost:8080/user/batman/robin)

DELETE [http://localhost:8080/user/{userId}](http://localhost:8080/user/1)


**Test for Authorization**

POST [http://localhost:8080/role](http://localhost:8080/role)

GET [http://localhost:8080/role/{rolename}](http://localhost:8080/role/ROLE_ADMIN)

GET [http://localhost:8080/user/list](http://localhost:8080/user/list)

----

## Conclusion (5 min)

You made it! You can now use Spring Security along with JWT to authenticate and authorize users in your Spring Boot app.

**Lab: Spring Music App**

You will now work to protect your APIs using JWT by working on [Step 4](https://git.generalassemb.ly/GA-Cognizant/spring-boot/tree/master/spring-boot-lab#step-4-spring-security) of the [lab](https://git.generalassemb.ly/GA-Cognizant/spring-boot/tree/master/spring-boot-lab). Just like before make sure you read all the instructions before you begin.

