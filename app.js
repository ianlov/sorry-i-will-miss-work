console.log('connected');

// ~~ Pseudo ~~
// 1. Get user info from screen
//      - Date
//      - querySelector.value
// 2. Get info from API
//      - Event listener for button
//      - Fetch data
//      - Convert to JSON
// 3. Manipulate data to print a few holiday options
// 4. Choose holiday
// 5. Generate email template based on holiday choice


// ~~~ Variables&Functions ~~~

// Globally declared value that checks for holidays on the page
let hasHoliday = false;

// List of countries; hopefully covers every day of the year
const countries = [
    'US', 
    'CA', 
    'CN', 
    'DJ', 
    'DE', 
    'HT', 
    'RU', 
    'KR', 
    'TH',
    'AF',
    'AL',
    'AR',
    'AW',
    'AU',
    'AZ',
    'BH',
    'BB',
    'BT'
]

// Text version of dates for writing the email template
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

// Display function
const makeDisplay = (holidayArr) => {
    
    for (let i=0; i<holidayArr.length; i++) {
        // Create elements
        const holiday = document.createElement('div');
        const holidayTitle = document.createElement('h4');
        const holidayDescr = document.createElement('h5');
        const useHoliday = document.createElement('button')

        // Add text and other attributes
        holiday.className = `h-${i}`
        holidayTitle.innerText = holidayArr[i].name;
        holidayDescr.innerText = holidayArr[i].description;
        useHoliday.innerText = "Use this holiday!"

        // Append name and description to holiday
        holiday.append(holidayTitle, holidayDescr, useHoliday);

        // Append holiday to list
        document.querySelector('#item5').append(holiday);
    };

    // When this runs, changes the value to true
    hasHoliday = true;

};

// Makes an email template with easily copyable text
const makeTemplate = (day, month, year, holiday, description) => {
    console.log(`Day: ${day}`);
    console.log(`Month: ${month}`);
    console.log(`Year: ${year}`);
    console.log(`Holiday: ${holiday}`);
    console.log(`Description: ${description}`);

    // Fix additional period issues on description
    if (description.charAt(description.length - 1) === ".") {
        description = description.slice(0, -1);
    }

    // Create adaptave email template
    const template = `I regret to inform you that I will not be at work on the ${textDates.days[day-1]} of ${textDates.months[month-1]}, ${year}, because it is ${holiday}. I can assure you, I celebrate this holiday every year. ${description}. I trust that you do not have any further questions about the matter.`
    console.log(template);

    // Clear screen
    document.querySelector('#item5').innerHTML = "";

    // Print email template
    // Create textbox for email
    const email = document.createElement('textarea');
    const copy = document.createElement('button');
    
    // Add attributes
    email.placeholder = template;
    copy.innerText = 'Copy template';
    copy.addEventListener('click', () => {
        // Getting the text
        let copyText = document.querySelector('textarea');

        // Selecting the text
        copyText.select();

        // Selecting the text on mobile
        copyText.setSelectionRange(0, 99999);

        // Copying text to clipboard
        navigator.clipboard.writeText(copyText.placeholder);
    });

    // Append email and copy button to page
    document.querySelector('#item5').append(email, copy);

};



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~ Webpage Functionality ~~~



document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded')
    
    document.querySelector('button').addEventListener('click', (ev) => {
        console.log('button clicked');

        // Get the date
        const date = document.querySelector('#date').value;
        const newDate = date.split("-");
        const year = newDate[0];
        const month = newDate[1];
        const day = newDate[2];

        // Do while loop to fetch through countries
        for (let i = 0; i < countries.length; i++)  {

            // Make url
            let country = countries[i];
            const key = '9f7484ace85d979cd66c3f946ed8234d7c1374c8'
            const URL = `https://calendarific.com/api/v2/holidays?api_key=${key}&country=${country}&year=${year}&month=${month}&day=${day}`

            // Runs only if there are no holidays printed on screen
            // In both places because async is funky
            if (hasHoliday === false) {

            // Fetch data with "country = countries[i]"
            fetch(URL)
                .then((res) => { return res.json() })
                .then((resJSON) => {
                    // Manipulate data

                    // Runs only if there are holidays in the array
                    if (resJSON.response.holidays.length > 0) {
                        // Runs only if there are no holidays printed on screen
                        // In both places because async is funky
                        if (hasHoliday === false) {
                            // Run data manipulation functions

                            // Create holiday display
                            console.log(resJSON.response)
                            makeDisplay(resJSON.response.holidays);
                            

                            // Choose holiday
                            for (let i = 0; i < document.querySelector('#item5').children.length; i++) {

                                document.querySelector('#item5').children[i].querySelector('button').addEventListener('click', () => {

                                    // Get data
                                    let holiday = document.querySelector(`.h-${i}`).querySelector('h4').innerText;
                                    let description = document.querySelector(`.h-${i}`).querySelector('h5').innerText;

                                    // makeTemplate = (day, month, year, holiday, description)
                                    makeTemplate(day, month, year, holiday, description)

                                });
                            };
                        };
                    };
                })
                .catch((error) => { console.error(`ERROR: ${error}`) });

            };
        };

        // Stop the page from reloading
        ev.preventDefault();

    });
});


// ~~~ Works Cited ~~~
// Used for making a copy to clipboard button ==> https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
// Used for taking the period off the description ==> https://herewecode.io/blog/remove-last-character-string-javascript/ & https://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string