import { motion } from "framer-motion";
import { Home, MessageCircle, Calendar, MapPin, Heart } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Greeting", href: "#greeting", icon: MessageCircle },
  { name: "Event", href: "#event-details", icon: Calendar },
  { name: "Maps", href: "#maps", icon: MapPin },
  { name: "Closing", href: "#closing", icon: Heart },
];

function Navbar() {
  return (
    <motion.nav
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed z-999 bottom-6 left-1/2 w-[95%] max-w-100 md:max-w-max px-2 py-2 md:px-6 md:py-3 text-white backdrop-blur-md bg-black/80 rounded-2xl md:rounded-full border border-white/20 shadow-2xl"
    >
      <ul className="flex justify-between md:justify-center items-center gap-1 md:gap-4">
        {navLinks.map((link, index) => (
          <li key={link.name} className="flex-1 md:flex-none">
            <motion.a
              href={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 p-2 md:px-4 md:py-2 rounded-xl md:rounded-full transition-colors hover:bg-amber-800 group"
            >
              {/* Icon*/}
              <link.icon
                strokeWidth={2}
                className="w-5 h-5 md:w-4 md:h-4 text-amber-500 group-hover:text-white transition-colors"
              />

              {/* Text */}
              <span className="text-[9px] md:text-sm font-medium tracking-tight md:tracking-normal uppercase md:capitalize">
                {link.name}
              </span>

              {/* Dot indicator */}
              <motion.div className="hidden md:block absolute -bottom-1 w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100" />
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
