const accountBalanceUsd = "$45,000,000,000 🤑💰";
const swissBankPassCodesArr = [1234, 5678, 9876, 3434];

function authenticationCheck(passCode) {
  swissBankPassCodesArr.forEach((code) => {
    code === passCode && console.log("You have unlocked", accountBalanceUsd);
  });
}

authenticationCheck(3434);
