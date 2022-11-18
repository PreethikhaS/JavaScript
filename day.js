console.log("Before");
getUser(10, function (user) {
  console.log("user-->", user);
});
console.log("After");
function getUser(id, printUser) {
  setTimeout(function () {
    console.log(`Reading data from database with ${id}...`);
    let userData = "vasanth";
    printUser(userData);
  }, 10000);
}

console.log("Before");
getUser(10, function (userName) {
  console.log("user-->", userName);
  getRepositories(userName, function (repos) {
    console.log("repos", repos);
  });
});
console.log("After");
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
