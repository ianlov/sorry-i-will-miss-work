# sorry-i-will-miss-work
[link to project here]

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
