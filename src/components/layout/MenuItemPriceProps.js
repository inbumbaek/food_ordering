import Plus from "../icons/Plus";
import Trash from "../icons/Trash";

export default function MenuItemPriceProps() {
  return (
    <div className="bg-gray-200 p-2 rounded-md mb-2">
      <label>Sizes</label>
      {sizes?.length > 0 &&
        sizes.map((size, index) => (
          <div className="flex items-end gap-2">
            <div>
              <label>Size name</label>
              <input
                type="text"
                placeholder="Size name"
                value={size.name}
                onChange={(ev) => editSize(ev, index, "name")}
              />
            </div>
            <div>
              <label>Extra price</label>
              <input
                type="text"
                placeholder="Extra price"
                value={size.price}
                onChange={(ev) => editSize(ev, index, "price")}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => removeSize(index)}
                className="bg-white mb-2 px-2"
              >
                <Trash />
              </button>
            </div>
          </div>
        ))}
      <button type="button" onClick={addSize} className="bg-white items-center">
        <Plus className="w-4 h-4" />
        <span>Add item size</span>
      </button>
    </div>
  );
}
