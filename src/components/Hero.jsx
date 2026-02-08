import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-stone-100 overflow-hidden">
      <div className="text-center z-10">
        {/* Animasi teks kecil di atas */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-stone-500 mb-4 uppercase tracking-[0.3em] text-sm"
        >
          The Wedding of
        </motion.p>

        {/* Animasi Nama Utama */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-7xl font-cursive text-amber-800 mb-6"
        >
          Romeo & Juliet
        </motion.h1>

        {/* Animasi Garis Dekoratif */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1, delay: 1 }}
          className="h-px bg-amber-800 mx-auto mb-6"
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-stone-600 font-serif italic"
        >
          17 . 08 . 2026
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;