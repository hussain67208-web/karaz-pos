import { useMemo, useState } from "react";

export default function useTableOrders() {

  const [orders, setOrders] = useState([]);

  function addProduct(product) {

    setOrders(prev => {

      const found = prev.find(
        item => item.id === product.id
      );

      if (found) {

        return prev.map(item =>

          item.id === product.id

            ? {
                ...item,
                qty: item.qty + 1,
              }

            : item

        );

      }

      return [

        ...prev,

        {

          ...product,

          qty: 1,

        },

      ];

    });

  }

  function increase(id) {

    setOrders(prev =>

      prev.map(item =>

        item.id === id

          ? {

              ...item,

              qty: item.qty + 1,

            }

          : item

      )

    );

  }

  function decrease(id) {

    setOrders(prev =>

      prev.flatMap(item => {

        if (item.id !== id) return [item];

        if (item.qty === 1) return [];

        return [

          {

            ...item,

            qty: item.qty - 1,

          },

        ];

      })

    );

  }

  function remove(id) {

    setOrders(prev =>

      prev.filter(item => item.id !== id)

    );

  }

  const total = useMemo(() =>

    orders.reduce(

      (sum, item) =>

        sum + item.qty * item.price,

      0

    ),

    [orders]

  );

  return {

    orders,

    total,

    addProduct,

    increase,

    decrease,

    remove,

  };

}