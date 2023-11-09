import React  from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import { evaluate } from 'mathjs';
import style from "./../css/Bisection.module.css"
import { Button, Container, Form, Table } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

function Falseposition() {
    const print = () => {
        console.log(data)
        setValueIter(data.map((x)=>X.iteration));
        setValueXl(data.map((x)=>X.Xl));
        setValueXm(data.map((x)=>X.Xm));
        setValueXr(data.map((x)=>X.Xr));

        return(
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Iteration</th>
                            <th>XL</th>
                            <th>XM</th>
                            <th>XR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element , index)=> {
                            return (
                                <tr key={index}>
                                    <td>{element.iteration}</td>
                                    <td>{element.Xl}</td>
                                    <td>{element.Xm}</td>
                                    <td>{element.Xr}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                    <LineChart width={900} height={400} data={data}>
                        <XAxis dataKey="index"/>
                        <YAxis/>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line type="data" dataKey="Xl" stroke="#8884d8" />
                        <Line type="data" dataKey="Xm" stroke="#82ca9d" />
                        <Line type="data" dataKey="Xr" stroke="#000" />
                    </LineChart>
            </Container>
        )
    }

    const error = (xold , xnew) => Math.abs((xnew-xold)/xnew)*100;

    const CalfalsePosition = (xl , xr) => {
        var fXm, xm ,fXl , fXr, ea , scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj = {};

        do {
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation , scope)
            
            scope = {
                x:xl, 
            }   
            fXl = evaluate(Equation , scope)

            xm = xr - (fXr*(xl-xr)) / (fXl - fXr);
            
            scope = {
                x:xm
            }
            fXm = evaluate(Equation , scope)

            if (fXm*fXr < 0) {
                ea = error(xr,xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr
                }
                console.log(obj)
                data.push(obj)
                xr = xm ;
            }

            else if (fXm*fXr > 0) {
                ea = error(xl,xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr
                }
                console.log(obj)
                data.push(obj)
                xl = xm ;
            }
            iter ++;

        }while (ea>e && iter<MAX);
        setX(xm)
    }

    // Part data

    const data =[];

    const [valueIter , setValueIter] = useState([]);
    const [valueXl , setValueXl] = useState([]);
    const [valueXr , setValueXr] = useState([]);
    const [valueXm , setValueXm] = useState([]);

    const [Html ,setHtml] = useState(null);
    const [Equation , setEquation] = useState ("(x^4)-13")
    const [X , setX] = useState(0)
    const [XL , setXL] = useState(0)
    const [XR , setXR] = useState(0)

    const inputEquation = (event) => {
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXl = (event) => {
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXr = (event) => {
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = (event) => {
        event.preventDefault();
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        CalfalsePosition(xlnum , xrnum)

        setHtml(print());

        console.log(valueIter)
        console.log(valueXl)
    }

    //Html part

    return (
        <Container>
            <Form>
                <div className={style.FalsePisitionForm}>
                    <label className={style.FalsePisitionLabel}>Input Equation</label>
                        <input 
                            type="text"
                            id="equation"
                            value={Equation}
                            onChange={inputEquation}
                            classname={style.Input}>
                        </input>
                    <label className={style.FalsePisitionLabel}>Input Xl</label>
                        <input
                            type="number"
                            id="Xl"
                            onChange={inputXl}
                            className={style.Input}>
                        </input>
                    <lable className={style.FalsePisitionLabel}>Input Xr</lable>
                        <input
                            type="number"
                            id="XR"
                            onChange={inputXr}
                            className={style.Input}>
                        </input>
                        <div className={style.FalsePositBtn}>
                            <button onClick={calculateRoot}>Calculate</button>
                        </div>
                </div>
            </Form>
            <Container>
                {Html}
            </Container>
        </Container>
    )
}

export default Falseposition