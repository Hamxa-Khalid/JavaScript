let count = 0;

function cc(card) {
    // Only change code below this line
    if (card === 2)
        count++;
    if (card === 3)
        count++;
    if (card === 4)
        count++;
    if (card === 5)
        count++;
    if (card === 6)
        count++;
    if (card === 10)
        count--;
    if (card === "J")
        count--
    if (card === "Q")
        count--
    if (card === "K")
        count--
    if (card === "A")
        count--

    if (count > 0)
        return `${count} Bet`;
    if (count <= 0)
        return `${count} Hold`;
    // Only change code above this line
}

console.log(cc(7), cc(8), cc(9));

