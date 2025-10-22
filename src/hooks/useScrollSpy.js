import { useEffect, useState } from "react";

export default function useScrollSpy(ids = [], offset = 100) {
  const [active, setActive] = useState(ids[0] || null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.querySelector(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0.1 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids, offset]);

  return active;
}
