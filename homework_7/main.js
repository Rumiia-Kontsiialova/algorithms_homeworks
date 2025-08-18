// Английский текст для анализа
const text = `
    JavaScript is fun. Code more, learn more!
    Programming makes your brain strong.
`;

// Английские буквы (a-z)
const englishLetters = 'abcdefghijklmnopqrstuvwxyz';

// Создаем пустой объект для хранения частот
const frequency = {};

// Инициализируем словарь нулями для каждой буквы
for (const letter of englishLetters) {
    frequency[letter] = 0;
}

// Проходим по каждому символу текста
for (const char of text.toLowerCase()) { // Приводим текст к нижнему регистру, чтобы A и a считались одинаково
    if (englishLetters.includes(char)) {  // Проверяем, является ли символ английской буквой
        frequency[char]++;               // Увеличиваем счётчик появления буквы
    }
}

// Выводим результат
console.log("Частотный словарь букв английского алфавита:\n");
for (const [letter, count] of Object.entries(frequency)) {
    console.log(`${letter}: ${count}`);
}
