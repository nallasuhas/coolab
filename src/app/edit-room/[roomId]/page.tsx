import { getRoom } from "@/data-access/rooms";
import { EditRoomForm } from "./edit-room-form";
import { unstable_noStore } from "next/cache";

export default async function EditRoomPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  unstable_noStore();
  const { roomId } = await params;
  const room = await getRoom(roomId);

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="container mx-auto flex flex-col gap-8 pt-12 pb-24">
      <h1 className="text-4xl font-bold">Edit Room</h1>
      <EditRoomForm room={room} />
    </div>
  );
}