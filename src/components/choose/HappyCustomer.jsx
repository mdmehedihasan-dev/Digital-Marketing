
export default function HappyCustomer() {
  const stats = [
    { number: "25k", label: "Projects completed" },
    { number: "8k", label: "Happy customers" },
    { number: "15", label: "Years of experience" },
    { number: "98", label: "Awards won" },
  ];


  return (
    <section className="px-8 py-16 bg-[#fffaf0]">
        <div className="mx-auto max-w-7xl">
        <h3 className="text-sm font-bold text-gray-800 uppercase ">
            Why <br /> Choose Us
          </h3>
      <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left Section: Stats */}
        <div>
         
          <div className="grid grid-cols-2 gap-24">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <h4 className="text-6xl font-bold text-gray-900">{stat.number}</h4>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Grid with Images */}
        <div >
            <img src="/counter.webp" alt="" />
        
        </div>
      </div>
        </div>
    </section>
  );
}
