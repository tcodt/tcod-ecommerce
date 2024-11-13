const subTitle = "Save The Day";
const title = (
  <h2 className="text-white text-4xl font-medium">
    Join On Day Long Free Workshop For{" "}
    <b>
      Advanced <span className="text-yellow-500">Mastering</span>
    </b>{" "}
    On Sales
  </h2>
);
const desc = "Limited Time Offer ! Hurry Up";

export default function Register() {
  return (
    <section className="mt-24 custom-bg-img">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-end pt-16">
          <div className="w-2/4">
            <div className="flex flex-col gap-4">
              <span className="text-yellow-500 font-semibold text-lg uppercase">
                {subTitle}
              </span>
              {title}
              <p className="text-white text-opacity-70 text-lg font-semibold">
                {desc}
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-white p-4 rounded-md w-1/3">
            <h3 className="text-2xl font-semibold text-gray-800 text-center py-8">
              Register Now
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Username"
                className="h-10 outline-none border-2 border-yellow-500 rounded-md py-2 px-4"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-10 outline-none border-2 border-yellow-500 rounded-md py-2 px-4"
              />
              <input
                type="text"
                name="number"
                placeholder="Phone"
                className="h-10 outline-none border-2 border-yellow-500 rounded-md py-2 px-4"
              />
              <button
                type="submit"
                className="bg-yellow-500 py-2 px-4 rounded-md text-white text-lg w-2/4 mx-auto shadow-md shadow-yellow-400"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
