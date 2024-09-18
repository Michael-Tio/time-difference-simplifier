# time-difference-simplifier
Make your timestamps easier to read for your users. Very easy to use.


## Install package (Run in terminal)
```
npm install time-difference-simplifier
```

## Import package
After the package installation is successful, you can import the package to your project.
```
// Using import method
import { getTimeDifference } from "time-difference-simplifier";

// Using require method
const { getTimeDifference } = require("time-difference-simplifier")
```

## Usage
After the package is imported, you can use the function directly to your code. Here are some example of usage:
```
const now = new Date();
const timeDifference1 = getTimeDifference(now);
// Result: Just now


const past = new Date(2024, 8, 19, 0, 0, 0));
const timeDifference2 = getTimeDifference(past);
// Result: 1 Hour ago


const future = new Date(2030, 8, 19, 0, 0, 0));
const timeDifference3 = getTimeDifference(future);
// Result: Invalid date
```
If your date is in the future, the code will return "Invalid date".
## Available result patterns
Here are all the available result pattern that you can get:
- Just now (less than or equal to 10 seconds)
- x second ago / x seconds ago
- x minute ago / x minutes ago
- x hour ago / x hours ago
- x day ago / x days ago
- x week ago / x weeks ago
- x month ago / x months ago
- x year ago / x years ago

### Author
Michael Andreas Prasetio, Indonesia <br>
michaelandreasprasetio@gmail.com

<a href="https://github.com/Michael-Tio">Github</a>
<a href="https://www.linkedin.com/in/michael-andreas-prasetio/">LinkedIn</a>
