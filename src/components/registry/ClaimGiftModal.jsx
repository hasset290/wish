import { useState } from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";

export default function ClaimGiftModal({ open, item, onClose, onSubmit }) {
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");

  return (
    <Modal open={open} title="Claim this gift" onClose={onClose}>
      <div className="space-y-4">
        <p className="text-slate-600">You are claiming: <strong>{item?.giftSnapshot?.name}</strong></p>
        <Input label="Your name" value={guestName} onChange={(e) => setGuestName(e.target.value)} />
        <Input label="Your email" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} />
        <div className="flex gap-2">
          <Button onClick={() => onSubmit({ guestName, guestEmail, status: "reserved" })}>Reserve</Button>
          <Button variant="secondary" onClick={() => onSubmit({ guestName, guestEmail, status: "bought" })}>Mark Bought</Button>
        </div>
      </div>
    </Modal>
  );
}
