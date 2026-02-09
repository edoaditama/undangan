import { motion } from "framer-motion";

const IsiUndangan = () => {
  return (
    <section
      id="IsiUndangan"
      className="min-h-screen bg-slate-100 py-24 px-6 md:px-10 text-center flex flex-col justify-center items-center"
    >
      <div className="max-w-2xl mx-auto">
        {/* Animasi Salam */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif text-stone-800 mb-6"
        >
          Assalamu'alaikum Wr. Wb.
        </motion.h2>

        {/* Animasi Pembuka */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-stone-600 leading-relaxed font-serif italic text-lg"
        >
          Dengan memohon Rahmat dan Ridho Allah SWT Kami mengundang
          Bapak/Ibu/Saudara/i untuk hadir dalam acara
        </motion.p>

        {/* Konten Utama */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 p-8 border border-amber-200 bg-white shadow-sm rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-amber-800 mb-2">
            Silaturahmi Keluarga Besar
          </h3>
          <p className="text-stone-700 font-medium text-xl uppercase tracking-widest">
            Bani Djuremi
          </p>

          <div className="h-px bg-stone-200 w-24 mx-auto my-6"></div>

          <p className="text-stone-600">Nama tamu undangan</p>
        </motion.div>
      </div>
    </section>
  );
};

export default IsiUndangan;
