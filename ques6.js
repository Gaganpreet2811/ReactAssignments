
const specialRev=function(str,l)
{
    const stack=[];
    var final='';
    
    for(var i=0;i<str.length;i++)
    {
        if(str[i]==l)
        {
            
            break;
        }
        else
        final=final+str[i];
    

    }
    for(var j=i;j<str.length;j++)
    {
        if(str[j]==' ')
        {
            final=final+' ';
            while(stack.length>0)
            {
                final=final+stack.pop();
            }
        
            
            
        }
        
        else
        {
            stack.push(str[j]);
            
        }
    }
    console.log(final)
return final;


}
specialRev("we should not degrade anyone ","s")
