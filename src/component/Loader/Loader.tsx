import { motion } from 'framer-motion'

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <motion.div
        className="relative w-32 h-32 mb-8"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-full border-2 border-primary"
            style={{
              opacity: 0.2 + i * 0.2,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.span
          className="absolute inset-0 rounded-full bg-primary"
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <motion.p
        className="text-xl text-primary font-medium mb-4"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        It will take a few minutes
      </motion.p>
      <motion.div
        className="bg-primary/10 rounded-lg p-4 max-w-md"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <p className="text-sm text-center text-primary/80">
          We're preparing something amazing for you. Thank you for your patience!
        </p>
      </motion.div>
    </div>
  )
}