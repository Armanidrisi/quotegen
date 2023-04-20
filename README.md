# 📚 Quotegen

[![npm version](https://badge.fury.io/js/node-quotegen.svg)](https://badge.fury.io/js/node-quotegen)
[![Downloads](https://img.shields.io/npm/dt/node-quotegen.svg)](https://npmjs.com/package/node-quotegen)
[![GitHub stars](https://img.shields.io/github/stars/Armanidrisi/quotegen.svg)](https://github.com/Armanidrisi/quotegen/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/Armanidrisi/quotegen.svg)](https://github.com/Armanidrisi/quotegen/issues)
[![GitHub license](https://img.shields.io/github/license/Armanidrisi/quotegen)](https://github.com/Armanidrisi/quotegen/blob/main/LICENSE)


Quotegen is a Node.js package that provides an easy way to fetch quotes. You can get a random quote or a quote from a specific category.

## 🚀 Installation

You can install Quotegen using npm:

```BASH
npm install node-quotegen
```

## 💻 Usage

```js
const { getQuote } = require("node-quotegen");

// Get a random quote
const quote = getQuote();
console.log(quote);

// Get a quote from a specific category
const quoteFromCategory = getQuote("motivational");
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

## Features :rocket:
- Generates random quotes :sparkles:
- Provides quotes by specific category :bookmark_tabs:
- Supports multiple categories :notebook_with_decorative_cover:
- Lightweight and easy to use :muscle:


## 📖 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

If you would like to contribute to this project, please feel free to submit a pull request or open an issue on the [GitHub repository.](https://github.com/Armanidrisi/quotegen)
