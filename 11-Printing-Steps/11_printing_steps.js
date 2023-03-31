// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// My attempt:
function steps(n) {
    for (let i=1; i<=n; i++){
        console.log('#'.repeat(i)+' '.repeat(n-i))
    }
}

// Alternative solution: Recursion
function steps(n, row=0, stair ='') {
    if (n===row){
        return;
    }
    if (n===stair.length){
        console.log(stair);
        steps(n, row+1); //when moving to the next row, will have an empty string again
        return;
    }
    if (stair.length <= row){
        stair +='#';
    } else{
        stair+=' ';
    }
    steps(n, row, stair);
}