const nearley = require("nearley")
const grammar = require("./snowscript.js")

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

// supply feed
try{
    parser.feed("a -> 123")

    console.log(parser.results)
} catch(e) {
    console.log("parse failed", e)
}


