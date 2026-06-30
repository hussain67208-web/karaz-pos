import { create } from "zustand";
import tablesData from "../data/tables";

const calculateTotal = (orders) => {

  return orders.reduce(

    (total, item) =>

      total + (item.price * item.qty),

    0

  );

};

export const useTableStore = create((set) => ({

  tables: tablesData.map((table) => ({

    ...table,

    orders: table.orders || [],

    total: table.total || 0,

    status: table.status || "empty",

  })),

  selectedTable: null,

  selectTable: (table) =>
    set({

      selectedTable: table,

    }),
  addProduct: (tableId, product) =>
    set((state) => ({

      tables: state.tables.map((table) => {

        if (table.id !== tableId) return table;

        const orders = [...table.orders];

        const index = orders.findIndex(
          (item) => item.id === product.id
        );

        if (index >= 0) {

          orders[index] = {

            ...orders[index],

            qty: orders[index].qty + 1,

          };

        } else {

          orders.push({

            ...product,

            qty: 1,

          });

        }

        return {

          ...table,

          status: "busy",

          orders,

          total: calculateTotal(orders),

        };

      }),

    })),



  increaseQty: (tableId, productId) =>
    set((state) => ({

      tables: state.tables.map((table) => {

        if (table.id !== tableId) return table;

        const orders = table.orders.map((item) =>

          item.id === productId

            ? {

                ...item,

                qty: item.qty + 1,

              }

            : item

        );

        return {

          ...table,

          orders,

          total: calculateTotal(orders),

        };

      }),

    })),
  decreaseQty: (tableId, productId) =>
    set((state) => ({

      tables: state.tables.map((table) => {

        if (table.id !== tableId) return table;

        const orders = table.orders
          .map((item) =>

            item.id === productId
              ? {
                  ...item,
                  qty: item.qty - 1,
                }
              : item

          )
          .filter((item) => item.qty > 0);

        return {

          ...table,

          orders,

          total: calculateTotal(orders),

          status: orders.length === 0 ? "empty" : "busy",

        };

      }),

    })),



  removeOrder: (tableId, productId) =>
    set((state) => ({

      tables: state.tables.map((table) => {

        if (table.id !== tableId) return table;

        const orders = table.orders.filter(
          (item) => item.id !== productId
        );

        return {

          ...table,

          orders,

          total: calculateTotal(orders),

          status: orders.length === 0 ? "empty" : "busy",

        };

      }),

    })),

}));