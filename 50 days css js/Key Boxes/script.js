
const Insert = document.getElementById('insert')
window.addEventListener('keydown', (event) => {
    Insert.innerHTML=`
    <div class="key">
    ${event.key === '' ? 'space' :event.key}
            <small>even.key</small>
        </div>

        <div class="key">
        ${event.keyCode}
            <small>even.keyCode</small>
        </div>
        <div class="key">${event.code}
            <small>codes</small>
        </div>
        `
})