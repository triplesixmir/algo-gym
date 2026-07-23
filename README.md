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

| № | Задача | Тема | Источник | Сложность | Решение | Заметки |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Remove Element | arrays | LeetCode #27 | Easy | [solution.js](arrays/remove-element/solution.js) | Two pointers (slow/fast) |
| 2 | Find the Index of the First Occurrence in a String | strings | LeetCode #28 | Easy | [solution.js](strings/find-the-index-of-the-first-occurrence-in-a-string/solution.js) | Brute force O(n·m) |
| 3 | Search Insert Position | binary-search | LeetCode #35 | Easy | [solution.js](binary-search/search-insert-position/solution.js) | Binary search O(log n) |
| 4 | Length of Last Word | strings | LeetCode #58 | Easy | [solution.js](strings/length-of-last-word/solution.js) | trim + split |
| 5 | Plus One | math | LeetCode #66 | Easy | [solution.js](math/plus-one/solution.js) | Carry propagation, in-place |
| 6 | Add Binary | bit-manipulation | LeetCode #67 | Easy | [solution.js](bit-manipulation/add-binary/solution.js) | Column addition with carry, base 2 |
| 7 | Sqrt(x) | binary-search | LeetCode #69 | Easy | [solution.js](binary-search/sqrt-x/solution.js) | Binary search over the answer |
| 8 | Climbing Stairs | dynamic-programming | LeetCode #70 | Easy | [solution.js](dynamic-programming/climbing-stairs/solution.js) | Bottom-up DP, O(1) space |
| 9 | Remove Duplicates from Sorted List | linked-list | LeetCode #83 | Easy | [solution.js](linked-list/remove-duplicates-from-sorted-list/solution.js) | Single pass, in-place |
| 10 | Merge Sorted Array | arrays | LeetCode #88 | Easy | [solution.js](arrays/merge-sorted-array/solution.js) | Three pointers, merge from the back |
| 11 | Merge Strings Alternately | strings | LeetCode #1768 | Easy | [solution.js](strings/merge-strings-alternately/solution.js) | Single pass over max length |
| 12 | Greatest Common Divisor of Strings | strings | LeetCode #1071 | Easy | [solution.js](strings/gcd-of-strings/solution.js) | Concatenation check + GCD of lengths |
| 13 | Kids With the Greatest Number of Candies | arrays | LeetCode #1431 | Easy | [solution.js](arrays/kids-with-the-greatest-number-of-candies/solution.js) | Precompute max, single pass |
| 14 | Can Place Flowers | greedy | LeetCode #605 | Easy | [solution.js](greedy/can-place-flowers/solution.js) | Greedy left-to-right, treat out-of-bounds as empty |
| 15 | Reverse Vowels of a String | strings | LeetCode #345 | Easy | [solution.js](strings/reverse-vowels-of-a-string/solution.js) | Two pointers + Set lookup |
| 16 | Move Zeroes | arrays | LeetCode #283 | Easy | [solution.js](arrays/move-zeroes/solution.js) | Two pointers, swap in-place |
| 17 | Is Subsequence | strings | LeetCode #392 | Easy | [solution.js](strings/is-subsequence/solution.js) | Two pointers |
| 18 | Maximum Average Subarray I | arrays | LeetCode #643 | Easy | [solution.js](arrays/maximum-average-subarray-i/solution.js) | Sliding window, fixed size |
| 19 | Find the Highest Altitude | arrays | LeetCode #1732 | Easy | [solution.js](arrays/find-the-highest-altitude/solution.js) | Prefix sum + running max |
| 20 | Find Pivot Index | arrays | LeetCode #724 | Easy | [solution.js](arrays/find-pivot-index/solution.js) | Total sum minus running left sum |
| 21 | Find the Difference of Two Arrays | arrays | LeetCode #2215 | Easy | [solution.js](arrays/find-the-difference-of-two-arrays/solution.js) | Set.prototype.difference() |
| 22 | Unique Number of Occurrences | arrays | LeetCode #1207 | Easy | [solution.js](arrays/unique-number-of-occurrences/solution.js) | Map for frequency + Set for uniqueness |
| 23 | Missing Number | math | Solvit | Easy | [solution.js](math/missing-number/solution.js) | Gauss sum formula |
| 24 | Number of Recent Calls | stacks-queues | LeetCode #933 | Easy | [solution.js](stacks-queues/number-of-recent-calls/solution.js) | Sliding window via head pointer |
| 25 | Reverse Linked List | linked-list | LeetCode #206 | Easy | [solution.js](linked-list/reverse-linked-list/solution.js) | Iterative reverse, three pointers |
| 26 | Guess Number Higher or Lower | binary-search | LeetCode #374 | Easy | [solution.js](binary-search/guess-number-higher-or-lower/solution.js) | Binary search over external API |
| 27 | Convert Sorted Array to Binary Search Tree | trees | LeetCode #108 | Easy | [solution.js](trees/convert-sorted-array-to-binary-search-tree/solution.js) | Recursive divide and conquer |
| 28 | Pascal's Triangle | dynamic-programming | LeetCode #118 | Easy | [solution.js](dynamic-programming/pascals-triangle/solution.js) | Recursive, build on previous row |
| 29 | Pascal's Triangle II | dynamic-programming | LeetCode #119 | Easy | [solution.js](dynamic-programming/pascals-triangle-ii/solution.js) | Iterative, O(rowIndex) space |
| 30 | First Bad Version | binary-search | LeetCode #278 | Easy | [solution.js](binary-search/first-bad-version/solution.js) | Binary search for first true |
| 31 | Intersection of Two Arrays | arrays | LeetCode #349 | Easy | [solution.js](arrays/intersection-of-two-arrays/solution.js) | Set + explicit loop (Set.intersection() as alt.) |
| 32 | Intersection of Two Arrays II | arrays | LeetCode #350 | Easy | [solution.js](arrays/intersection-of-two-arrays-ii/solution.js) | Two pointers after sort |
| 33 | Majority Element | arrays | LeetCode #169 | Easy | [solution.js](arrays/majority-element/solution.js) | Boyer-Moore Voting Algorithm |
| 34 | Contains Duplicate | arrays | LeetCode #217 | Easy | [solution.js](arrays/contains-duplicate/solution.js) | Set with early return (sort as alt.) |
| 35 | Valid Anagram | strings | LeetCode #242 | Easy | [solution.js](strings/valid-anagram/solution.js) | Two frequency maps (sort as alt.) |
| 36 | Construct the Rectangle | math | LeetCode #492 | Easy | [solution.js](math/construct-the-rectangle/solution.js) | Search divisors from sqrt(area) down |
| 37 | Number of Rectangles That Can Form the Largest Square | arrays | LeetCode #1725 | Easy | [solution.js](arrays/number-of-rectangles-that-can-form-the-largest-square/solution.js) | Single pass + frequency map |
| 38 | Minimum Recolors to Get K Consecutive Black Blocks | strings | LeetCode #2379 | Easy | [solution.js](strings/minimum-recolors-to-get-k-consecutive-black-blocks/solution.js) | Sliding window, fixed size |
| 39 | Happy Number | math | LeetCode #202 | Easy | [solution.js](math/happy-number/solution.js) | Recursion + Set for cycle detection |
| 40 | Remove Linked List Elements | linked-list | LeetCode #203 | Easy | [solution.js](linked-list/remove-linked-list-elements/solution.js) | Dummy head node |
| 41 | Isomorphic Strings | strings | LeetCode #205 | Easy | [solution.js](strings/isomorphic-strings/solution.js) | Compare first-occurrence indices |
| 42 | Hamming Distance | bit-manipulation | LeetCode #461 | Easy | [solution.js](bit-manipulation/hamming-distance/solution.js) | XOR + count set bits |
| 43 | Island Perimeter | graphs | LeetCode #463 | Easy | [solution.js](graphs/island-perimeter/solution.js) | Single pass, count open edges |
