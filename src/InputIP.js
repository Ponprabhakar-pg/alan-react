import React from 'react';
import axios from 'axios';

function InputIP(props){
    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target);
        let mtd=event.target.method;
        if(mtd === 'post'){
            let obj={};
            let col=event.target[0].value;
            let data=(event.target[1].value).split(',');
            let data1=data.map(d=>Number(d));
            console.log(data1);
            obj['col']=col;
            for(let i=1;i<=data1.length;i++){
                obj['dt'+String(i)]=data1[i-1];
            }
            console.log(obj)
            axios({
                'method':'POST',
                'url':'http://localhost:4000/elements',
                'data': obj,
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
              })
        }
    }

    if(props.name==="insert"){
        return (<form method="POST" onSubmit={handleSubmit}>
            <input type='text' name={props.name} id={props.name}/>
            <input type='text' name={props.name+"1"} id={props.name+"1"}/>
            <input type='submit' value='Insert'/>
        </form>);
    }
    if(props.name==="update"){
        return (<form method='PUT' onSubmit={props.url}>
            <input type='text' name={props.name} id={props.name}/>
            <input type='text' name={props.name+"1"} id={props.name+"1"}/>
            <input type='text' name={props.name+"2"} id={props.name+"2"}/>
            <input type='submit' value='Update'/>
        </form>);
     }
    if(props.name==="delete"){
        return (<form method='DELETE' onSubmit={props.url}>
            <input type='text' name={props.name} id={props.name}/>
            <input type='text' name={props.name+"1"} id={props.name+"1"}/>
            <input type='submit' value='Delete'/>
        </form>);
    }
    if(props.name==="read"){
        return (<form method='GET' onSubmit={props.url}>
            <input type='text' name={props.name} id={props.name}/>
            <input type='submit' value='Read'/>
        </form>);
    }   
}

export default InputIP;