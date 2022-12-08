export function load () {
  const load = document.getElementById('loader')
  if (load) {
    setTimeout(() => {
      load.style.display = 'none'
    }, 3000)
  }
}
