# sorry-i-will-miss-work
https://ianlov.github.io/sorry-i-will-miss-work/

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
https://whimsical.com/siwmw-HFuHuQfxTcdVRwwSurp49k

# MVP/Post-MVP
## MVP
- [x] Find and incorperate a holiday API
- [x] Render data using a date input
- [x] Generate an email template that includes the holiday and relevant information
- [x] Build layout using HTML and JavaScript
- [x] Style the page using CSS and Flexbox
- [x] Use "mobile first" principles to create a responsive website

## Post-MVP
- [ ] Offer multiple email templates
- [ ] Incorperate a loading animation (possibly from codepen)

# Code Snippet
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
