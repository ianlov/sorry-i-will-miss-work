# [Sorry, I Will Miss Work](https://ianlov.github.io/sorry-i-will-miss-work/)

# Project Description
Have you ever wanted to skip out on work, but struggled to find an excuse? Now you can find the perfect excuse for any workday absence with :tada:"Sorry I Will Miss Work":tada:! Enter a date, and the app will give you a holiday to help you explain why you will miss work that day. "Sorry I Will Miss Work" will even create an email you can send to your boss that will surely explain the importance of your absence.

# API Sample
https://calendarific.com/
```
{
    "meta": {
        "code": 200
    },
    "response": {
        "holidays": [
            {
                "name": "Liberation Day",
                "description": "Liberation Day is a public holiday in Afghanistan",
                "country": {
                    "id": "af",
                    "name": "Afghanistan"
                },
                "date": {
                    "iso": "2021-02-15",
                    "datetime": {
                        "year": 2021,
                        "month": 2,
                        "day": 15
                    }
                },
                "type": [
                    "National holiday"
                ],
                "locations": "All",
                "states": "All"
            },
            {
                "name": "March Equinox",
                "description": "March Equinox in Afghanistan (Kabul)",
                "country": {
                    "id": "af",
                    "name": "Afghanistan"
                },
                "date": {
                    "iso": "2021-03-20T14:07:31+04:30",
                    "datetime": {
                        "year": 2021,
                        "month": 3,
                        "day": 20,
                        "hour": 14,
                        "minute": 7,
                        "second": 31
                    },
                    "timezone": {
                        "offset": "+04:30",
                        "zoneabb": "AFT",
                        "zoneoffset": 16200,
                        "zonedst": 0,
                        "zonetotaloffset": 16200
                    }
                },
                "type": [
                    "Season"
                ],
                "locations": "All",
                "states": "All"
            }
        ]
    }
};
```
# Wireframes
![image](https://user-images.githubusercontent.com/89525025/140949217-433ca9cc-c17c-445c-a95a-016b678dfa81.png)

# MVP/Post-MVP
## MVP
- [x] Find and incorperate a holiday API
- [x] Render data using a date input
- [x] Generate an email template that includes the holiday and relevant information
- [x] Build layout using HTML and JavaScript
- [x] Style the page using CSS and Flexbox
- [x] Use "mobile first" principles to create a responsive website

## Post-MVP
- [x] Add a 'copy' button that lets the user copy the email template
- [ ] Incorperate a loading animation (possibly from codepen)

# Code Snippets
## Asynchronus function
This was a chunk of code where I learned a lot about fetching and manipulating data from an API. There were a limited number of fetch requests, so I wanted to eliminate any uneccissary fetches. I needed to stop the loop (seen at the top of the snippet) when I had the data I needed. An if statement was written to check if the page had a holiday displayed, but it didn't work because fetch is an asynchronous function - the order of code execution is thrown off. Since fetch is slower than the rest of the script, I had to put two instances of the same if statement in the code; one on the inside of the fetch and one above it. Additionally, I put an if statement inside the fetch that checked if the incoming data was empty.

```
for (let i = 0; i < countries.length; i++)  {

    let country = countries[i];
    const key = '9f7484ace85d979cd66c3f946ed8234d7c1374c8'
    const URL = `https://calendarific.com/api/v2/holidays?api_key=${key}&country=${country}&year=${year}&month=${month}&day=${day}`

//~~Uses a boolean within the makeDisplay function to check if there are holidays on the page
    if (hasHoliday === false) {
    fetch(URL)
        .then((res) => { return res.json() })
        .then((resJSON) => {
        
//~~~~~~~~~~Checks to see if there are holidays in the JSON
            if (resJSON.response.holidays.length > 0) {
//~~~~~~~~~~~~~~Again, checks if there are holidays on the page with the boolean
                if (hasHoliday === false) {
                    console.log(resJSON.response)
                    makeDisplay(resJSON.response.holidays);
                    for (let i = 0; i < document.querySelector('#item5').children.length; i++) {
                        document.querySelector('#item5').children[i].querySelector('button').addEventListener('click', () => {
                            let holiday = document.querySelector(`.h-${i}`).querySelector('h4').innerText;
                            let description = document.querySelector(`.h-${i}`).querySelector('h5').innerText;
                            makeTemplate(day, month, year, holiday, description)

                        });
                    };
                };
            };
        })
        .catch((error) => { console.error(`ERROR: ${error}`) });

    };
};
```

## CSS Organization
This is a code snippet from my style page. I learned in this project that I need to be organized in my styling if I want to be effective. What is shown below is a portion of my second attempt at styling the page, which has section headers and coherent naming of divs. The first attempt worked to an extent, but the lack of organization made it difficult to work out bugs in the code.

```
/* === Body === */

body {
    background-color: whitesmoke;
    font-family: 'Just Me Again Down Here', cursive;
}

#item2 { grid-area: title; }
#item3 { grid-area: description; }
#item4 { grid-area: input; }
#item5 { grid-area: print; }
#item6 { grid-area: footer; }

.grid-container {
    display: grid;
    grid-template-areas:
        'title'
        'description'
        'input'
        'print'
        'footer';
    padding: 0px;
    width: auto;
    height: 100vh;
}
```

## Creating the Email Template
The API I chose gave me some great information to work with when creating the email template. I already had the date, but from the API, I had the name of the holiday and a description. To make the email more readable, I couldn't just put in the numerical values of the day and month, so I created an object of arrays that held the text-based days and months. How I called these values can be seen in the last chunk of code within the makeTemplate function.
The first chunk of code in the makeTemplate function fixed an issue I was having with the description; sometimes there was a period and sometimes not. To solve this, I made an if statement that checks if the last character is a period. If it is, it uses the .slice function to remove it from the string.

```
// Object that holds the text-based values of the dates
const textDates = {
    days: [
        'first', 
        'second', 
        'third', 
        '4th', 
        '5th', 
        '6th', 
        '7th', 
        '8th', 
        '9th', 
        '10th', 
        '11th', 
        '12th', 
        '13th', 
        '14th', 
        '15th', 
        '16th', 
        '17th', 
        '18th', 
        '19th', 
        '20th', 
        '21st', 
        '22nd', 
        '23rd', 
        '24th', 
        '25th', 
        '26th', 
        '27th', 
        '28th', 
        '29th', 
        '30th', 
        '31st'],
    months: [
        'January', 
        'February', 
        'March', 
        'April',
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December']
    };
    
const makeTemplate = (day, month, year, holiday, description) => {
//~~Fix additional period issues on description
    if (description.charAt(description.length - 1) === ".") {
        description = description.slice(0, -1);
    }

//~~Create adaptave email template
    const template = `I regret to inform you that I will not be at work on the ${textDates.days[day-1]} of ${textDates.months[month-1]}, ${year}, 
    because it is ${holiday}. I can assure you, I celebrate this holiday every year. ${description}. I trust that you do not have any further 
    questions about the matter.`
    
```
