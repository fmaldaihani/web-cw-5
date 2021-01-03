//console.log(21);  
//console.log(5*21);
//console.log('قم بطباعة الجملة "حين أبلغ 5 أضعاف عمري سيبدأ زحل باستقبال المبرمجين على سطح');
//let numberOfyears = alert(2021-1969);
//console.log( ' هو عدد الأعوام التي مرت على صعود الإنسان على سطح القمر 🌑 ')
//console.log(numberOfyears )  

let Quizes= document.getElementById('Quizes').value;
let Midterm= document.getElementById('Midterm').value;
let FinalTest= document.getElementById('FinalTest').value;
let Oral= document.getElementById('Oral').value;
let calculate= alert(Quizes+ Midterm + FinalTest + Oral)


if (calculate >= 90 || calculate < 100 ){

alert('A')
}

else if (calculate>= 80){
    alert('B')

}

else if (calculate>= 70)
{
    alert('C')
}

else if (calculate>= 60)
{
    alert('D')
}
 
else {
    alert('F')
}



