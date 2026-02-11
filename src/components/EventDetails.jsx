import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import React from "react";

const EventDetails = () => {
  const mapsUrl = "https://goo.gl/maps/example";

  return (
    <section
      id="event-details"
      className="relative min-h-screen w-full py-12 px-6 md:py-20 md:px-10 flex flex-col justify-center items-center gap-10 bg-stone-50 bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed"
    >
      {/* Container utama - Menggunakan items-stretch agar tinggi card seimbang di desktop */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8">
        {/* Card 1: Waktu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:flex-1 p-6 md:p-10 border border-amber-200 bg-white/80 backdrop-blur-md shadow-xl rounded-4xl md:rounded-[3rem] flex flex-col items-center justify-center text-center"
        >
          <div className="mb-4 text-amber-700 bg-amber-50 p-3 rounded-full">
            <Calendar size={32} className="md:w-10 md:h-10" strokeWidth={1.5} />
          </div>

          <h2 className="text-xl md:text-3xl font-serif mb-4 text-amber-900 tracking-wide">
            Hari & Tanggal
          </h2>

          <div className="space-y-3 text-stone-600">
            <p className="font-bold text-lg md:text-2xl text-stone-800">
              Selasa, 17 Maret 2026
            </p>
            <p className="text-base md:text-lg font-medium">
              Pukul 08.00 - 10.00 WIB
            </p>
            <div className="h-px w-12 md:w-16 bg-amber-300 mx-auto my-4"></div>
           
          </div>
        </motion.div>

        {/* Card 2: Lokasi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:flex-1 p-6 md:p-10 border border-amber-200 bg-white/80 backdrop-blur-md shadow-xl rounded-4xl md:rounded-[3rem] flex flex-col items-center justify-between text-center"
        >
          <div className="w-full flex flex-col items-center">
            <div className="mb-4 text-amber-700 bg-amber-50 p-3 rounded-full">
              <MapPin size={32} className="md:w-10 md:h-10" strokeWidth={1.5} />
            </div>

            <h2 className="text-xl md:text-3xl font-serif mb-4 text-amber-900 tracking-wide">
              Lokasi Acara
            </h2>

            <div className="space-y-3 text-stone-600">
              <p className="font-bold text-lg md:text-xl text-stone-800 uppercase tracking-widest">
                Rumah Bani Djuremi
              </p>
              <p className="text-sm md:text-lg leading-relaxed max-w-xs mx-auto">
                Desa Karanglewas RT 03 RW 01, Purbalingga
              </p>
               <div className="h-px w-12 md:w-16 bg-amber-300 mx-auto my-4"></div>
            </div>
          </div>

          {/* Tombol Navigasi */}
          
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
