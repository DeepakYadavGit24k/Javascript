const now = new Date();

// Local date string with default locale
console.log(now.toLocaleDateString()); // e.g., "8/30/2024" (depending on your locale)

// Local date string with specific locale
console.log(now.toLocaleDateString('en-GB')); // e.g., "30/08/2024" (British format)

// Local date string with options
console.log(now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })); // e.g., "August 30, 2024"
