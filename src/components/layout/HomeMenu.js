import Image from "next/image";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute h-full left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={"/sallad1.png"} width={109} height={189} alt={"salad"} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={"/sallad2.png"} width={107} height={195} alt={"salad"} />
        </div>
      </div>
      <div className="text-center">
        <h3 className="uppercase text-gray-600 font-semibold leading-4">
          Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-300 p-4 rounded-lg text-center">
          <img src="/pizza.png" alt="pizza" />
          <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
          <p className="text-gray-500 text-sm"></p>
          <button className="bg-primary text-white rounded-full px-6 py-2">
            Add to card $12
          </button>
        </div>
      </div>
    </section>
  );
}