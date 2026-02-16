import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { id: 1, src: "anime.png", alt: "Gallery 1" },
  { id: 2, src: "anime2.jpg", alt: "Gallery 2" },
  { id: 3, src: "anime.png", alt: "Gallery 3" },
  { id: 4, src: "anime2.jpg", alt: "Gallery 4" },
];

function Closing() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section
      id="closing"
      className="relative min-h-screen w-full py-16 md:py-24 px-4 md:px-6 flex flex-col justify-center items-center bg-stone-50 bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed"
    >
      {/* Overlay Background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-10 md:gap-14 items-center">
        
        {/* Header Galeri */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-6xl font-serif text-amber-500 mb-4 tracking-wide"
          >
            Our Gallery
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 md:h-1 bg-amber-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Grid Galeri */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 w-full">
          {images.map((img) => (
            <motion.div
              key={img.id}
              layoutId={`img-${img.id}`}
              onClick={() => setSelectedImg(img)}
              className="cursor-pointer overflow-hidden rounded-xl md:rounded-2xl shadow-xl border-2 md:border-4 border-white aspect-square group bg-stone-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Teks Penutup */}
        <div className="w-full max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/90 text-[15px] md:text-xl font-serif italic leading-relaxed px-2 md:px-0"
          >
            "Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dalam acara silaturahmi ini. Atas perhatiannya, kami ucapkan terima kasih."
          </motion.p>
        </div>
      </div>

      {/* Overlay Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-1000 flex items-center justify-center bg-black/95 p-4 md:p-8 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            {/* Tombol Close  */}
            <motion.button
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              className="absolute top-6 right-6 p-2 text-white hover:text-amber-500 transition-colors z-1010"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
            >
              <X size={36} className="drop-shadow-lg" />
            </motion.button>

            {/* Gambar Besar */}
            <motion.img
              layoutId={`img-${selectedImg.id}`}
              src={selectedImg.src}
              alt="Selected View"
              className="max-w-full max-h-[75vh] md:max-h-[85vh] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Closing;