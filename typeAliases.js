function flipCoin() {
    if (Math.random() > 0.5)
        return "heads";
    return "tails";
}
//return type is simple now
function maybeGetUserInfo() {
    if (flipCoin() === "heads") {
        return [
            "success",
            { name: "Mike North", email: "mike@example.com" }
        ];
    }
    else {
        return [
            "error",
            new Error(" The coin landed on tails :(")
        ];
    }
}
