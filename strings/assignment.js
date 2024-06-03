let str="Navaneeth";
let replace=(str)=>{
    return str.replace("e","");
}
console.log(replace(str));

//anagrams or not
let str1="Navaneeth";
let str2="Rithika";
let anagram=(str1,str2)=>{
    for(let i=0;i<str1.length;i++){
        for(let j=0;j<str2.length;j++){
            if(str1.charAt(i)==str2.charAt(j)){
                return true;
            }
            else{
                return false;
            }
        }
    }
}
console.log(anagram(str1,str2));