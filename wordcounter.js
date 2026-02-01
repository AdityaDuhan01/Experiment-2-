function countWords() {
  const text = document.getElementById("text").value.trim();
  const words = text === "" ? 0 : text.split(/\s+/).length;
  document.getElementById("count").innerText = `${words} / 150 Words`;
}
