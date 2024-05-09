import { useShoppingCart } from "../context/ShoppingCartContext";

function Header() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <div className="flex justify-between p-4 border-b border-b-gray-300">
      <h1 className="text-3xl font-semibold uppercase">store</h1>
      <div
        className="size-12 text-gray-800 relative hover:cursor-pointer"
        onClick={() => openCart()}
      >
        <svg
          className="size-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          ></path>
        </svg>
        <span className="absolute bottom-0 right-0 rounded-full bg-blue-500 text-white text-xs size-5 flex items-center justify-center">
          {cartQuantity}
        </span>
      </div>
    </div>
  );
}

export default Header;
