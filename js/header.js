document.querySelectorAll('.header__bottom__dropdown')?.forEach(dropdown => {
    dropdown.querySelector('.header__bottom__dropdown_label')
        .addEventListener('click', (e) => {
            e.stopPropagation()
            document.querySelectorAll('.header__bottom__dropdown')?.forEach(d => {
                d.querySelector('.header__bottom__dropdown_content').classList.remove('active')
            })
            const links = dropdown.querySelector('.header__bottom__dropdown_content')
            links.classList.toggle('active')
            document.addEventListener('click', () => links.classList.remove('active'))
        })
})

document.querySelector('.search_icon_button').addEventListener('click', e => {
    e.stopPropagation();
    const searchbar = document.querySelector('.header__center__bottom')
    searchbar.classList.toggle('show')
    if (searchbar.classList.contains('show')) {
        searchbar.querySelector('input').focus()
    }
    document.addEventListener('click', e => {
        if (!searchbar.contains(e.target)) {
            searchbar.classList.remove('show')
        }
    })
})

function initLoginForm() {
    console.log('NEED TO UPDATE THE PATH FOR IMAGE ELEMENT!!')
    const form = document.querySelector('.login_form')
    const bg = document.querySelector('.blur_overlay')
    const passwordInput = form.querySelector('.login__password')
    const eyeIcon = document.querySelector('.login_form__input_with_icon img')


    document.querySelector('.open_login_form_btn').addEventListener('click', e => {
        form.classList.add('active')
        bg.classList.add('active')
    })

    function handleClose() {
        form.classList.remove('active')
        bg.classList.remove('active')
    }

    document.querySelector('.login_form__close_icon').addEventListener('click', handleClose)
    bg.addEventListener('click', handleClose)

    eyeIcon.addEventListener('click', e => {
        eyeIcon.src = String(eyeIcon.src).includes('slash') ? '../images/eye_icon.svg' : '../images/slash._eye_icon.svg'
        passwordInput.type = passwordInput.type === 'password'? 'text' : 'password'
    })
}
initLoginForm()