const evenlydivided=function(dividend,divisor)
{
    if(dividend>=divisor)
    {
        if(dividend%divisor==0)
        return true;
        else
        return false;
    }
    else
    {
        return false;
    }

}
console.log(evenlydivided(98,7));
console.log(evenlydivided(85,4));