import { motion } from "framer-motion";
import { Home, MessageCircle, Calendar, MapPin } from "lucide-react";

{
  /*Icon NavLink */
}
const navLinks = [
  { name: "Home", href: "#Hero", icon: Home },
  { name: "Greeting", href: "#Greeting", icon: MessageCircle },
  { name: "Event", href: "#EventDetails", icon: Calendar },
  { name: "Maps", href: "#Maps", icon: MapPin },
];

function Navbar() {
  return (
    <motion.nav
      initial={{ y: 80, x: "-50", opacity: 0 }}
      animate={{ y: 0, x: "-50", opacity: 1 }}
      transition={{ duration: 1, ease: "circInOut" }}
      className="fixed z-999 bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-max px-4 py-3 text-white  backdrop-blur-lg  bg-black/40 rounded-full md:rounded-3xl border border-white/10 shadow-2xl"
    >
      <ul className="flex justify-around md:justify-center gap-2 md:gap-4 items-center">
        {navLinks.map((link, index) => (
          <li key={link.name} className="flex-1 md:flex-none">
            <motion.a
              href={link.href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 bg-amber-600 hover:bg-amber-700 px-3 py-2 md:px-5 md:py-1.5 rounded-xl md:rounded-full"
            >
              {/*Icon Muncul */}
              <link.icon size={20} className="md:w-5 md:h-5" />

              {/*Text Navbar Responsive */}
              <span className="text-[10px] md:text-sm font-medium tracking-wider uppercase md:capitalize ">
                {link.name}
              </span>
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
