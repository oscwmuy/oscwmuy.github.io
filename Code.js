const image = document.getElementById('music')
const audio = document.querySelector('audio')
changeImage()
let isPlay = true

function changeImage() {
  if (!audio.paused) {
    image.src = 'media/icon-yes-sound.png'
  } else {
    image.src = 'media/icon-no-sound.png'
  }
}

const autoplay = function () {
  if (isPlay) {
    audio.play()
    isPlay = false
    changeImage()
  }
}

document.addEventListener('click', autoplay)

function toggleSound() {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }

  changeImage()
}

image.addEventListener('click', toggleSound)
