import { motion } from 'framer-motion';

const EventDetails = () => {
  return (
    <section className="py-20 bg-white">
      <motion.div 
        // Animasi akan jalan saat elemen masuk ke viewport (saat di-scroll)
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // Animasi hanya jalan sekali
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto p-8 border border-stone-100 rounded-2xl shadow-xl text-center"
      >
        <h2 className="text-3xl font-serif mb-6 text-amber-900">Detail Acara</h2>
        <div className="space-y-4 text-stone-600">
          <p className="font-bold">Akad Nikah</p>
          <p>08.00 - 10.00 WIB</p>
          <hr className="border-stone-100" />
          <p className="font-bold">Resepsi</p>
          <p>11.00 - Selesai</p>
        </div>
      </motion.div>
    </section>
  );
};

export default EventDetails;