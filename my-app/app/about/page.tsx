
export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h2>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          <span className="font-semibold">Mater Trading Company Pvt. Ltd.</span> 
          is a leading provider of specialized import, trading, and government tender solutions. 
          We supply military vehicles, aviation and ground support equipment (GSE), 
          telecommunications items, and related accessories to a wide range of clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            "Nepal Army & Armed Police Force (APF)",
            "International & Domestic Airports",
            "Ground Handling Companies",
            "Nepal Airlines",
            "Telecom Operators",
            "Nepal Electricity Authority (NEA)",
            "Other Government Entities",
          ].map((client, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-700 font-medium">{client}</p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg mb-4">
            Our success is driven by a team of <span className="font-semibold">highly qualified engineers</span> 
            and a <span className="font-semibold">dynamic, energetic management team</span> committed to excellence, efficiency, and reliability.
          </p>
          <p className="text-gray-600 text-lg">
            At Mater Trading Company, we combine <span className="font-semibold">technical expertise, strategic insight,</span> 
            and a <span className="font-semibold">client-focused approach</span> to deliver tailored solutions for government and industry sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
