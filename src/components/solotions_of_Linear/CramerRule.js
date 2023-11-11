import React, { useState } from "react";

function CramerRule() {

        // var Result = CramerRule(matrixA ,matrixB);
        // console.log(Result);
        //   // Matrix output is here
        
        // function CramerRule(matrix,matrixB) {
        //   var det = detr(matrixA),
        //       returnArray =[],
        //       i,
        //       tmpMatrix;

        //   for(i=0;i<matrix;i++) {
        //     var tmpMatrix = insertInTerms(matrix,matrixB)

        //   }

        // }

        // function insertInTerms(matrix, ins, at){
        //   //Matrix Transfer
        // }

        // function detr(){
        //   //Matrix --> det
        // } 

        // function clone(paramiter) {

        // }

        //-------Start Matrix Part------
        const [matrixA, setMatrixA] = useState([]);
        const [matrixB, setMatrixB] = useState([]);
        const [numRowsA, setNumRowsA] = useState(2); // จำนวนแถวของ A
        const [numColsA, setNumColsA] = useState(2); // จำนวนคอลัมน์ของ A
        const [numRowsB, setNumRowsB] = useState(2); // จำนวนแถวของ B
        const [numColsB, setNumColsB] = useState(1); // จำนวนคอลัมน์ของ B
      

    //creatw Matrix
    const createMatrixA = () => {
        const newMatrixA = [];
        for (let i = 0; i < numRowsA; i ++) {
            const newRow  = Array(numColsA).fill(0);
            newMatrixA.push(newRow);
        }
        setMatrixA(newMatrixA);
    };
    const createMatrixB = () => {
        const newMatrixB = [];
        for (let i = 0; i < numRowsB; i ++) {
            const newRow  = Array(numColsB).fill(0);
            newMatrixB.push(newRow);
        }
        setMatrixB(newMatrixB);
    };

    const updateMatrixAValue = (rowIndex, colIndex, value) => {
        const updatedMatrixA = [...matrixA];
        updatedMatrixA[rowIndex][colIndex] = value;
        setMatrixA(updatedMatrixA);
      };
    
      const updateMatrixBValue = (rowIndex, colIndex, value) => {
        const updatedMatrixB = [...matrixB];
        updatedMatrixB[rowIndex][colIndex] = value;
        setMatrixB(updatedMatrixB);
      };

      return (
        <div>
          <h2>Choose your Matrix size</h2>
          <div>
            <h3>Matrix A</h3>
            <label>Number of Rows:</label>
            <input
              type="number"
              value={numRowsA}
              onChange={(e) => setNumRowsA(Number(e.target.value))}
            />

            <label>Number of Columns:</label>
            <input
              type="number"
              value={numColsA}
              onChange={(e) => setNumColsA(Number(e.target.value))}
            />
            <button onClick={createMatrixA}>Create Matrix A</button>
          </div>

          //Input Matrix B
          <div>
            <h3>Matrix B</h3>
            <label>Number of Rows:</label>
            <input
              type="number"
              value={numRowsB}
              onChange={(e) => setNumRowsB(Number(e.target.value))}
            />
            <label>Number of Columns:</label>
            <input
              type="number"
              value={numColsB}
              onChange={(e) => setNumColsB(Number(e.target.value))}
            />
            <button onClick={createMatrixB}>Create Matrix B</button>
          </div>

          
          <table>
            <tbody>
              <tr>
                <td>Matrix A</td>
                {matrixA.map((rowA, rowIndexA) => (
                  <tr key={rowIndexA}>
                    {rowA.map((valueA, colIndexA) => (
                      <td key={colIndexA}>
                        <input
                          type="number"
                          value={valueA}
                          onChange={(e) =>
                            updateMatrixAValue(
                              rowIndexA,
                              colIndexA,
                              Number(e.target.value)
                            )
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tr>
              <tr>
                <td>Matrix B</td>
                {matrixB.map((rowB, rowIndexB) => (
                  <tr key={rowIndexB}>
                    {rowB.map((valueB, colIndexB) => (
                      <td key={colIndexB}>
                        <input
                          type="number"
                          value={valueB}
                          onChange={(e) =>
                            updateMatrixBValue(
                              rowIndexB,
                              colIndexB,
                              Number(e.target.value)
                            )
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

export default CramerRule;