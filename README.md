# @alg-mapper/tag-style

`@alg-mapper/tag-style` is a package that converts text elements such as hashtags, links, mentions, and custom keywords into stylized HTML elements.

## Installation
```
npm install @alg-mapper/tag-style
```

## Usage

```javascript
const { TagStyle } = require('@alg-mapper/tag-style');

// Links
const Linktext = 'visit https://www.example.com for more information.';
TagStyle.highlight(Linktext, { links: true }); 
// Output: Visit <a class="tag-style-link" href="https://www.example.com">https://www.example.com</a> for more information.

// Mentions
const Mentionstext = 'hello @user';
TagStyle.highlight(Mentionstext, { mentions: true }); 
// Output: hello <span class="tag-style-mention">@user</span>

// Hashtags
const Hashtagtext = 'check out #codes';
TagStyle.highlight(Hashtagtext, { hashtags: true }); 
// Output: check out <span class="tag-style-hashtag">#codes</span>

// Custom keywords
const Customtext = 'hello everyone. this is custom';
TagStyle.highlightKeywords(Customtext, { keywords: ['hello', 'custom'] }); 
// Output: <span class="tag-style-keyword">hello</span> everyone. this is <span class="tag-style-keyword">custom</span>
```