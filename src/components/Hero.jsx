import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContent = () => {
    // Pastikan ID ini sesuai dengan ID section berikutnya
    const contentElement = document.getElementById("event-details");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('/bg3.jpg')] bg-cover bg-center scale-105"
          aria-hidden="true"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative text-center z-10 px-6 w-full max-w-4xl">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-amber-200/90 mb-4 uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs font-light"
        >
          Undangan Silaturahmi Keluarga
        </motion.p>

        {/* Judul Utama */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-8xl font-serif text-amber-500 mb-4 md:mb-6 drop-shadow-2xl leading-tight"
        >
          Bani Djuremi
        </motion.h1>

        {/* Garis Dekoratif  */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "60px", opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-1px md:h-2px bg-amber-500 mx-auto mb-6"
        />

        {/* Tanggal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-stone-300 font-serif italic text-base md:text-xl mb-8 md:mb-10 tracking-[0.2em]"
        >
          17 . 03 . 2026
        </motion.p>

        {/* Button - Ukuran tombol lebih nyaman untuk jari di mobile */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="inline-block px-8 py-3 md:px-10 md:py-4 bg-amber-700/80 backdrop-blur-md text-white rounded-full font-serif tracking-widest text-[10px] md:text-sm shadow-2xl border border-white/10 uppercase"
        >
          Buka Undangan
        </motion.button>
      </div>

      {/* Indikator Scroll Animasi */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-widest block mb-2">
          Scroll
        </span>
        <div className="w-1px h-8 bg-linear-to-b from-amber-500 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
