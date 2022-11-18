// // asynchronous Programming

// // callback
// console.log("Before");
// getUser(10, function (userName) {
//   console.log("user-->", userName);
//   getRepositories(userName, function (repos) {
//     console.log("repos", repos);
//     getCommits(repos[0], function (commits) {
//       console.log("commits", commits);
//       //   CALLBACK HELL or Christmas Tree Problem
//     });
//   });
// });
// console.log("After");

// // callback functions -> printUser, printRepos, printCommits
// // higher order function -> a function which passes function as a parameter
// // or returns a function (getUser, getRepositories, getCommits)
// function getUser(id, printUser) {
//   setTimeout(function () {
//     console.log(`Reading data from database with ${id}...`);
//     let userName = "vasanth";
//     printUser(userName);
//   }, 1000);
// }

// function getRepositories(userName, printRepos) {
//   setTimeout(function () {
//     console.log(`getting repos of user ${userName}`);
//     let repos = ["calcultor", "portfolio"];
//     printRepos(repos);
//   }, 2000);
// }

// function getCommits(repo, printCommits) {
//   setTimeout(function () {
//     console.log(`getting commits of repo ${repo}`);
//     let commits = ["initial commit", "first commit"];
//     printCommits(commits);
//   }, 2000);
// }

/**
 * -----------------------
 * PROMISES
 *-------------------------
 */

// const p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("success");
//     // reject("error in promise");
//   }, 3000);
// });

// p.then(function (result) {
//   console.log(result);
// }).catch(function (error) {
//   console.log(error);
// });

/**
 * Get commits using promises
 */

// function getUser(id) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(`Reading data from database with ${id}...`);
//       let userName = "vasanth";
//       resolve(userName);
//       // reject("error in user");
//     }, 1000);
//   });
// }

// function getRepositories(userName) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(`getting repos of user ${userName}`);
//       let repos = ["calcultor", "portfolio"];
//       // resolve(repos);
//       reject("error in repos");
//     }, 2000);
//   });
// }

// function getCommits(repo) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(`getting commits of repo ${repo}`);
//       let commits = ["initial commit", "first commit"];
//       resolve(commits);
//     }, 2000);
//   });
// }

// getUser(10)
//   .then(function (userName) {
//     console.log(userName);
//     getRepositories(userName)
//       .then(function (repos) {
//         console.log(repos);
//         getCommits(repos[0])
//           .then(function (commits) {
//             console.log(commits);
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// getUser(10)
//   .then(function (userName) {
//     console.log(userName);
//     return getRepositories(userName);
//   })
//   .then(function (repos) {
//     console.log(repos);
//     return getCommits(repos[0]);
//   })
//   .then(function (commits) {
//     console.log(commits);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("p1 error");
//   }, 2000);
// });

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("p2");
//   }, 1000);
// });

// p1.then(function (res) {
//   console.log(res);
// })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("finally");
//   });

// Promise.all([p1, p2])
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Promise.race([p1, p2])
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

/**
 * --------------------
 * ASYNC AWAIT
 * --------------------
 */

// function getUser(id) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(`Reading data from database with ${id}...`);
//       let userName = "vasanth";
//       resolve(userName);
//       // reject("error in user");
//     }, 1000);
//   });
// }

// function getRepositories(userName) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(`getting repos of user ${userName}`);
//       let repos = ["calcultor", "portfolio"];
//       resolve(repos);
//       // reject("error in repos");
//     }, 2000);
//   });
// }

// function getCommits(repo) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(`getting commits of repo ${repo}`);
//       let commits = ["initial commit", "first commit"];
//       resolve(commits);
//     }, 2000);
//   });
// }

// // syntactic sugar of promise

// async function gitHubAction() {
//   try {
//     const userName = await getUser(10);
//     console.log(userName);
//     const repos = await getRepositories(userName);
//     console.log(repos);
//     const commits = await getCommits(repos[0]);
//     console.log(commits);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("finally");
//   }
// }

// gitHubAction();
