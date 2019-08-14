# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Open Weather API | Lab | 1:30 | Rachel Moskowitz (adapted from SEI) |


# Building a weather app!!

Here's an exciting challenge: You'll be building a small weather app, using your newfound skills with APIs!

## Setting up

#### 🚀 Make sure you follow all of these steps!


1. Sign up for a free [Open Weather Map](https://home.openweathermap.org/users/sign_up) account!
2. Once you've signed up, you're given an [API key](https://home.openweathermap.org/api_keys). Copy that API key and keep track of it somewhere!
3. Open Postman to check out the data you're working with & to verify that your key works. Make a GET request to the following URL in postman, adding your API key to the end.

```
http://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial&appid=[PUT YOUR API KEY HERE]
```

#### You'll be working in `index.html`, `main.js`, and `style/style.css`.

## In the end, your weather app should look something like this:

![desktop](./assets/desktop.jpg)

## Your page should have:
- An input field for a user to enter a zip code
- A submit button
- When the submit button is clicked:
    - A GET request should fetch the weather data from the API
    - The following data should be rendered on the page:
        - City name
        - Current temperature
        - Weather description
        - Min temp
        - Max temp
- Have the temperature turn blue if under 40, and red if above 90.

Here are some zip codes to test!
- 99501 (Anchorage)
- 99723 (Barrow, AK)
- 60605 (Chicago)
- 70124 (New Orleans)
- 77030 (Houston, TX)
- 00902 (San Juan, Puerto Rico)
- 46923 (Delphi, IN)
- 94123 (San Francisco, CA)

## BONUSES!!

- Add the latitude and longitude, humidity, precipitation, and wind speed
- Add FontAwesome icons
- Add sunrise and sunset times (look into [the javascript date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)... if you dare!!!)



