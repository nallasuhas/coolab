import Image from "next/image";
import { db } from "@/db";

export default async function Home() {
  const items = await db.query.room.findMany();
  return (
   <div className="flex min-h-screen flex-col items-center justify-between p-24">
       {items.map((item) => {
        return <div key={item.id} className="p-4 m-2 border rounded shadow"> 
          {item.name}
        </div>
       })}
   </div>
  );
}
