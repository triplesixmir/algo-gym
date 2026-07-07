# algo-gym

Мой пет-репозиторий для изучения алгоритмов и структур данных. Решаю задачи (в основном с LeetCode, но не только) на JS, разбираюсь в подходах и сложности, и сохраняю сюда каждое решение отдельным коммитом.

## Как устроена структура

Задачи организованы по темам алгоритмов, а не по сложности или источнику — так удобнее повторять материал перед собеседованием:

```
<тема>/<слаг-задачи>/
├── README.md      # условие, ограничения, мой подход, сложность
└── solution.js     # решение на JS
```

Имя папки задачи не привязано к номеру на LeetCode — источник (LeetCode #1, Codewars, своя задача) указывается внутри README задачи и в таблице ниже. Это позволяет одинаково добавлять задачи из любых источников.

## Как добавить новую задачу

```bash
node scripts/new-problem.js <тема> <слаг> [источник]
# пример:
node scripts/new-problem.js arrays two-sum "LeetCode #1"
```

Скрипт создаст `<тема>/<слаг>/README.md` и `solution.js` по шаблону из `_template/`. Дальше — решаю задачу, дозаполняю README и коммичу.

## Конвенция коммитов

Один коммит — одна решённая задача:

```
feat: solve <название задачи> (<источник>)
```

Например: `feat: solve two-sum (LeetCode #1)`

## Прогресс

| Задача | Тема | Источник | Сложность | Решение | Заметки |
| --- | --- | --- | --- | --- | --- |
| Remove Element | arrays | LeetCode #27 | Easy | [solution.js](arrays/remove-element/solution.js) | Two pointers (slow/fast) |
| Find the Index of the First Occurrence in a String | strings | LeetCode #28 | Easy | [solution.js](strings/find-the-index-of-the-first-occurrence-in-a-string/solution.js) | Brute force O(n·m) |
| Search Insert Position | binary-search | LeetCode #35 | Easy | [solution.js](binary-search/search-insert-position/solution.js) | Binary search O(log n) |
| Length of Last Word | strings | LeetCode #58 | Easy | [solution.js](strings/length-of-last-word/solution.js) | trim + split |
| Plus One | math | LeetCode #66 | Easy | [solution.js](math/plus-one/solution.js) | Carry propagation, in-place |
| Add Binary | bit-manipulation | LeetCode #67 | Easy | [solution.js](bit-manipulation/add-binary/solution.js) | Column addition with carry, base 2 |
| Sqrt(x) | binary-search | LeetCode #69 | Easy | [solution.js](binary-search/sqrt-x/solution.js) | Binary search over the answer |
| Climbing Stairs | dynamic-programming | LeetCode #70 | Easy | [solution.js](dynamic-programming/climbing-stairs/solution.js) | Bottom-up DP, O(1) space |
| Remove Duplicates from Sorted List | linked-list | LeetCode #83 | Easy | [solution.js](linked-list/remove-duplicates-from-sorted-list/solution.js) | Single pass, in-place |
| Merge Sorted Array | arrays | LeetCode #88 | Easy | [solution.js](arrays/merge-sorted-array/solution.js) | Three pointers, merge from the back |
