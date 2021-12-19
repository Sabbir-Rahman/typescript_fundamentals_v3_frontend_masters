//type aliases
type userContactInfo ={
    name:string,
    email:string
}

type UserInfoOutcomeError = ["error",Error]
type UserInfoOutcomeSuccess = [
    "success",
    {name: string; email:string}
]

type UserInfoOutcome = 
    | UserInfoOutcomeError
    | UserInfoOutcomeSuccess


function flipCoin(): "heads"|"tails" {
    if (Math.random() >0.5) return "heads"
    return "tails"
}
    
//return type is simple now
function maybeGetUserInfo():UserInfoOutcome{
        if (flipCoin() === "heads"){
            return [
                "success",
                { name: "Mike North", email:"mike@example.com"}
            ]
        } else {
            return [
                "error",
                new Error(" The coin landed on tails :(")
            ]
        }
    }
