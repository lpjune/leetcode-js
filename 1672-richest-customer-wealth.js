/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        let wealth = 0;
        let customer = accounts[i];
        for (let j = 0; j < customer.length; j++) {
            wealth += customer[j];
        }
        if (wealth > max) {
            max = wealth;
        }
    }
    return max;
};
