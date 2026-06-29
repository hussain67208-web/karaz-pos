import menu from "../../data/menu";

export default function ProductGrid({

  category,

  onSelect,

}) {

  const products =
    category === "all"
      ? menu
      : menu.filter(item => item.category === category);

  return (

    <div className="grid grid-cols-2 gap-3 mt-4">

      {products.map(product => (

        <button
          key={product.id}
          onClick={() => onSelect(product)}
          className="bg-[#232731] rounded-2xl p-4 hover:bg-[#8B0029] transition text-right"
        >

          <div className="text-white font-bold">

            {product.name}

          </div>

          <div className="text-zinc-500 mt-2">

            {product.price.toLocaleString()} د.ع

          </div>

        </button>

      ))}

    </div>

  );

}