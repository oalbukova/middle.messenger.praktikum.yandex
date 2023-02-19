export const onModal = (elId: string) => {
  const modal = document.getElementById(elId) as HTMLElement;
  const btn = document.getElementsByClassName(elId)[0] as HTMLElement;

  modal.style.display = 'flex';

  if (btn) {
    btn.onclick = function fn() {
      modal.style.display = 'none';
    };
  }
  window.onclick = function fn(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
};
