/**
 * Create an IntersectionObserver for scroll-triggered animations
 */
export function createScrollObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
): IntersectionObserver {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    }
  );
}

/**
 * Add animation class when element enters viewport
 */
export function observeElement(
  element: Element,
  animationClass: string
): () => void {
  const observer = createScrollObserver((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(animationClass);
      observer.unobserve(entry.target);
    }
  });
  observer.observe(element);
  return () => observer.disconnect();
}
