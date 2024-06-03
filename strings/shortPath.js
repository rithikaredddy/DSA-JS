let str="WNEENESENNN";
let shortPath=(str)=>{
    let x=0;
    let y=0;
    for(let i=0;i<str.length;i++){
        let dir=str.charAt(i);
        if(dir=="W"){
            x--;
        }
        else if(dir=="E"){
            x++;
        }
        else if(dir=="N"){
            y++;
        }
        else{
            y--;
        }
    }
    let x2=x*x;
    let y2=y*y;
    return Math.sqrt(x2+y2);
}
console.log(shortPath(str));
