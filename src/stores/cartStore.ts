import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
    cart: number[];
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
}

export const useCartStore = create<CartStore>()(
    devtools(
        persist(
            (set, get) => ({
                cart: [],
                addToCart: (id) =>
                    set((state) => ({ cart: [...state.cart, id] })),
                removeFromCart: (id) =>
                    set((state) => {
                        const remaining = state.cart.filter(
                            (item) => item !== id
                        );
                        return {
                            cart: remaining,
                        };
                    }),
            }),
            {
                name: "astro-service-storage",
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    )
);
