export default function WhyChooseUs() {
  return (
    <section className="px-8 py-16 bg-pink-50">
      <div className="grid items-center max-w-6xl grid-cols-1 gap-16 mx-auto lg:grid-cols-2">
        {/* Left Section */}
        <div>
          <h3 className="mb-2 text-sm font-bold text-gray-800 uppercase">
            Why <br /> Choose Us
          </h3>
          <h2 className="mb-6 text-6xl font-bold leading-tight text-gray-900">
            Keyword, Research Strategy, Survey, & Analytics
          </h2>
          <p className="mb-8 w-[400px] text-gray-700">
            Attention, we take out our round glasses and our sweater with elbow
            patches to go back to the origins of the user experience: the first
            mention of the user and its importance was born in the...
          </p>
          <div className="flex ">
            <button className="px-2 py-1 font-medium bg-gray-100 border-2 border-gray-800 rounded-full shadow hover:bg-gray-200">
              Google
            </button>
            <button className="px-2 py-1 font-medium bg-gray-100 border-2 border-gray-800 rounded-full shadow hover:bg-gray-200">
              Pinterest
            </button>
            <button className="px-2 py-1 font-medium bg-gray-100 border-2 border-gray-800 rounded-full shadow hover:bg-gray-200">
              Instagram
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          <div className="flex items-center ml-20 mr-[-80px] gap-x-5">
            <div className="flex items-center justify-center w-48 h-48 border-2 border-black rounded-full">
              <p className="text-4xl font-bold"> 60%</p>
            </div>
            <div className="w-80">
              <p className="text-xl font-bold uppercase">Strategy</p>
              <p>
                Your marketing strategy optimizing performances doesn’t have to
                be a guessing game.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-5">
              <div className="flex items-center justify-center w-48 h-48 border-2 border-black rounded-full">
                <p className="text-4xl font-bold"> 95%</p>
              </div>
              <div className="w-80">
                <p className="text-xl font-bold uppercase">Audience</p>
                <p>
                  Your marketing strategy optimizing performances doesn’t have
                  to be a guessing game.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center ml-20 mr-[-80px] gap-x-5">
            <div className="flex items-center justify-center w-48 h-48 border-2 border-black rounded-full">
              <p className="text-4xl font-bold"> 70%</p>
            </div>
            <div className="w-80">
              <p className="text-xl font-bold uppercase">Keyword
              </p>
              <p>
                Your marketing strategy optimizing performances doesn’t have to
                be a guessing game.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
