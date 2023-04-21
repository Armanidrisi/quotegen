# 📚 Quotegen

[![npm downloads](https://img.shields.io/npm/dt/node-quotegen?color=blue&logo=npm)](https://www.npmjs.com/package/node-quotegen)
[![npm version](https://img.shields.io/npm/v/node-quotegen?color=blue&label=npm%20version&logo=npm)](https://www.npmjs.com/package/node-quotegen)
[![GitHub stars](https://img.shields.io/github/stars/Armanidrisi/quotegen?style=flat-square&logo=github)](https://github.com/Armanidrisi/quotegen/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Armanidrisi/quotegen?style=flat-square&logo=github)](https://github.com/Armanidrisi/quotegen/network/members)
[![GitHub issues](https://img.shields.io/github/issues/Armanidrisi/quotegen?style=flat-square&logo=github)](https://github.com/Armanidrisi/quotegen/issues)
[![GitHub license](https://img.shields.io/github/license/Armanidrisi/quotegen?style=flat-square&logo=github)](https://github.com/Armanidrisi/quotegen/blob/master/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/Armanidrisi/quotegen?style=flat-square&logo=github)](https://github.com/Armanidrisi/quotegen/graphs/contributors)
[![quotegen](https://img.shields.io/badge/quotegen-awesome-blueviolet?style=flat-square&logo=github)](https://github.com/Armanidrisi/quotegen)

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
- Generates random quotes ✨
- Provides quotes by specific category 📑
- Supports multiple categories 📔
- Lightweight and easy to use 💪

## 📖 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

If you would like to contribute to this project, please feel free to submit a pull request or open an issue on the [GitHub repository.](https://github.com/Armanidrisi/quotegen)
