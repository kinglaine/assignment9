import React from "react";
import { useState } from "react";
class CreditBoilerPlate {
    constructor(amount, description, date, time){
        this.amount = amount;
        this.description = description;
        this.date = date;
        this.time = time;
    }
}
export function Credit({balance, setBalance, creditslist, setCreditsList}){
    const[amount, setAmount] = useState(0);
    const[description, setDescription] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        const date = new Date();;
        const fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
        const fullTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const credit = new CreditBoilerPlate(amount, description, fullDate, fullTime);
        setCreditsList(creditslist =>[...creditslist, credit]);
        const remain = parseFloat(amount) + balance;
        setBalance(remain);
        console.log("printing balance", balance)
    }
    function handleDescriptionChange(event){
        setDescription(event.target.value);
    }
    function handleAmountChange(event){
        setAmount(event.target.value);
    }
    return (
        <div>
            <span style={{marginLeft:'1%'}}>Account Balance: ${balance}</span>
            <h1 style={{textAlign:'center'}}>Credit Page</h1>
            <div style={{marginLeft:'1%'}}>
                <h3>Creating credits</h3>
                <form onSubmit={handleSubmit}>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={handleDescriptionChange}></input>
                    <label>Amount: </label>
                    <input type="number" value={amount} onChange={handleAmountChange}></input>
                    <button style={{backgroundColor:'yellow', width:'5%'}}>Credit</button>
                </form>
            </div>
            <div style={{backgroundColor:'grey', marginLeft:'1%', marginRight:'1%', padding:'1%', overflow:'auto', display:'flex'}}>
                {
                    creditslist?.map((object)=>{
                        return(
                            <div key={object.date+object.time} style={{backgroundColor:'white', width:'10%', margin:'1%', padding:'1%', borderRadius:'10%'}}>
                                <span style={{display:"block"}}>Description: {object.description}</span>
                                <span style={{display:"block"}}>Amount: ${object.amount}</span>
                                <span style={{display:"block"}}>Date: {object.date}</span>
                                <span style={{display:"block"}}>Time: {object.time}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}