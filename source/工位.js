let max=0,left=0,right=0;
 
//let xu = readline().split(" ");
let xu = "1 1 0 1 2 1 0".split(" ");
 
for(let i=0; i<xu.length; i++)
{
    if(xu[i] == "1")
    {
        left ++;
    }
    else if(xu[i] == "2")
    {
        left = 0;
    }
    else if(xu[i] == "0")
    {
        for(let j=i+1; j<xu.length; j++)
        {
            if(xu[j] == "1")
            {
                right ++;
            }
            else if(xu[j] == "0" || xu[j] == "2")
            {
                break;
            }
        }
        if(max < left + right)
        {
            max = left + right;
        }
        right=0;
        left=0;
    }
}
 
console.log(max);