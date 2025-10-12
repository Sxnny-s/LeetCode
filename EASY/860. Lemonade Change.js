// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

// Note that you do not have any change in hand at first.

// Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

 

// Example 1:

// Input: bills = [5,5,5,10,20]
// Output: true
// Explanation: 
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.
// Example 2:

// Input: bills = [5,5,10,10,20]
// Output: false
// Explanation: 
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can not give the change of $15 back because we only have two $10 bills.
// Since not every customer received the correct change, the answer is false.
 

var lemonadeChange = function(bills) {
    // 1.Queue FIFO
    // 3. Bank = 0
    // 2. each => e => if e > 5 .... 
    // 5. bank - remainder if bank < 0 => false
    // 4.

    if(bills[0] === 10 || bills[0] === 20  ){
        return false
    }
    
    let bank = {}
    let queue = []

    for(let i = 0; i < bills.length; i++){
        let cash = bills[i]
        bank[cash] = (bank[cash] || 0) + 1
        let change = cash - 5

        if(change === 5){
            bank[5]--
        }if(change === 15){
             if(bank[10] >= 1 && bank[5] >= 1){
                [bank[10]--,bank[5]--]
             }else if(bank[5] >= 3){
                [bank[5] -= 3]
             }else {
                return false
             }
        }
        bank
    }
    return true
};

// time complexity => O(n)
// space complecity => O(n)




const x = [10,10]
// answer => true 
console.log(lemonadeChange(x))