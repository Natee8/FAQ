let div = document.getElementById('ContainerDiv')
let h2text = ['What features are included in the premium subscription?',
  'Are there any usage limitations or restrictions?',
  'Can I upgrade or downgrade my subscription plan?',
  'What should I do if I encounter technical issues?']
let desc = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
  'Vivamus ac erat eu nisl interdum faucibus. Phasellus non ante euismod, egestas elit vel, sollicitudin magna. Aenean vehicula, eros nec tempor tincidunt',
  'Cras suscipit tortor vitae sapien bibendum, vel consequat justo efficitur. Nullam dapibus fringilla massa, nec volutpat augue vulputate eget. Proin nec mi ultricies, pharetra lorem vel.',
  'Curabitur euismod, orci a egestas aliquet, est lacus scelerisque dui, a convallis dolor urna at erat. Integer volutpat eros at leo pretium, a pharetra lacus interdum. Suspendisse potenti. Proin sed ligula et felis consectetur dapibus. Vestibulum id orci sit amet lectus.']

for (let i = 0; i < h2text.length; i++) {
  let divContainer = document.createElement('div')
  div.appendChild(divContainer)
  let divTextAndImg = document.createElement('div')
  divContainer.appendChild(divTextAndImg)

  divTextAndImg.classList.add('DivTextContainer')
  divContainer.classList.add('styleOfDescription')

  let h2texts = document.createElement('h2')
  h2texts.innerHTML = h2text[i]
  let description = document.createElement('p')
  description.innerHTML = desc[i]
  description.classList.add('paragrafNone')
  let img = document.createElement('img')
  img.src = './Assets/Imgs/More.svg'

  divTextAndImg.appendChild(h2texts)
  divTextAndImg.appendChild(img)
  divContainer.appendChild(description)

  img.addEventListener('click', function () {
    if (description.classList.contains('paragrafNone')) {
      description.classList.remove('paragrafNone')
      description.classList.add('descriptionOn')
      img.src = 'Assets/Imgs/less.svg'
    } else {
      description.classList.remove('descriptionOn')
      description.classList.add('paragrafNone')
      img.src = './Assets/Imgs/More.svg'
    }
  })

}