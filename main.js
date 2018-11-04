const toggleSubscribeForm = () => {
    const form = document.getElementById('subscribe-form')
    const isDisplayed = form.style.display !== 'none'
    if(isDisplayed) {
        form.style.display = 'none'
    }
    else {
        form.style.display = 'unset'
    }
}
