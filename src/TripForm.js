import { useState } from "react";

export function TripForm({handlePacketSubmit}) {
const [quantity,setQuantity]=useState(1)
const [packet,setPacket]=useState('')

function handleSubmit(e){
e.preventDefault()
if( !packet)return
const id=crypto.randomUUID()
const newPackets = { id, packet, quantity, packed: false };
handlePacketSubmit(newPackets)

setQuantity(1)
setPacket('')
}
  return (
    <div onSubmit={handleSubmit} className="formContainer">
      <form className="form">
        <span>what do you need for your trip 😎</span>
        <input onChange={(e)=>setQuantity((quantity)=>Math.abs(Number(e.target.value)))}  type="number" />
        <input value={packet} onChange={(e)=>setPacket((packet)=>e.target.value)} placeholder="item..." type="text" />
        <button className="btn" type="submit">ADD</button>
      </form>
    </div>
  );
}
