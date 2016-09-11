func fizzbuzz(i: Int) -> String {
    let result = (i % 3, i % 5)
    switch result {
    case (0, _):
        return "Fizz"
    case (_, 0):
        return "Buzz"
    case (0, 0):
        return "FizzBuzz"
    default:
        return String(i)
    }
}

for number in 1...100 {
    println(fizzbuzz(number))
}
