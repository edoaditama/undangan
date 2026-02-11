import { motion } from "framer-motion";
import { Map } from "lucide-react";

const DenahLokasi = () => {
  return (
    <section
      id="Denah"
      className="relative min-h-screen w-full py-12 px-5 md:py-20 md:px-10 bg-orange-50 flex flex-col justify-center items-center bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Judul dengan Animasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-serif text-stone-800 italic">
            - Denah Lokasi -
          </h2>
          <div className="h-px w-20 bg-amber-400 mx-auto mt-4"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default DenahLokasi;