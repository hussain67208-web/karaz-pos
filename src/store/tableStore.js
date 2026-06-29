import { create } from "zustand";
import tablesData from "../data/tables";

export const useTableStore = create((set) => ({

  tables: tablesData.map((table) => ({
    ...table,
    orders: table.orders || [],
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

        const found = table.orders.find(
          (item) => item.id === product.id
        );

        if (found) {

          return {

            ...table,

            orders: table.orders.map((item) =>

              item.id === product.id

                ? {
                    ...item,
                    qty: item.qty + 1,
                  }

                : item

            ),

          };

        }

        return {

          ...table,

          orders: [

            ...table.orders,

            {

              ...product,

              qty: 1,

            },

          ],

        };

      }),

    })),

  increaseQty: (tableId, productId) =>
    set((state) => ({

      tables: state.tables.map((table) => {

        if (table.id !== tableId) return table;

        return {

          ...table,

          orders: table.orders.map((item) =>

            item.id === productId

              ? {
                  ...item,
                  qty: item.qty + 1,
                }

              : item

          ),

        };

      }),

    })),

  decreaseQty: (tableId, productId) =>
    set((state) => ({

      tables: state.tables.map((table) => {

        if (table.id !== tableId) return table;

        return {

          ...table,

          orders: table.orders
            .map((item) =>

              item.id === productId

                ? {
                    ...item,
                    qty: item.qty - 1,
                  }

                : item

            )
            .filter((item) => item.qty > 0),

        };

      }),

    })),

  removeOrder: (tableId, productId) =>
    set((state) => ({

      tables: state.tables.map((table) => {

        if (table.id !== tableId) return table;

        return {

          ...table,

          orders: table.orders.filter(
            (item) => item.id !== productId
          ),

        };

      }),

    })),

}));