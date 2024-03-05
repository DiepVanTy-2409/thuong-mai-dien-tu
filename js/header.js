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
    if(searchbar.classList.contains('show')) {
        searchbar.querySelector('input').focus()
    }
    document.addEventListener('click', e => {
        if (!searchbar.contains(e.target)) {
            searchbar.classList.remove('show')
        }
    })
})