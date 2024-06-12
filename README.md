# CodeNex
### Welcome to CodeNex! This library provides a collection of utility functions designed to simplify and enhance the development experience in React applications.

#### Getting Started

To start using ModuLib in your React project, add it as a dependency in your package.json file and install it via npm. You can link directly to the GitHub repository:

First, add ModuLib to your package.json dependencies:

```
"dependencies": {
  "modulib": "git+https://{ACCESS_KEY}@github.com/gregorisbachtsevanos/ModuLib.git"
}
```

Then, install the dependencies using npm:
```
npm i
```


Usage
Import the desired utility functions into your React component:
```
import { formatDate } from 'codenex';
```
#### Available Utilities
formatDate
Formats a JavaScript Date object into a readable string.

Usage:
```
const date = new Date();
const formattedDate = formatDate(date, 'YYYY-MM-DD');
console.log(formattedDate); // Output: '2024-06-12'
```

#### TypeScript Support
This library is built with TypeScript and provides full type definitions out of the box. Each utility function includes detailed type annotations to ensure a seamless development experience.

#### License
This project is licensed under the MIT License - see the LICENSE file for details.
