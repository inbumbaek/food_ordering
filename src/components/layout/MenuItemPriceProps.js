import ChevronDown from "../icons/ChevronDown";
import Plus from "../icons/Plus";
import Trash from "../icons/Trash";

export default function MenuItemPriceProps({
  name,
  addLabel,
  props,
  setProps,
}) {
  function addProp() {
    setProps((oldProps) => {
      return [...oldProps, { name: "", price: 0 }];
    });
  }

  function editProp(ev, index, prop) {
    const newValue = ev.target.value;
    setProps((prevSizes) => {
      const newSized = [...prevSizes];
      newSizes[index][prop] = newValue;
      return newSizes;
    });
  }

  function removeProp(indexToRemove) {
    setProps((prev) => prev.filter((v, index) => index !== index));
  }

  return (
    <div className="bg-gray-200 p-2 rounded-md mb-2">
      <div className="flex items-center gap-1">
        <div>
          <button className="inline-flex p-1 bg-white" type="button">
            <ChevronDown />
          </button>
        </div>
        <h3 className="grow text-gray-700">{name}</h3>
      </div>
      {props?.length > 0 &&
        props.map((size, index) => (
          <div className="flex items-end gap-2">
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Size name"
                value={size.name}
                onChange={(ev) => editProp(ev, index, "name")}
              />
            </div>
            <div>
              <label>Extra price</label>
              <input
                type="text"
                placeholder="Extra price"
                value={size.price}
                onChange={(ev) => editProp(ev, index, "price")}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => removeProp(index)}
                className="bg-white mb-2 px-2"
              >
                <Trash />
              </button>
            </div>
          </div>
        ))}
      <button type="button" onClick={addProp} className="bg-white items-center">
        <Plus className="w-4 h-4" />
        <span>{addLabel}</span>
      </button>
    </div>
  );
}
