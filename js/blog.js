"use strict";

async function getPost(id) {
  let response = await fetch('/post/'+id+'.json');
  if (response.status !== 200) {
    const article = document.getElementById('article');
    article.innerHTML = '<h1>Ошибка 404 - страница не найдена</h1>';

    return;
  }

  let post = await response.json();

  const content = document.getElementById('article-body');
  const author = document.getElementById('article-author');
  const date = document.getElementById('article-date');
  const title = document.getElementById('article-title');

  author.innerHTML = post.author;
  date.innerHTML = post.date;
  title.innerHTML = post.title;
  content.innerHTML = post.content;
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

getPost(id);