<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>FizzBuzz | PHP</title>
</head>
<body>
    <?php
        //Author: Kevin Kirsche
        //Github URL: https://github.com/kkirsche
        for ($i = 1; $i <= 100; $i++)
        {
            if ($i % 3 === 0 && $i % 5 === 0)
            {
                //This could also have been done using if ($i % 15 === 0)
                echo "FizzBuzz";
            }
            else if ($i % 3 === 0)
            {
                echo "Fizz";
            }
            else if ($i % 5 === 0)
            {
                echo "Buzz";
            }
            else
            {
                echo $i;
            }
            echo "<br />";
        }
    ?> 
</body>
</html>