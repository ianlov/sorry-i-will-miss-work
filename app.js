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

const country = 'US'
const year = '2021'
const key = '9f7484ace85d979cd66c3f946ed8234d7c1374c8'
const URL = `https://calendarific.com/api/v2/holidays?api_key=${key}&country=${country}&year=${year}`

// Search
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded')
    document.querySelector('button').addEventListener('click', (ev) => {
        console.log('button clicked')
        fetch(URL)
            //.then(() => { console.log('fetched data') })
            .then((res) => { return res.json() })
            .then((resJSON) => {
                // Manipulate data
                console.log(resJSON);
            })
            .catch((error) => { console.error(`ERROR: ${error}`) });

            ev.preventDefault();
    });
});
// Choose holiday