import React , {useState} from "react";
import { evaluate } from "mathjs";
import { Container , Form ,Table} from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const Integrate = ()=> {
    function print () {
            console.log(data)
            setValueiter(data.map((x)=>x.iteration));
            setValuea(data.map((x)=>x.a));
            setValueb(data.map((x)=>x.b));
            setValueh(data.map((x)=>x.h));

        <Container>
            <Table>
                <thead>
                    <th>Iteration</th>
                    <th>A</th>
                    <th>B</th>
                    <th>H</th>
                </thead>
                <tbody>
                {data.map((element , index)=>{
                            return (
                                <tr key={index}>
                                    <td>{element.iteration}</td>
                                    <td>{element.a}</td>
                                    <td>{element.b}</td>
                                    <td>{element.h}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
        </Container>
    }
    
    const data = [];

    const [valueiter ,setValueiter] = useState([]);
    const [valuea ,setValuea] = useState([]);
    const [valueb ,setValueb] = useState([]);
    const [valueh ,setValuec] = useState([]);
    const [valuen ,setValueh] = useState([]);

    const [Html , setHtml] = useState(null)
    const [equation , setequation] = useState('')
    const [x , setx] = useState(0)
    const [a , seta] = useState(0)
    const [b , setb] = useState(0)
    const [h , seth] = useState(0)
    const [n , setn] = useState(0)

    function CalIntegrate (A,B,H) {
        var funcA ,funcB;
        var sum;
        var scope = 4;
        var obj = 0;
        var equ ,mid, fmid ,X;
        var finalresult =0;
        
        equ = {
            x:A
        }
        funcA = evaluate(equation,equ)

        equ = {
            x:B
        }
        funcB=evaluate(equation,equ)
        sum = funcA + funcB;

        for(let i = 0; i < scope; i++) {
            obj = {
                iteration:i
            }
            mid = (A+i)*H;
            equ = {
                x:mid
            } 
            fmid = evaluate(equation,equ);
            console.log(fmid)
            sum += 2*(fmid);
                obj = {
                    a:funcA,
                    b:funcB,
                    h:fmid
                }
            }
        finalresult = (H/2)*sum; 
            
        
        setx(finalresult)
        console.log (finalresult)
    }
    const inputeqaution = (event) => {
        setequation(event.target.value)
        console.log(event.target.value)
    }
    const inputa = (event) => {
        seta(event.target.value)
        console.log(event.target.value)
    }


    const inputb = (event) => {
        setb(event.target.value)
        console.log(event.target.value)
    }

    const inputh = (event)  => {
        seth(event.target.value)
        console.log(event.target.value)
    }

    const inputn = (event) => {
        setn(event.target.value)
        console.log(event.target.value)
    }
    return(
        <Container>
            <Form>
                <label>input f(x)</label>
                <input 
                type="text"
                id="equation"
                value={equation}
                onClick={inputeqaution}
                ></input>
                <label>input upper</label>
                <input
                type="number"
                id="a"
                onClick={inputa}
                ></input>
                <label>input lower</label>
                <input
                input
                type="number"
                id="b"
                onClick={inputb}
                ></input>
                <label>input h</label>
                <input
                type="number"
                id="h"
                onClick={inputh}
                ></input>
                <label>input n</label>
                <input
                type="number"
                id="n"
                onClick={inputn}
                ></input>
            </Form>
                {/* <p></p> */}
            <Container>
                {Html}
            </Container>s
        </Container>
    )
}

export default Integrate