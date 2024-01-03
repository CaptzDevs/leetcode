
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function createNode(arr = []) {
    if (arr.length === 0) {
        return null;  // Return null if the array is empty
    }
    let head = new ListNode(+arr[0]);
    let current = head;
    let i = 1;

    while (i < arr.length) {
        let newNode = new ListNode(+arr[i]);
        current.next = newNode;
        current = newNode;
        i++;
    }
    return head;
}

function showList(list) {
    let res = ''
    while (list) {

        res += list.val+","
        list = list.next

    }
    console.log(res);
}

let arr1 = [5,6]
let arr2 = [5,4,9]

let l1 = createNode(arr1)
let l2 = createNode(arr2)

// 2 Add Two Numbers

var addTwoNumbers = function (l1, l2) {
    let i = 0
    let l1Value = l1 ? l1.val : 0
    let l2Value = l2 ? l2.val : 0
    let sum = ((l1Value + l2Value))
    let head = new ListNode(sum%10);
    let fac = sum >= 10  ? 1 : 0
    let current = head;

    l1 = l1.next;
    l2 = l2.next;

    while (l1 || l2 || fac == 1) {
        
        l1Value = l1 ? l1.val : 0
        l2Value = l2 ? l2.val : 0
        
        sum = (l1Value + l2Value)
        let sumf = sum+fac
        
        let newNode = new ListNode(sumf%10);
        current.next = newNode;
        current = newNode;

        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
        fac = sumf >= 10  ? 1 : 0
        i++;
    }
    return head;
};

//3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
        console.log(s);
        let longSet = []
        let resultObj = {};
        let subS = ''
        let linked = 0
        let max = 0
        s = [...s]

        s.forEach((item,i) => {
            
            if(!resultObj[item]){
                resultObj[item] = 1
            }else{
                linked = 0
                resultObj[item] += 1
            }
            
            if(linked == 0){
                subS = item
            }
            if(linked > 0){
                subS += item
            }
            
            if(linked >= max){
                max = linked
                longSet.push(subS)
            }
          
            console.log(item , linked);
            linked += 1
        });

        max = 0
        longSet.forEach((item)=>{
            if(item.length >= max){
                max = item.length
            }
        })
        console.log(longSet);
        console.log(max);

        return max
};

//lengthOfLongestSubstring('dvdf')
lengthOfLongestSubstring('pwwkew')