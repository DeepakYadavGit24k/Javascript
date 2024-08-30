const str = "  Hello, JavaScript!  ";

// 1. length - returns the length of the string
console.log(`Length: ${str.length}`);

// 2. toUpperCase() - converts the string to uppercase
console.log(`Uppercase: ${str.toUpperCase()}`);

// 3. toLowerCase() - converts the string to lowercase
console.log(`Lowercase: ${str.toLowerCase()}`);

// 4. trim() - removes whitespace from both sides
console.log(`Trimmed: '${str.trim()}'`);

// 5. slice() - extracts a section of the string
console.log(`Slice: ${str.slice(2, 9)}`);

// 6. includes() - checks if the string contains a substring
console.log(`Includes 'Java': ${str.includes('JavaScript')}`);

// 7. indexOf() - returns the index of the first occurrence of a substring
console.log(`Index of 'JavaScript': ${str.indexOf('Java')}`);

// 8. replace() - replaces a substring with another string
console.log(`Replace 'JavaScript' with 'World': ${str.replace('JavaScript', 'World')}`);


const string  = "Hello, JavaScript, World!";
const result = string.split(", ");  // Splitting by ", "
console.log(result);
