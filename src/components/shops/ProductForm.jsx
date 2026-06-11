import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { CATEGORIES } from "../../data/categories";

export default function ProductForm({ initial = {}, onSubmit }) {
  const [form, setForm] = useState({
    name: initial.name || "",
    description: initial.description || "",
    price: initial.price || "",
    category: initial.category || "Kitchen",
    stock: initial.stock || 1
  });

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form className="card space-y-4 p-6" onSubmit={(e) => { e.preventDefault(); onSubmit?.(form); }}>
      <Input label="Product name" value={form.name} onChange={(e) => update("name", e.target.value)} />
      <Input label="Description" value={form.description} onChange={(e) => update("description", e.target.value)} />
      <Input label="Price" type="number" value={form.price} onChange={(e) => update("price", e.target.value)} />
      <label className="block space-y-1">
        <span className="text-sm font-medium">Category</span>
        <select className="input" value={form.category} onChange={(e) => update("category", e.target.value)}>
          {CATEGORIES.map((cat) => <option key={cat}>{cat}</option>)}
        </select>
      </label>
      <Input label="Stock" type="number" value={form.stock} onChange={(e) => update("stock", e.target.value)} />
      <Button>Save Product</Button>
    </form>
  );
}
