// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//Hint:
//index: 00,01,02 | 12,22|21, 20| 10, 12
//       col +1   |row+1 |col -1| row-1|

function matrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push([...Array(n)]) //create the empty matrix structure
    }
    let value = 1;
    let start_col = 0;
    let end_col = n - 1;
    let start_row = 0;
    let end_row = n - 1;

    while (start_row <= end_row && start_col <= end_col) {
        //1. top row
        for (let i = start_col; i <= end_col; i++) {
            matrix[start_row][i] = value;
            value++;
        }
        start_row++; //first row is done, increment start_row;
        //2. last column
        for (let i = start_row; i <= end_row; i++) {
            matrix[i][end_col] = value;
            value++;
        }
        end_col--; //last column is done

        //3. bottom row
        for (let i = end_col; i >= start_col; i--) {
            matrix[end_row][i] = value;
            value++;
        }
        end_row--; //last row is done
        //4. start column
        for (let i = end_row; i >= start_row; i--) {
            matrix[i][start_col] = value;
            value++
        }
        start_col++;
    }
    return matrix;
}
