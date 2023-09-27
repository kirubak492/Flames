function solution(){
let a=document.getElementById("your").value
let b=document.getElementById("partner").value
let x=a.length
let y=b.length
let count = 0;
for(let i=0;i<a.length;i++)
{
        for(let j=0;j<b.length;j++)
        {
            if(a.charAt(i)==b.charAt(j))
            {
            count++;
            b = b.substring(0, j)+b.substring(j+1)
            break;
            }              
        }
 }
let remain=x+y-2*count;      
let str="Flames";
let index=(remain%6);

    for( let i=0;i<5;i++)
    {
        if(index==0)
        {
            index = (str.length)-1;
        }
        else
        {
            index = index-1;
        }
        str = str.substring(index+1)+str.substring(0,index);   
        index = remain%str.length; 
    }
   let res=document.getElementById("result")
   let ans=""
   switch(str)
   {
    case 'F':
        ans="Friend 🫂🫂"
        break;
    case 'l':
        ans="Love ❤️😘"
        break;
    case 'a':
        ans="Affection 😊😊"
        break;
    case 'm':
        ans="Marriage 💏💏"
        break;
    case 'e':
        ans="Enemy 😏😏"
        break;
    case 's':
        ans="Sister 👧👧"
        break;
   }
   res.innerHTML=ans
}
