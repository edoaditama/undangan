import { motion } from "framer-motion";

const Hero = () => {
  // Fungsi untuk scroll otomatis ke section konten
  const scrollToContent = () => {
    const contentElement = document.getElementById("IsiUndangan");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* --- SECTION HERO --- */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-100 bg-[url('/bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="text-center z-10 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-200 mb-4 uppercase tracking-[0.3em] text-xs md:text-sm"
          >
            Undangan Silaturahmi Keluarga
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-cursive text-amber-500 mb-6 drop-shadow-lg"
          >
            Bani Djuremi
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-px bg-amber-500 mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-stone-300 font-serif italic text-lg mb-10"
          >
            17 . 03 . 2026
          </motion.p>

          {/* Button dengan Event onClick */}
          <motion.button
            onClick={scrollToContent} // <--- Memanggil fungsi scroll
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="px-8 py-3 bg-amber-600/80 backdrop-blur-sm text-white rounded-full font-serif tracking-[0.2em] text-sm transition-all shadow-xl border border-amber-400/30"
          >
            BUKA UNDANGAN
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Hero;
