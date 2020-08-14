const ar=["abc10","abc","20","abhsg"];
const arf=["gh","2","JK10"]


const findInt=function(ar)
{
    const ar2=[];
    
  for(var i=0;i<ar.length;i++)
  {
      var str=ar[i];
      var flag=false;
      for(var j=0;j<str.length;j++) 
      {
         
          if(0<=str.charAt(j) && str.charAt(j)<=9)
          {
            ar2.push(str);
            break;
          }
         
          
         
         
      }
     
      
  
    
}


  return ar2;   
}

console.log(findInt(arf));