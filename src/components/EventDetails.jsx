import { motion } from 'framer-motion';

const EventDetails = () => {
  return (
    <section className="py-20 bg-stone-50" id="event-details">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto p-8 border border-stone-200 rounded-2xl shadow-xl/20 text-center "
      >
        <h2 className="text-3xl font-serif mb-6 text-amber-900">Detail Acara</h2>
        <div className="space-y-4 text-stone-600">
          <p className="font-bold">17 Maret 2026</p>
          <p>08.00 - 10.00 WIB</p>
          <p>Rumah Bani Djuremi</p>
        </div>
      </motion.div>
    </section>
  );
};

export default EventDetails;