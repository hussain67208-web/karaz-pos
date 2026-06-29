import OrderCard from "./OrderCard";

export default function OrderList({

  orders,

  onIncrease,

  onDecrease,

  onRemove,

}) {

  if (orders.length === 0) {

    return (

      <div className="text-center text-zinc-500 py-10">

        لا توجد طلبات لهذه الطاولة

      </div>

    );

  }

  return (

    <div className="space-y-3">

      {orders.map(item => (

        <OrderCard

          key={item.id}

          item={item}

          onIncrease={onIncrease}

          onDecrease={onDecrease}

          onRemove={onRemove}

        />

      ))}

    </div>

  );

}