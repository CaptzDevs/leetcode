
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
        
        let len = s.length
        let maxlength = 0
        let c = 0
        let sumString = ''

        if(len === 0) return 0
        if(len === 1) return 1

        while(c < len){
            let i = c;
            while(i < len){
                let item = s[i]
                if(!sumString.includes(item)){
                    sumString += item                
                }else{
                    if(sumString.length > maxlength){
                        maxlength = sumString.length
                    }
                    sumString = ''
                    break;
                }
                i++;
            }
            c++;
        }
      return maxlength
};

/*     lengthOfLongestSubstring("au")
    lengthOfLongestSubstring("asjrgapa")
    lengthOfLongestSubstring('dvdf') 
    lengthOfLongestSubstring('pwwkew') */


// 4. Median of Two Sorted Arrays
var findMedianSortedArrays = function(nums1, nums2) {
    let sorted = [...nums1 , ...nums2].sort((a,b) => a-b)
    let len = sorted.length
    let center = len / 2
    let median = 0;
    median = len % 2 == 0 ? (sorted[center-1] + sorted[center])/2 : median = sorted[Math.floor(center)];
    return median
};

/* let nums1 = [1,3]
let nums2 = [2]
findMedianSortedArrays(nums1 , nums2) */

// 5. Longest Palindromic Substring # flag

var longestPalindrome = function(s) {
    const len = s.length;
    
    if (len === 0) return '';
    if (len === 1) return s;
    
    let start = 0;
    let maxLength = 1;

    // Create a 2D array to store palindrome information
    const dp = Array.from({ length: len }, () => Array(len).fill(false));

    // All substrings of length 1 are palindromes
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }

    // Check substrings of length 2
    for (let i = 0; i < len - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    // Check substrings of length 3 or more
    for (let currLen = 3; currLen <= len; currLen++) {
        for (let i = 0; i <= len - currLen; i++) {
            const j = i + currLen - 1;

            if (dp[i + 1][j - 1] && s[i] === s[j]) {
                dp[i][j] = true;
                start = i;
                maxLength = currLen;
            }
            
        }
    }
    
    return s.substring(start, start + maxLength);
};

//console.log(longestPalindrome('abcba'));      // aca
/*console.log(longestPalindrome('abcba'));       // abcba
console.log(longestPalindrome('aaaa'));       // aaaa
console.log(longestPalindrome('cbbd'));       // bb
console.log(longestPalindrome('ac'));       // a 
console.log(longestPalindrome('bb'));       // bb 
console.log(longestPalindrome('ccc'));       // a
console.log(longestPalindrome('babad'));    // babad */


// 6. Zigzag Conversion

var convert = function(s, numRows) {
    console.log(s , numRows);
    let len = s.length

    for(let i = 0 ; i < len ; i++){
        console.log(s[i], i , i%6);
    }

    console.log("-----------");
    
    let cols = Math.floor((len-1)/2)
    
        for(let i = 0 ; i < numRows ; i++){

            for(let j = 0 ; j < len ; j++){
                console.log(s[j]);
            }

            console.log('---');
                        
        }
};


console.log(convert('PAYPALISHIRING',4));



`
    0       6       12
    1     5 7    11 13
    2  4    8 10  
    3       9
`







// 0 6 12
// 1 5 7 9 13
// 2 4 8 10
// 3 11