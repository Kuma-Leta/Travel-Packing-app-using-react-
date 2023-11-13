import { useState } from 'react';
import './index.css'
export function PacketsContainer({addisPacket,handleDeletePacket}) {
  
  // console.log(addisPacket)
  return (
    <div className="packetsContainer">
     {
      addisPacket.map((packet)=>    <li className="packet" key={packet.id}>
      <input type="checkbox" />
      <span style={{textDecoration:packet.packed?'line-through':''}}>
        {packet.quantity} {packet.packet}
      </span>

      <button onClick={(e)=>handleDeletePacket(packet.id)}>❌</button>
    </li>)
     }
    </div>
  );
}
// function PacketList({packet,handleDeletePacket}){
//   console.log(packet)
//   return (

//   );
// }
