// // asynchronous Programming

// // callback
console.log("Before");
getUser(10, function (userName) {
  console.log("user-->", userName);
  getRepositories(userName, function (repos) {
    console.log("repos", repos);
    getCommits(repos[0], function (commits) {
      console.log("commits", commits);
      //   CALLBACK HELL or Christmas Tree Problem
    });
  });
});
console.log("After");

// callback functions -> printUser, printRepos, printCommits
// higher order function -> a function which passes function as a parameter
// or returns a function (getUser, getRepositories, getCommits)
function getUser(id, printUser) {
  setTimeout(function () {
    console.log(`Reading data from database with ${id}...`);
    let userName = "vasanth";
    printUser(userName);
  }, 1000);
}

function getRepositories(userName, printRepos) {
  setTimeout(function () {
    console.log(`getting repos of user ${userName}`);
    let repos = ["calcultor", "portfolio"];
    printRepos(repos);
  }, 2000);
}

function getCommits(repo, printCommits) {
  setTimeout(function () {
    console.log(`getting commits of repo ${repo}`);
    let commits = ["initial commit", "first commit"];
    printCommits(commits);
  }, 2000);
}

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