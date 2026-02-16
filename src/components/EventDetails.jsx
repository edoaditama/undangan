import { motion } from "framer-motion";
import { Calendar, MapPin, Navigation } from "lucide-react";

const EventDetails = () => {
  return (
    <section
      id="event-details"
      className="relative min-h-screen w-full py-16 px-4 md:px-10 flex flex-col justify-center items-center bg-stone-50 bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed"
    >
      {/* Overlay*/}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] pointer-events-none"></div>

      {/* Container utama  */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-10">
        {/* Card 1: Waktu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:flex-1 p-8 md:p-12 border border-amber-200 bg-white/90 backdrop-blur-md shadow-2xl rounded-[2.5rem] md:rounded-[4rem] flex flex-col items-center justify-center text-center"
        >
          <div className="mb-6 text-amber-700 bg-amber-50 p-4 rounded-full shadow-sm">
            <Calendar size={32} className="md:w-10 md:h-10" strokeWidth={1.5} />
          </div>

          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-amber-900 tracking-wide">
            Hari & Tanggal
          </h2>

          <div className="space-y-4 text-stone-600">
            <p className="font-bold text-xl md:text-2xl text-stone-800">
              Selasa, 17 Maret 2026
            </p>
            <p className="text-lg md:text-xl font-medium">
              Pukul 08.00 - 10.00 WIB
            </p>
            <div className="h-0.5 w-16 bg-amber-300 mx-auto mt-6"></div>
          </div>
        </motion.div>

        {/* Card 2: Lokasi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:flex-1 p-8 md:p-12 border border-amber-200 bg-white/90 backdrop-blur-md shadow-2xl rounded-[2.5rem] md:rounded-[4rem] flex flex-col items-center justify-between text-center"
        >
          <div className="w-full flex flex-col items-center">
            <div className="mb-6 text-amber-700 bg-amber-50 p-4 rounded-full shadow-sm">
              <MapPin size={32} className="md:w-10 md:h-10" strokeWidth={1.5} />
            </div>

            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-amber-900 tracking-wide">
              Lokasi Acara
            </h2>

            <div className="space-y-4 text-stone-600">
              <p className="font-bold text-lg md:text-xl text-stone-800 uppercase tracking-widest leading-relaxed">
                Rumah Bani Djuremi
              </p>
              <p className="text-base md:text-lg leading-relaxed max-w-xs mx-auto">
                Desa Karanglewas RT 03 RW 01, Purbalingga
              </p>
              <div className="h-0.5 w-16 bg-amber-300 mx-auto mt-6"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
