import { createRef, useEffect, useState } from "react";

const useObserver = () => {
  const node: any = createRef();
  const [inView, setInView] = useState(false);
  const [shouldAnimate, setAnimate] = useState(false);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInView(true);
          setAnimate(true);
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  useEffect(() => {
    if (node.current) {
      observer.observe(node.current);
    }
  }, []);

  return [node, inView, shouldAnimate];
};

export default useObserver;
