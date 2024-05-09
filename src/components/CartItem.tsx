import { useProducts } from "../context/ProductsContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
  item: {
    id: number;
    quantity: number;
  };
};

function CartItem({ item: { id, quantity } }: CartItemProps) {
  const { products } = useProducts();
  const { removeFromCart } = useShoppingCart();
  const item = products.find((i) => i.id === id);

  if (!item) return null;
  const { image, title, price } = item;
  const totalPrice = quantity * price;

  return (
    <li className="grid grid-cols-[1fr_1.6fr_1fr] gap-4 items-center">
      <img src={image} alt={title} className="size-24" />
      <div>
        <div className="flex items-center gap-2">
          <h3 className="line-clamp-2 w-32">{title}</h3>
          <span>x{quantity}</span>
        </div>
        <p>{formatCurrency(price)}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        <button
          className="size-6 flex items-center justify-center ml-4 text-red-500 hover:text-red-600 border border-red-300 rounded-md"
          onClick={() => removeFromCart(id)}
        >
          x
        </button>
      </div>
    </li>
  );
}

export default CartItem;
