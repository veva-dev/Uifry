export const smoothScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = document.querySelector('header')?.offsetHeight || 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};