const realType=function(a)
{
    if(a.length>=0 && typeof(a)=="object")
    return "array";
    else if(a==null)
    return "null";
    else
    return typeof(a);
}
const user={
    name:"gagan",
    class:"K17MD"

}

//console.log("the data type of [] is "+realType([]));
//console.log("the data type of null is "+realType(null));
//console.log("the data type of {} is "+realType({}));
console.log("the data type of str is "+realType("str"));