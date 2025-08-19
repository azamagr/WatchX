function applyTheme() {
    const theme = document.querySelector('input[name="theme"]:checked').value;
    document.body.className = theme;
}