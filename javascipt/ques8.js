const ar=[1,0,1,0];
const removeDuplicates=function(ar)
{
    const ar2=[...new Set(ar)]
  //  console.log(ar2);
    return ar2;
}
console.log(removeDuplicates(ar));