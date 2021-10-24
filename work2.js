class Matrix {
  constructor(matrix) {
    this.matrix = matrix
  }

  sort() {
    this.matrix.forEach(el => {
      el.sort()
    });

    return this.matrix
  }

  static sum(matrix1, matrix2) {
    if (matrix1.length !== matrix2.length) return

    const newMatrix = []

    for (let i in matrix1) {
      const row1 = matrix1[i]
      const row2 = matrix2[i]

      if (row1.length !== row2.length) return

      const row = row1.map((el, index) => el + row2[index])
      newMatrix.push(row)
    }

    return newMatrix
  }

  static multiplication(A, B) {
    let rowsA = A.length
    let colsA = A[0].length
    let rowsB = B.length
    let colsB = B[0].length
    const C = [];

    if (colsA != rowsB) return false;

    for (let i = 0; i < rowsA; i++) C[i] = [];
    for (let k = 0; k < colsB; k++) {
      for (let i = 0; i < rowsA; i++) {
        let result = 0;
        for (let j = 0; j < rowsB; j++) result += A[i][j] * B[j][k];
        C[i][k] = result;
      }
    }
    return C;
  }
}

const matrix1 = new Matrix([[1, 2], [2, 3],])
const matrix2 = new Matrix([[3, 6], [5, 2]])

console.log(matrix1.sort(), matrix2.sort())
console.log(Matrix.sum(matrix1.matrix, matrix2.matrix))
console.log(Matrix.multiplication(matrix1.matrix, matrix2.matrix))

