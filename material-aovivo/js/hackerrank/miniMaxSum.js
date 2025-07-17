function miniMaxSum(arr) {
    // Write your code here
    let maxN = arr[0];
    let minN = arr[0];
    
    for (const num of arr) {
        if (num >= maxN) maxN = num;
        if (num <= minN) minN = num;
    }
    
    const resMax = arr.filter(e => e !== maxN).
        reduce((acc, el) => acc + el , 0)
    
    const resMin = arr.filter(e => e !== minN).
        reduce((acc, el) => acc + el , 0)
    
    if (resMax === 0 || resMin === 0) {
        const sum = arr.reduce((acc, el) => acc + el , 0)
        console.log(sum - arr[0], sum - arr[0])
    } else {
        console.log(resMax, resMin)
    }

}