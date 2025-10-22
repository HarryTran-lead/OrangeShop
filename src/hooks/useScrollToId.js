export default function useScrollToId(offset = 84) {
  const scrollTo = (id) => (e) => {
    e?.preventDefault?.();
    const el = document.querySelector(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const y = window.pageYOffset + rect.top - offset; // account for sticky header
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return scrollTo;
}
