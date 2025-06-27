import { servicesDetails as services } from "@/data/serviceDetails";
function ServicePage() {
  return (
    <div className="px-6 md:px-12 py-12 max-w-3xl mx-auto space-y-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-all shadow-md"
        >
          {/* Image */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full sm:w-28 h-40 sm:h-20 rounded-lg object-cover"
          />

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-white font-extrabold text-base sm:text-lg mb-2">
              {service.title}
            </h3>
            <p className="text-lightText text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicePage;
