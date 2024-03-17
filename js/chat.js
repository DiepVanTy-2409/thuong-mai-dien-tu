function initChatBox() {
    const toggleButton = document.querySelector('.message__button')
    const messageContainer = document.querySelector('.message__messages')

    function scrollToNewMessage() {
        messageContainer.scrollTop = messageContainer.scrollHeight
    }

    document.querySelector('.message__header__close_icon')
        .addEventListener('click', e => toggleButton.parentElement.classList.remove('active'))

    toggleButton.addEventListener('click', e => {
        toggleButton.parentElement.classList.toggle('active')
        scrollToNewMessage()
    })

    function createMessage({ userId, message }) {
        const USER_ID = 1
        return `<div class="message__message ${userId === USER_ID ? 'my_message' : 'other_message'}">
                    <p class="message__text">${message}</p>
                </div>`
    }

    function receiveMessage() {
        messageContainer.innerHTML += createMessage({
            userId: 2,
            message: 'Hello 😅!!'
        })
        scrollToNewMessage()
    }

    document.querySelector('.message__type').addEventListener('submit', e => {
        e.preventDefault()
        const input = e.target.querySelector('#__message_input')
        if(!input.value) return
        messageContainer.innerHTML += createMessage({
            userId: 1,
            message: input.value
        })
        input.value = ''
        scrollToNewMessage()
        setTimeout(receiveMessage, 1000)
    })

}
initChatBox()