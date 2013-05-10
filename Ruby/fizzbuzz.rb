#!/usr/bin/env ruby

for i in 1..100
    if i % 5 === 0 && i % 3 === 0 then
        # This could also have been done with an if i % 15 === 0
        print "FizzBuzz"
    elsif i % 3 === 0 then
        print "Fizz"
    elsif i % 5 === 0 then
        print "Buzz"
    else
        print i
    end

    print "\n"
end