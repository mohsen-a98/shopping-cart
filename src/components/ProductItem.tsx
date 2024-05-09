import { type Product } from "../App";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";

export function ProductItem({ id, image, title, price }: Product) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div
      key={id}
      className="bg-white rounded-md shadow-md overflow-hidden flex flex-col"
    >
      <img src={image} alt={title} className="w-full h-80 object-cover" />

      <div className="p-4 flex flex-col gap-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600">{formatCurrency(price)}</p>
      </div>

      {quantity === 0 ? (
        <button
          onClick={() => increaseCartQuantity(id)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full h-12 mt-auto"
        >
          + Add to cart
        </button>
      ) : (
        <div className="text-center pb-4 mt-auto gap-4 flex flex-col lg:flex-row items-center justify-between py-4 px-8">
          <div className="space-x-2 flex items-center justify-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </button>
            <span>
              {" "}
              <span className="text-3xl font-semibold">{quantity}</span> in cart
            </span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </button>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md text-sm"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
