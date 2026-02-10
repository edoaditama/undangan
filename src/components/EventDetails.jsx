import { motion } from "framer-motion";

const EventDetails = () => {
  const mapsUrl = "https://maps.google.com"; // Ganti dengan link asli

  return (
    <section
      id="event-details"
      className="relative min-h-screen w-full py-20 px-4 md:px-10 text-center flex flex-col justify-center items-center gap-8 bg-stone-50 bg-[url('/bg.jpg')] bg-cover bg-center"
    >
      {/* Container utama  */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center items-stretch gap-6">
        {/* Card 1: Waktu */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:flex-1 p-8 border border-amber-200 bg-white/90 backdrop-blur-sm shadow-md rounded-4xl flex flex-col items-center justify-center"
        >
          <div className="mb-4 text-amber-700 text-3xl">📅</div>
          <h2 className="text-2xl md:text-3xl font-serif mb-4 text-amber-900">
            Hari & Tanggal
          </h2>
          <div className="space-y-2 text-stone-600">
            <p className="font-bold text-lg md:text-xl text-stone-800">
              Selasa, 17 Maret 2026
            </p>
            <p className="text-md md:text-lg font-medium">
              Pukul 08.00 - 10.00 WIB
            </p>
            <div className="h-px w-16 bg-amber-200 mx-auto my-4"></div>
            <p className="italic text-sm">Bertempat di Kediaman Keluarga</p>
          </div>
        </motion.div>

        {/* Card 2: Lokasi */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:flex-1 p-8 border border-amber-200 bg-white/90 backdrop-blur-sm shadow-md rounded-4xl flex flex-col items-center justify-between"
        >
          <div className="w-full flex flex-col items-center">
            <div className="mb-4 text-amber-700 text-3xl">📍</div>
            <h2 className="text-2xl md:text-3xl font-serif mb-4 text-amber-900">
              Lokasi Acara
            </h2>
            <div className="space-y-2 text-stone-600">
              <p className="font-bold text-lg md:text-xl text-stone-800 uppercase tracking-wide">
                Rumah Bani Djuremi
              </p>
              <p className="text-md md:text-lg leading-relaxed px-2">
                Desa Karanglewas RT 03 RW 01, Purbalingga
              </p>
            </div>
          </div>

          {/* Tombol Navigasi  */}
          <motion.a
            whileTap={{ scale: 0.95 }}
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-8 py-3 bg-amber-800 text-white text-sm font-serif tracking-widest rounded-full shadow-lg hover:bg-amber-900 transition-all"
          >
            PETUNJUK LOKASI
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
