import { motion } from "framer-motion";

const DenahLokasi = () => {
  return (
    <section
      id="maps"
      className="relative min-h-screen w-full py-16 px-5 md:py-24 md:px-10 bg-orange-50 flex flex-col items-center justify-center"
    >
      {/* Wrapper Utama  */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* 1. Judul */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 italic">
            - Denah Lokasi -
          </h2>
          <div className="h-px w-20 bg-amber-500 mx-auto mt-4"></div>
        </motion.div>

        {/* 2. Container Map (Iframe) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full shadow-2xl rounded-2xl overflow-hidden border-2 border-amber-500 bg-white"
        >
          <div className="relative aspect-video w-full min-h-80md:min-h-120">
            <iframe
              className="absolute inset-0 w-full h-full"
              title="Denah Lokasi"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d294.09632656373077!2d109.34176112722095!3d-7.368157454323536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1771073132152!5m2!1sid!2sid"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* 3. Alamat & Tombol Maps*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-8 md:mt-10 w-full"
        >
          <p className="font-serif text-2xl md:text-3xl text-stone-700 italic leading-relaxed">
            Karanglewas, Purbalingga
          </p>

          <div className="h-px w-16  mx-auto my-6 md:my-8"></div>
          <div className="flex justify-center mb-12">
            <a
              href="https://www.google.com/maps/place/Karanglewas,+Kec.+Kutasari,+Kabupaten+Purbalingga,+Jawa+Tengah/@-7.3681682,109.3416409,21z/data=!4m6!3m5!1s0x2e65586640a152bd:0x51e7be9c82c548cf!8m2!3d-7.3674233!4d109.3411436!16s%2Fg%2F1218rl64?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-800 text-white px-8 md:px-10 py-4 rounded-full transition-all duration-300 shadow-xl active:scale-95 border border-stone-700"
            >
              {/* Text  Button*/}
              <span className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Buka di Google Maps
              </span>
              {/* Icon Button */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
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

export default DenahLokasi;
