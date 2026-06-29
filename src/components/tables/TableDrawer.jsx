import { useState } from "react";

import DrawerHeader from "./DrawerHeader";
import DrawerFooter from "./DrawerFooter";
import CategoryTabs from "./CategoryTabs";
import ProductGrid from "./ProductGrid";
import OrderList from "./OrderList";

import { useTableStore } from "../../store/tableStore";

export default function TableDrawer({
  open,
  table,
  onClose,
}) {

  const [category, setCategory] = useState("all");

  const tables = useTableStore((state) => state.tables);

  const addProduct = useTableStore((state) => state.addProduct);
  const increaseQty = useTableStore((state) => state.increaseQty);

const decreaseQty = useTableStore((state) => state.decreaseQty);

const removeOrder = useTableStore((state) => state.removeOrder);

  if (!open || !table) {
    return null;
  }

  const currentTable = tables.find(
    (t) => t && t.id === table.id
  );

  const orders = currentTable?.orders || [];

  const total = orders.reduce(
    (sum, item) => sum + (item.qty * item.price),
    0
  );

  return (

    <div className="fixed inset-0 z-50">

      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute left-0 top-0 h-full w-[520px] bg-[#171A20] border-r border-zinc-800 flex flex-col">

        <DrawerHeader
          table={table}
          onClose={onClose}
        />

        <div className="p-4 border-b border-zinc-800">

          <CategoryTabs
            selected={category}
            setSelected={setCategory}
          />

        </div>

        <div className="flex-1 overflow-y-auto p-4">

          <ProductGrid
            category={category}
            onSelect={(product) =>
              addProduct(table.id, product)
            }
          />

          <h3 className="text-white text-lg font-bold mt-6 mb-3">
            الطلبات
          </h3>
                    <OrderList
  orders={orders}
  onIncrease={(id) => increaseQty(table.id, id)}
  onDecrease={(id) => decreaseQty(table.id, id)}
  onRemove={(id) => removeOrder(table.id, id)}
          />

        </div>

        <DrawerFooter
          total={total}
        />

      </div>

    </div>

  );

}