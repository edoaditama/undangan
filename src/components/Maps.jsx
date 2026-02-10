import { motion } from "framer-motion";

function Maps() {
  return (
    <section className="relative min-h-screen w-full py-20 flex flex-col items-center justify-center overflow-hidden bg-stone-100">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-stone-900/10 z-0"></div>

      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center">
        {/* Judul dengan Animasi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-stone-800 font-bold font-serif mb-8 uppercase tracking-[0.3em] text-sm md:text-base text-center"
        >
          — Denah Lokasi —
        </motion.p>
      </div>
    </section>
  );
}

export default Maps;
