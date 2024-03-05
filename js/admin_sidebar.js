document.querySelectorAll('.sidebar__link_group_container').forEach(item => {
    item.querySelector('.sidebar__link_group_label')
        .addEventListener('click', () => {
            item.classList.toggle('active')
        })
})

document.querySelectorAll('.sidebar__link_group').forEach(item => {
    item.querySelectorAll('.sidebar__link').forEach(link => {
        if (link.classList.contains('active')) {
            item.parentElement.classList.add('active')
        }
    })
})

document.querySelector('.admin_menu_icon').addEventListener('click', e => {
    document.querySelector('.sidebar').classList.toggle('hide')
})