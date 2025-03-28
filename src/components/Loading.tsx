import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a0a] z-50">
      <motion.div
        className="w-16 h-16 border-4 border-purple-500 rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}