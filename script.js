const INVALID_CHARS = "<>@#*"

function initialize ()
{
    logOutputBox = document.getElementById ("logoutput");
    logFormObject = document.getElementById ("logform");
    log = "Log --";

    arrayOutput = document.getElementById ("divout");
    /*
    theList = ["1st Item", "2nd Item", "3rd Item", "4th Item", "5th Item",]
    theList [2] = "Not the 2nd Item";
    theList [5] = "6th Item";

    arrayOutput.innerHTML = theList; 
    */
    ranList = [];
    var randomLength = getRandomInteger (50, 100);
    for (var i = 0; i < randomLength; i++)
    {
        ranList [ranList.length] = getRandomInteger (-10, 10);
    }
    displayList ();

    outBox = document.getElementById ("outbox");
    foodSelectionBox = document.getElementById ("foodSel");
    duplicatesBox = document.getElementById ("dupes");
    countBox = document.getElementById ("count");

    foodList = ["Pizza", "Hamburger", "Sushi", "Guacamole", "Salmon", "Hamburger", "Guacamole", "Hamburger", "Salmon", "Sushi", "Guacamole", "Guacamole", "Hamburger", "Sushi"]
    dupesList = [];
    dupesCount = 0;

    display ();
}

function getRandomInteger (min, max)
{
    var num = parseInt(Math.random () * (max - (min - 1)) + min);
    return num;
}

function addMessage (msg)
{
    /*
    if (isValid (msg))
        log += "<br/>" + msg;
    else
        log += "<br/>Invalid Message Entered";
    */
    log += "<br/>" + validate(msg);
    display ();
}

function isValid (msg)
{
    for (var i = 0; i < INVALID_CHARS.length; i++)
    {
        if (msg.indexOf(INVALID_CHARS.charAt(i)) >= 0)
        {
        return false;
        }
    }
    return true;
}

function validate (msg)
{
    for (var i = 0; i < INVALID_CHARS.length; i++)
    {
        var charIdx = msg.indexOf(INVALID_CHARS.charAt(i));
        while (charIdx >= 0)
        {
        msg = msg.substring (0, charIdx) + msg.substring (charIdx + 1);
        var charIdx = msg.indexOf(INVALID_CHARS.charAt(i));
        }
    }
    return msg;
}

function addFood ()
{
    foodList.push (foodSelectionBox.value);
    display ();
}

function countDuplicates (arr, item)
{
    var count = 0;
    for (var i = 0; i < arr.length; i++)
    {
        if (arr [i] == item)
        {
            count++;
        }
    }
    return count;
}

function indexesOf (arr, item)
{
    var list = [];

    for (var i = 0; i < arr.length; i++)
    {
        if (arr [i] == item)
        {
            list.push (i);
        }
    }
    return list;
}

function getDupeList ()
{
    dupesList = indexesOf (foodList, foodSelectionBox.value)
    display ();
}

function getDupeCount ()
{
    dupesCount = countDuplicates (foodList, foodSelectionBox.value)
    display ();
}

function display ()
{
    logOutputBox.innerHTML = log;

    outBox.innerHTML = "0:" + foodList [0];
    for (var i = 1; i < foodList.length; i++)
    {
        outBox.innerHTML += "<br/>" + i + ": " + foodList [i]; 
    }
    duplicatesBox.innerHTML = dupesList; 
    countBox.innerHTML = dupesCount;
}

function displayList ()
{
    arrayOutput.innerHTML = "";

    for (var i = 0; i < ranList.length; i++)
    {
        arrayOutput.innerHTML += i + ": " + ranList [i] + "<br/>"; 
    }
}