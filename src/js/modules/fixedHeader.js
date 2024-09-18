export function fixedHeader() {
    const header = document.querySelector('.header')

    let currentScroll = 0

    window.addEventListener('scroll', () => {
        currentScroll = window.scrollY
        if (currentScroll > 10) {
            header?.classList.add('fixed')
        } else {
            header?.classList.remove('fixed')
        }
    })
}
