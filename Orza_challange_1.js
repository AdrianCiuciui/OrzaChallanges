//var myNumber = [10, 20, 30, [100, 200], 40, 50]; //your simple array
var myNumber = [1,5,[1,2],[3,4],10,9,[5],[6,[99,99,[99,[88,88,[77,77]],99]]]];//multilevel array
//var myNumber = [7,6,5,4,3,[[[[0]]]]];//no depth array
console.log("This code will dinamically display ONLY the second level of the following array:\n"+JSON.stringify(myNumber)+'\n');

// Solution #A =====================================
for(i=0;i<myNumber.length;i++){
    var lvlTwoCount=0;//Pt cand nu este nici un level 2 in array
for(j=0;j<myNumber[i].length;j++){
    if (myNumber[i][j]!=0) {//am scris mai jos rolul intentionat pt acest if
    console.log(myNumber[i][j]);
    lvlTwoCount+=1;
    }
    else {continue;}//am sperat sa pot scapa de ceea ce mai arata in log, la myNumber de la randul 21 dar nu reusesc sa scap nicicum de acel text
}
}
if (lvlTwoCount===0) {console.log("There are no suitable numbers to display, try changing the array. :D")}


// Solution #B - also checks object type ==================================
var myArr = [1, 2, 3, [10, 11, [1321, 3213, [321321, true], "ha"], 133], 4, 5];
for (i = 0; i < myArr.length; i++) {
    if (typeof (myArr[i]) == 'object') {
        var secondArr = myArr[i]
        for (j = 0; j < secondArr.length; j++) {
            if (typeof (secondArr[j]) != 'object') {
                console.log(secondArr[j])
            }
        }
    }
}