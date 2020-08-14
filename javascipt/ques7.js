const ar1=["ab","ab","ab","ab"];
const ar2=["sc","Sc","sC","SC"];
const ar3=["SS","SS","SS","Ss"]
const identical=function(a,b,c,d)
{
    if((a==b) && (b==c)&&( c==d))
    return true;
    else 
    return false;

}
console.log(identical(...ar3));