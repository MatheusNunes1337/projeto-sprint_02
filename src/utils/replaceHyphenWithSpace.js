function replaceHyphenWithSpace(string) {
    const stringWithSpace = string.replace(new RegExp('-', 'g'), ' ')
    return stringWithSpace
}

module.exports = replaceHyphenWithSpace