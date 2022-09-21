// strings -> are immutable

// let fname = "Saravanan";
// console.log(fname[0], fname[1], fname[8], fname[9]);
// console.log(typeof fname);

// fname[0] = "J";
// fname = "Bharadan";
// // Jaravanan
// console.log("output", fname);

// length
// console.log(fname.length);

// methods
// let news = "India won the T20 world cup";
// console.log(news.charAt(500)); // to get value at given index
// console.log(news[500]);

// let fname = "Sriram";
// console.log(fname.charCodeAt(0)); // to get ASCII values
// console.log(fname.concat(" ", "Guru", 10, "vasanth")); // join

// let email = "test@tcs.com";
// console.log(email.endsWith("@infosys.com"));
// console.log(email.startsWith("test1"));

// let news = "India won the world India cup";
// case sensitive
// console.log(news.includes("India", 5)); // search string -> true/false, starting index = 0
// console.log(news.indexOf("India", 0)); // search string -> position, starting index = 0
// console.log(news.lastIndexOf("India", 3));
// console.log(news.match(/india/gi)); // regex -> regular expression
// console.log(news.repeat(3));
// console.log(news.replace(/india/gi, "Pakistan"));
// console.log(news.replaceAll("India", "Pakistan"));
// console.log(news.search(/INdia/gi));