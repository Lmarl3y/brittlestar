import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    quote: "We stopped here for a coffee on our Sunday morning walk and were glad to have found such a lovely place. The staff were welcoming and efficient and the drinks were very nice with an extra delicious chocolate! We will definitely visit again.",
    author: "Cally L",
    date: "February 2025",
    source: "TripAdvisor",
    url: "https://www.tripadvisor.co.uk/Restaurant_Review-g191270-d21084438-Reviews-Brittlestar_Wine_Bar-Morecambe_Lancaster_District_Lancashire_England.html#:~:text=We%20stopped%20here%20for%20a%20coffee%20on%20our%20Sunday%20morning%20walk%20and%20were%20glad%20to%20have%20found%20such%20a%20lovely%20place.%20The%20staff%20were%20welcoming%20and%20efficient%20and%20the%20drinks%20were%20very%20nice%20with%20an%20extra%20delicious%20chocolate!%20We%20will%20definitely%20visit%20again."
  },
  {
    quote: "Was staying at the Midland and based on the good reviews booked for drinks and one of the platters on a Friday evening. As soon as we walked in we were welcomed by staff and took a seat at the bar to order drinks. Our table was a bit delayed but that was fine and as it was we ended up staying seated at the bar. There was live music which was great. The drinks were reasonably priced and the platter of cheese and charcuterie we had were amazing. You can see the care and attention they put into the food and the service. Would thoroughly recommend this place and wish we lived nearer. Thanks to all the staff - a great experience over all.",
    author: "Mum M",
    date: "November 2024",
    source: "TripAdvisor",
    url: "https://www.tripadvisor.co.uk/Restaurant_Review-g191270-d21084438-Reviews-Brittlestar_Wine_Bar-Morecambe_Lancaster_District_Lancashire_England.html#:~:text=Was%20staying%20at,experience%20over%20all."
  },
  {
    quote: "Decided to eat here after coming across the bar in the afternoon. Lovely atmosphere, beautifully decorated and everything spotless! Anna was on her own tonight but was very attentive to all the guests either drinking or eating. Cocktails were great and the Camembert, baked potato and meat platter were delicious. You did a great job, Anna, Thank you. I'd recommend a visit!",
    author: "Nova E",
    date: "September 2024",
    source: "TripAdvisor",
    url: "https://www.tripadvisor.co.uk/Restaurant_Review-g191270-d21084438-Reviews-Brittlestar_Wine_Bar-Morecambe_Lancaster_District_Lancashire_England.html#:~:text=Decided%20to%20eat,recommend%20a%20visit!"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000); // Auto advance every 8 seconds

    return () => clearInterval(timer);
  }, [paginate]);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  return (
    <section className="py-20 bg-ocean text-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">What Our Guests Say</h2>
          <div className="w-24 h-1 bg-cream mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Read what our guests have shared about their experiences at Brittlestar
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="absolute w-full"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                  <FaQuoteLeft className="text-cream opacity-30 text-4xl mb-6" />
                  <div className="relative">
                    <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div className="border-t border-white/20 pt-4">
                      <h4 className="font-bold text-xl">{testimonials[currentIndex].author}</h4>
                      <p className="opacity-80 text-sm mb-4">
                        {testimonials[currentIndex].date} • {testimonials[currentIndex].source}
                      </p>
                      <a
                        href={testimonials[currentIndex].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-cream hover:text-white transition-colors"
                      >
                        View Original Review <FaExternalLinkAlt className="ml-2 text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            onClick={() => paginate(-1)}
            disabled={isAnimating}
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            onClick={() => paginate(1)}
            disabled={isAnimating}
          >
            <FaChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index === currentIndex || isAnimating) return;
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-cream' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 