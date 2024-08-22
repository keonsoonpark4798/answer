function solution(nums) {
    var answer = 0;
    let arr = [];
    for(let i = 0; i<nums.length-2;i++)
    {
        for(let j = i + 1; j<nums.length-1;j++)
        {
            for(let k = j + 1; k <nums.length;k++)
            {
                let sum = nums[i] + nums[j] + nums[k];
                arr.push(sum);
            }
        }
    }
    console.log(arr);
    
    for(let l = 0; l < arr.length; l++)
    {
        if(prime(arr[l]))
        {
            answer++;
        }
    }
    
    return answer;
}

function prime(num)
{
    if(num === 2){
        return true;
    }
    
    for(let i = 2; i<= Math.floor(Math.sqrt(num));i++)
    {
        if(num % i === 0)
            return false;
    }
    return true;
}