export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-red hover:shadow-2xl hover:shadow-black/50 transition-all">
      <img src="/pizza.png" alt="pizza" />
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">pizza pizza pizza</p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to card $12
      </button>
    </div>
  );
}
