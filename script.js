 // Сначала получаем данные от пользователя
 let name = prompt("Ismingiz");
 let surname = prompt("Familiyangiz");
 let age = prompt("Yoshingiz");
 let choice = prompt("1 yozing agar kichhik xarf bilan chiqishini hohlasangiz 2 tanglang agar katta harif bilan chiqishini xoxlasangiz");

 // Переводим всё в нижний регистр
 name = name.toLowerCase();
 surname = surname.toLowerCase();
 age = age.toLowerCase();

 // Создаем карточку
 const card = document.createElement("div");
 card.className = "card";

 // Добавляем данные
 card.innerHTML = `
   1. ism: ${name}<br>
   2. familya: ${surname}<br>
   3. yosh: ${age}
 `;

 // Если выбрал 2 — добавляем строку "java"
 if (choice === "2") {
   card.innerHTML += `<br>4. java`;
 }

 // Показываем на странице
 document.body.appendChild(card);
