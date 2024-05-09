import { useProducts } from "../context/ProductsContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import CartItem from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const { products } = useProducts();
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = products.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <>
      <div
        className={`bg-white h-dvh min-w-80 fixed z-50 inset-y-0 right-0 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between py-6 px-4">
          <h1 className="text-2xl">Cart</h1>
          <button className="size-8 " onClick={() => closeCart()}>
            <svg
              className="size-full"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className="p-4">Cart is empty</p>
        ) : (
          <ul className="flex flex-col gap-4 p-4 divide-y [&>li:not(:first-child)]:pt-4">
            {cartItems?.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <li className="font-semibold text-lg">
              total price: {formatCurrency(+totalPrice.toFixed(2))}
            </li>
          </ul>
        )}
      </div>
      <div
        className={`fixed inset-0 z-40 bg-black opacity-50 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => closeCart()}
      ></div>
    </>
  );
}

export default ShoppingCart;
