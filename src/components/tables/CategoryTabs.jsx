import categories from "../../data/categories";

export default function CategoryTabs({
  selected,
  setSelected,
}) {

  return (

    <div className="flex gap-2 overflow-x-auto pb-2">

      <button
        onClick={() => setSelected("all")}
        className={`px-4 py-2 rounded-xl whitespace-nowrap transition ${
          selected === "all"
            ? "bg-[#8B0029] text-white"
            : "bg-[#232731] text-zinc-400"
        }`}
      >
        الكل
      </button>

      {categories.map(category => (

        <button
          key={category.id}
          onClick={() => setSelected(category.id)}
          className={`px-4 py-2 rounded-xl whitespace-nowrap transition ${
            selected === category.id
              ? "bg-[#8B0029] text-white"
              : "bg-[#232731] text-zinc-400"
          }`}
        >

          {category.name}

        </button>

      ))}

    </div>

  );

}