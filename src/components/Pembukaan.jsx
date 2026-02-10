import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Pembukaan = () => {
  const [guestName, setGuestName] = useState("Bapak/Ibu/Saudara/i");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");
    if (name) {
      setGuestName(name);
    }
  }, []);

  return (
    <section
      id="Pembukaan"
      className="relative min-h-screen w-full py-16 px-4 md:px-10 bg-orange-50 text-center flex flex-col justify-center items-center bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"
    >
      <div className="w-full max-w-2xl mx-auto">
        {/* Animasi Salam */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-serif text-stone-800 mb-4 md:mb-6"
        >
          Assalamu'alaikum Wr. Wb.
        </motion.h2>

        {/* Animasi Pembuka */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-stone-600 leading-relaxed font-serif italic text-sm md:text-lg px-2 mb-2"
        >
          Dengan memohon Rahmat dan Ridho Allah SWT, kami mengundang Anda untuk
          hadir dalam acara
        </motion.p>

        {/* Konten Utama */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-8 p-6 md:p-10 border border-amber-200 bg-white/80 backdrop-blur-sm shadow-xl rounded-4xl md:rounded-3xl mx-auto"
        >
          <h3 className="text-lg md:text-2xl font-medium text-amber-900 mb-1 md:mb-2">
            Silaturahmi Keluarga Besar
          </h3>

          {/*  */}
          <p className="text-stone-800 font-bold text-2xl md:text-4xl uppercase tracking-widest md:tracking-widest mb-2 md:mb-4">
            Bani Djuremi
          </p>

          <div className="h-px bg-linear-to-r from-transparent via-amber-400 to-transparent w-32 md:w-40 mx-auto my-6 md:my-8"></div>

          <div className="space-y-2">
            <p className="text-stone-500 text-[10px] md:text-sm uppercase tracking-widest">
              Kepada Yth.
            </p>

            {/* GuestName */}
            <p className="text-amber-900 font-serif text-xl md:text-3xl font-bold italic wrap-break-word px-2 leading-tight">
              {guestName}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pembukaan;
