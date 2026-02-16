import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Greeting = () => {
  const [guestName, setGuestName] = useState("Bapak/Ibu/Saudara/i");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");
    if (name) {
      setGuestName(decodeURIComponent(name.replace(/\+/g, " ")));
    }
  }, []);
  return (
    <section
      id="greeting"
      className="relative min-h-screen w-full py-12 px-5 md:py-20 md:px-10 bg-orange-50 text-center flex flex-col justify-center items-center "
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Animasi Salam */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-4xl font-serif text-stone-800 mb-4 md:mb-6 tracking-wide"
        >
          Assalamu'alaikum Wr. Wb.
        </motion.h2>

        {/* Animasi Pembuka */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-stone-600 leading-relaxed font-serif italic text-sm sm:text-base md:text-lg px-2 max-w-prose"
        >
          Dengan memohon Rahmat dan Ridho Allah SWT, kami mengundang Anda untuk
          hadir dalam acara
        </motion.p>

        {/* Konten Utama */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 md:mt-12 w-full p-6 sm:p-8 md:p-12 border border-amber-200 bg-white/70 backdrop-blur-md shadow-2xl rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden"
        >
          {/* Aksen Dekoratif halus */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-amber-300 to-transparent opacity-50"></div>

          <h3 className="text-base sm:text-lg md:text-2xl font-medium text-amber-900/80 mb-2 md:mb-3 uppercase tracking-tighter sm:tracking-normal">
            Silaturahmi Keluarga Besar
          </h3>

          <p className="text-stone-800 font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-widest leading-none mb-6 md:mb-8">
            Bani Djuremi
          </p>

          <div className="h-px w-24 sm:w-32 md:w-40 bg-linear-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8 md:mb-10"></div>

          <div className="space-y-3">
            <p className="text-stone-500 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em]">
              Kepada Yth.
            </p>

            {/* GuestName */}
            <div className="inline-block px-4 py-2 border-y border-amber-100/50">
              <p className="text-amber-900 font-serif text-xl sm:text-2xl md:text-4xl font-bold italic leading-tight wrap-break-word max-w-full capitalize">
                {guestName}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Greeting;
