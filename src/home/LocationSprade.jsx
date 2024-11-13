import MapClients from "../components/MapClients";

const title = "More Then 60,000 Customers";

const desc =
  "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

// const clientsList = [
//   {
//     imgUrl: "/src/assets/images/clients/avater.jpg",
//     imgAlt: "education thumb rajibraj91 rajibraj",
//     text: "Join with Us",
//   },
//   {
//     imgUrl: "/src/assets/images/clients/avater.jpg",
//     imgAlt: "education thumb rajibraj91 rajibraj",
//     text: "Join with Us",
//   },
//   {
//     imgUrl: "/src/assets/images/clients/avater.jpg",
//     imgAlt: "education thumb rajibraj91 rajibraj",
//     text: "Join with Us",
//   },
//   {
//     imgUrl: "/src/assets/images/clients/avater.jpg",
//     imgAlt: "education thumb rajibraj91 rajibraj",
//     text: "Join with Us",
//   },
//   {
//     imgUrl: "/src/assets/images/clients/avater.jpg",
//     imgAlt: "education thumb rajibraj91 rajibraj",
//     text: "Join with Us",
//   },
//   {
//     imgUrl: "/src/assets/images/clients/avater.jpg",
//     imgAlt: "education thumb rajibraj91 rajibraj",
//     text: "Join with Us",
//   },
//   {
//     imgUrl: "/src/assets/images/clients/avater.jpg",
//     imgAlt: "education thumb rajibraj91 rajibraj",
//     text: "Join with Us",
//   },
// ];

export default function LocationSprade() {
  return (
    <section className="mt-24">
      <div className="flex items-center justify-center mb-8">
        <div className="flex flex-col items-center gap-4 w-2/4">
          <h4 className="text-3xl text-gray-800 font-semibold">{title}</h4>
          <p className="text-lg text-gray-500 font-normal text-center">
            {desc}
          </p>
        </div>
      </div>
      <MapClients />
    </section>
  );
}
