const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    return cats.push("Ralph")
}
function destructivelyPrependCat(Bob) {
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    return cats.pop()
}
function destructivelyRemoveFirstCat() {
    return cats.shift()
}
function appendCat(Broom) {
    return appendCat = [...cats, "Broom"]
}
function prependCat(Arnold) {
    return prependCat = ["Arnold", ...cats]
}
function removeLastCat() {
    return cats.slice(0, -1)
}
function removeFirstCat() {
    return cats.slice(1)
}