// rightClick
export function useRightClick() {
  const h = window.innerHeight
  const w = window.innerWidth
  window.oncontextmenu = function () {
    return false
  }
  window.onkeydown =
    window.onkeyup =
    window.onkeypress =
      function () {
        window.event.returnValue = false
        return false
      }
  window.onresize = function () {
    if (h != window.innerHeight || w != window.innerWidth) {
      window.close()
      window.location = 'about:blank'
    }
  }

  document.onkeydown = function (e) {
    e = window.event || e
    const keycode = e.keyCode || e.which
    if (
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey ||
      (keycode >= 112 && keycode <= 123)
    ) {
      if (window.event) {
        try {
          e.keyCode = 0
        } catch (e) {
          e.returnValue = false
        }
      } else {
        e.preventDefault()
      }
    }
  }
}
