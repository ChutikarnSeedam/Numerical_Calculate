import React, { useState } from "react";
import { evaluate } from 'mathjs';
import { Button, Container, Form, Table } from "react-bootstrap";
import style from "./../css/Bisection.module.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';


const Bisection = () =>{
    const print = () => {
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXl(data.map((x)=>x.Xl));
        setValueXm(data.map((x)=>x.Xm));
        setValueXr(data.map((x)=>x.Xr));

        return(
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th  width="10%">Iteration</th>
                            <th  width="30%">XL</th>
                            <th  width="30%">XM</th>
                            <th  width="30%">XR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element , index)=>{
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
                        <Line type="data" dataKey="Xr" stroke="#FF2D00" />
                    </LineChart>
            </Container>
        );
    }

    const error = (xold , xnew) => Math.abs((xnew-xold)/xnew)*100;

    const Calbisection = (xl , xr) => {
        var xm , fXm , fXr, ea , scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj = {}; 

        do {
            xm = (xl+xr)/2.0;
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation , scope)  //ได้ฟังก์ชั่น

            scope = {
                x:xm,
            }
            fXm = evaluate(Equation , scope)  //ได้ฟังก์ชั่น

            iter ++;

            if (fXm*fXr > 0)
            {
                ea = error(xr,xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr
                }
                data.push(obj)
                xr = xm;
            }
            else if (fXm*fXr < 0)
            {
                ea = error(xl,xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xr:xr,
                    Xm:xm
                }
                data.push(obj)
                xl = xm;
            }

        }while(ea>e && iter<MAX)
        setX(xm)
    }

    const data =[];

    const [valueIter , setValueIter] = useState([]);
    const [valueXl , setValueXl] = useState([]);
    const [valueXr , setValueXr] = useState([]);
    const [valueXm , setValueXm] = useState([]);
    
    const [html ,setHtml] = useState(null);
    const [Equation,setEquation] = useState ("(x^4)-13")
    const [X,setX] = useState(0)
    const [XL,setXL] = useState(0)
    const [XR,setXR] = useState(0)

    const inputEquation = (event) => {
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXl = (event) => {
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXR = (event) => {
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = (event) => {
        event.preventDefault();
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        Calbisection(xlnum , xrnum)

        setHtml(print());

        console.log(valueIter)
        console.log(valueXl)
    }

    return (
        <Container>
            <Form>
                <div className={style.BisectionForm}>
                    <label className={style.BisectionLabel}>Bisection Method</label>
                    <input
                        type="text"
                        id="equation"
                        value={Equation}
                        onChange={inputEquation}
                        className={style.Input}></input>
                    <label className={style.BisectionLabel}>Input XL</label>
                    <input
                        type="number"
                        id="XL"
                        onChange={inputXl}
                        className={style.Input}>
                    </input>
                    <label className={style.BisectionLabel}>Input XR</label>
                    <input
                        type="number"
                        id="XR"
                        onChange={inputXR}
                        className={style.Input}>
                    </input>
                    <div className={style.bisectionBtn}>
                        <button onClick={calculateRoot}>Calculate</button>
                    </div>
                    <div className={style.Answer}>
                        <p> Answer = {X.toPrecision(7)}</p>
                    </div>
                </div>
            </Form>
            <Container>
                {html}
            </Container>
        </Container>
    )
}

export default Bisection 