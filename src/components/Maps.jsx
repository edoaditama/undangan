import { motion } from "framer-motion";

const Maps = () => {
  return (
    <section
      id="maps"
      className="relative min-h-fit w-full py-16 px-6 md:py-24 md:px-10 bg-orange-50 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Wrapper Utama */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* 1. Judul */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 italic">
            - Denah Lokasi -
          </h2>
          <div className="h-0.5 w-24 bg-amber-500 mx-auto mt-6 shadow-sm"></div>
        </motion.div>

        {/* 2. Container Map (Iframe) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full shadow-2xl rounded-3xl overflow-hidden border border-amber-200 bg-white p-2 md:p-3"
        >
          {/* Menggunakan aspect-video di desktop, tapi tinggi tetap di mobile */}
          <div className="relative overflow-hidden rounded-2xl h-87.5 md:h-125 w-full">
            <iframe
              className="absolute inset-0 w-full h-full grayscale-20 contrast-[1.1]"
              title="Denah Lokasi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.30456745444812!2d109.3415746667099!3d-7.368120353434631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65586640a152bd%3A0x51e7be9c82c548cf!2sKaranglewas%2C%20Kec.%20Kutasari%2C%20Kabupaten%20Purbalingga%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1771246931751!5m2!1sid!2sid"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* 3. Alamat & Tombol Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-10 md:mt-12 w-full px-4"
        >
          <p className="font-serif text-2xl md:text-3xl text-stone-700 italic leading-snug">
            Karanglewas, Purbalingga
          </p>

          <div className="flex justify-center mt-10">
            <a
              href="https://www.google.com/maps/place/Karanglewas,+Kec.+Kutasari,+Kabupaten+Purbalingga,+Jawa+Tengah/@-7.3681636,109.3416423,20.25z/data=!4m6!3m5!1s0x2e65586640a152bd:0x51e7be9c82c548cf!8m2!3d-7.3674233!4d109.3411436!16s%2Fg%2F1218rl64?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-800 text-white px-8 md:px-12 py-4 rounded-full transition-all duration-300 shadow-xl active:scale-95 border-b-4 border-amber-900"
            >
              <span className="text-sm md:text-base font-bold tracking-widest uppercase">
                Petunjuk Lokasi
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Maps;
