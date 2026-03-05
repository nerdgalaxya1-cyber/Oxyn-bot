function changePage(pageId) {
    // Remove a classe 'active' de todas as seções
    const pages = document.querySelectorAll('.card');
    pages.forEach(page => page.classList.remove('active'));

    // Adiciona 'active' na página desejada
    const targetPage = document.getElementById(pageId);
    targetPage.classList.add('active');
}
