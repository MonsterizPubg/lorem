
function highlightText() {
    const searchInput = document.getElementById("searchInput").value.trim();
    const textBlock = document.getElementById("textBlock");
    const text = textBlock.innerText;

    textBlock.innerHTML = text;

    const regex = new RegExp(searchInput, "gi");

    const highlightedText = text.replace(regex, function(match) {
        return '<span style="background-color: yellow;">' + match + '</span>';
    });

    // Обновляем текст блока с подсвеченными совпадениями
    textBlock.innerHTML = highlightedText;
}