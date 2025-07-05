import { CreateRoomForm } from "./create-room-form";

export default function CreateRoomPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12">
      <h1 className="text-4xl font-bold text-center mb-4">Create Room</h1>
      <CreateRoomForm />
    </div>
  );
}