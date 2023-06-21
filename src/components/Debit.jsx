import React, { useState } from "react";

class DebitBoilerPlate {
    constructor(amount, description, date, time){
        this.amount = amount;
        this.description = description;
        this.date = date;
        this.time = time;
    }
}
export function Debit({balance, setBalance, debitslist, setDebitsList}){
    const[amount, setAmount] = useState(0);
    const[description, setDescription] = useState("");
    
    function handleSubmit(event){
        event.preventDefault();
        const date = new Date();;
        const fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
        const fullTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const debit = new DebitBoilerPlate(amount, description, fullDate, fullTime);
        setDebitsList(debitslist =>[...debitslist, debit]);
        const remain = balance - amount;
        setBalance(remain);
    }
    function handleDescriptionChange(event){
        setDescription(event.target.value);
    }
    function handleAmountChange(event){
        setAmount(event.target.value);
    }
    
    return(
        <div>
            <span style={{marginLeft:'1%'}}>Account Balance: ${balance}</span>
            <h1 style={{textAlign:'center'}}>Debits Page</h1>
            <div style={{marginLeft:'1%'}}>
                <h3>Creating debits</h3>
                <form onSubmit={handleSubmit}>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={handleDescriptionChange}></input>
                    <label>Amount: </label>
                    <input type="number" value={amount} onChange={handleAmountChange}></input>
                    <button style={{backgroundColor:'yellow', width:'5%'}}>Debit</button>
                </form>
            </div>
            <div style={{backgroundColor:'grey', marginLeft:'1%', marginRight:'1%', padding:'1%', overflow:'auto', display:'flex'}}>
                {
                    debitslist?.map((object)=>{
                        return(
                            <div style={{backgroundColor:'white', width:'10%', margin:'1%', padding:'1%', borderRadius:'10%'}}>
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
        
    )
};