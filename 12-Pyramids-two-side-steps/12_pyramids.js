// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const len = 1 + (n-1)*2; //first get the total length of last row
    for (let i=1; i<=n; i++){
        let pound = 1+(i-1)*2 // number of # 
        let space = (len-pound)/2 //number of space on each side, thus divided by 2
        let str = ' '.repeat(space)+'#'.repeat(pound)+' '.repeat(space)
        console.log(str)
    }
}

