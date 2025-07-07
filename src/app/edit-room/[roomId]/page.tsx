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
    <div className="min-h-screen flex flex-col items-center justify-center gap-12">
      <h1 className="text-4xl font-bold text-center mb-4">Edit Room</h1>
      <EditRoomForm room={room} />
    </div>
  );
}