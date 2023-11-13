
import { PacketSummary } from "./PacketSummary";
import { PacketManager, } from "./PacketManager";
import { PacketsContainer } from "./PacketsContainer";
import { TripForm } from "./TripForm";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";
function SortPackets({handleSortPackets}) {
  return (
    <select  onChange={handleSortPackets}>
      <option>sort by order</option>
      <option>sort by quantity</option>
      <option>sort by name</option>
    </select>
  );
}
function ClearPackets({handleClearPacket}) {
  return <button onClick={handleClearPacket}>clear list</button>;
}
export function TravelList() {
  
  const initialPackets = [
    { id:1,packet: "passports", quantity: 2, packed: true },
    { id:2,packet: "socks", quantity: 12, packed: false },
    { id:3,packet: "charger", quantity: 1, packed: false},
    { id:4,packet: "toothbrush", quantity: 1, packed: false },
    { id:5,packet: "boarding passes", quantity: 2, packed: false },
   
  ];
 
  const [addisPacket,setAddisPacket]=useState(initialPackets)
  function handlePacketSubmit(newPacket){
  
setAddisPacket((addisPacket)=>[...addisPacket,newPacket])
  }
  function handleSortPackets(e){

      if (e.target.value === "sort by name") {
        // addisPacket.sort((a,b)=>a.packet.charAt(0).localeCompare(b.packet.charAt(0)))
        setAddisPacket((addisPacket) =>
          addisPacket.sort((a, b) =>
            a.packet.charAt(0).localeCompare(b.packet.charAt(0))
          )
        );
      } else if (e.target.value === "sort by quantity") {
        // addisPacket.sort((a,b)=>a.quantity-b.quantity)
        setAddisPacket((addisPacket) =>
          addisPacket.sort((a, b) => a.quantity - b.quantity)
        );
      } else {
        setAddisPacket(addisPacket);
      }
  }

  function handleClearPacket(){
setAddisPacket((addisPacket)=>[])
  }
  function handleDeletePacket(packetId){
    
setAddisPacket(addisPacket.filter((Packet)=>packetId!==Packet.id))
// console.log(addisPacket)
  }
  return (
    <>
      <Logo />
      <TripForm handlePacketSubmit={handlePacketSubmit} />
      <PacketsContainer addisPacket={addisPacket} handleDeletePacket={handleDeletePacket} />
      <PacketManager>
        <SortPackets addisPacket={addisPacket}  handleSortPackets={handleSortPackets}/>
        <ClearPackets addisPacket={addisPacket} handleClearPacket={handleClearPacket} />
      </PacketManager>
      <PacketSummary />
    </>
  );
}

