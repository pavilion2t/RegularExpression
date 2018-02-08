import 'classlist-polyfill'
import Promise from 'bludbird'
import Markdown from 'markdown'
const md = Markdown.markdown.toHTML
import workText from 'raw-loader!./work.txt'
import { default as writeChar, writeSimpleChar, handleChar } from './lib/writeChar'
import getPrefix from './lib/getPrefix'

document.addEventListener("DOMContentLoaded", function() {
  getBrowserPrefix();
  populateHeader();
  getEls();
  createEventHandlers();
  startAnimation();
});

let comma = /\D[\,]\s$/;
let endOfBlock = /[^\/]\n\n$/;
let endOfSentence = /[\.\?\!]\s$/;

async function writeTo(el, message, index, interval, mirrorToStyle, charsPerInterval) {
  if (animationSkipped) {
    throw new Error('Skip it')
  }
  let chars = message.slice(index, index + charsPerInterval)
  index += charsPerInterval

  el.scrollTop = el.scrollHeight

  if (mirrorToStyle) {
    writeChar(el, chars, style)
  } else {
    writeSimpleChar(el, chars)
  }

  if (index < message.length) {
    let thisInterval = interval;
    let thisSlice = message.slice(index-2, index+1);
    if (comma.test(thisSlice)) thisInterval = interval * 30;
    if (endOfBlock.test(thisSlice)) thisInterval = interval * 50;
    if (endOfSentence.test(thisSlice)) thisInterval = interval * 70;
    do {
      await Promise.delay(thisInterval);
    } while (paused);
    return writeTo(el, message, index, interval, mirrorToStyle, charsPerInterval);
  }
}

// Older versions of major browsers (like Android) still use prefixes. So we figure out what that prefix is
// and use it.
function getBrowserPrefix() {
  browerPrefix = getPrefix();
  styleText = styleText.map(function(text) {
    return text.replace(/-webkit-/g, browerPrefix);
  })
}

async function startAnimation() {
  try {
    await writeTo(styleEl, styleText[0], 0, speed, true, 1);
  }
}











