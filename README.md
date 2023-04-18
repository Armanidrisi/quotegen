# 📚 Quotegen

[![npm version](https://badge.fury.io/js/quotegen.svg)](https://badge.fury.io/js/quotegen)
[![Downloads](https://img.shields.io/npm/dt/quotegen.svg)](https://npmjs.com/package/quotegen)
[![GitHub stars](https://img.shields.io/github/stars/Armanidrisi/quotegen.svg)](https://github.com/Armanidrisi/quotegen/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/Armanidrisi/quotegen.svg)](https://github.com/Armanidrisi/quotegen/issues)

Quotegen is a Node.js package that provides an easy way to fetch quotes. You can get a random quote or a quote from a specific category.

## 🚀 Installation

You can install Quotegen using npm:

```BASH
npm install quotegen
```

## 💻 Usage

```js
const {getQuote} = require("quotegen");

// Get a random quote
const quote = quotegen.getQuote();
console.log(quote);

// Get a quote from a specific category
const quoteFromCategory = quotegen.getQuote("motivational");
console.log(quoteFromCategory);
```

## 📝 Categories

- Attitude
- Coding
- Nature
- Success
- Friendship
- Inspirational
- Funny
- Technology
- Motivational

## 📖 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

If you would like to contribute to this project, please feel free to submit a pull request or open an issue on the [GitHub repository.](https://github.com/Armanidrisi/quotegen)
