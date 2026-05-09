// ======================================================
// 1. Traditional FOR Loop
// ======================================================
// WHY WE USE IT:
// - Best when index is needed
// - Gives full control over loop
// - Useful for forward/backward iteration
// - Common in interview problems
// ======================================================

function forLoopExample() {
    const str = 'hello';
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}
forLoopExample();

// ======================================================
// 2. FOR...OF Loop
// ======================================================
// WHY WE USE IT:
// - Used for iterable objects
// - Best for arrays and strings
// - Cleaner and easier than normal for loop
// - Directly gives values
// ======================================================

function forOfLoopExample() {
    const str = 'hello';
    for (const char of str) {
        console.log(char);
    }
}

forOfLoopExample();

// ======================================================
// 3. WHILE Loop
// ======================================================
// WHY WE USE IT:
// - Used when number of iterations is unknown
// - Runs until condition becomes false
// - Common in dynamic conditions
// ======================================================

function whileLoopExample() {
    const str = 'hello';
    let i = 0;
    while (i < str.length) {
        console.log(str[i]);
        i++;
    }
}

whileLoopExample();

// ======================================================
// 4. DO...WHILE Loop
// ======================================================
// WHY WE USE IT:
// - Similar to while loop
// - Executes at least one time
// - Condition checked AFTER execution
// ======================================================

function doWhileLoopExample() {
    const str = 'hello';
    let i = 0;
    do {
        console.log(str[i]);
        i++;
    } while (i < str.length);
}

doWhileLoopExample();

// ======================================================
// 5. forEach() Loop
// ======================================================
// WHY WE USE IT:
// - Used only with arrays
// - Cleaner syntax for array iteration
// - Best when only reading array values
// - Cannot break/continue easily
// ======================================================

function forEachLoopExample() {
    const arr = ['a', 'b', 'c'];
    arr.forEach(char => {
        console.log(char);
    });
}

forEachLoopExample();

// ======================================================
// 6. map() Loop
// ======================================================
// WHY WE USE IT:
// - Used to transform array values
// - Returns NEW array
// - Original array remains unchanged
// - Common in frontend/react development
// ======================================================

function mapLoopExample() {
    const arr = [1, 2, 3];
    const doubled =
        arr.map(num => num * 2);
    console.log(doubled);
}

mapLoopExample();

// ======================================================
// 7. FOR...IN Loop (Array)
// ======================================================
// WHY WE USE IT:
// - Returns indexes/keys
// - Mostly used with objects
// - Can work with arrays but not recommended
// - Better use for...of for arrays
// ======================================================

function forInArrayExample() {
    const arr = ['apple', 'banana', 'orange'];
    for (const index in arr) {
        console.log(index, arr[index]);
    }
}

forInArrayExample();

// ======================================================
// 8. FOR...IN Loop (Object)
// ======================================================
// WHY WE USE IT:
// - Best for iterating object keys
// - Common for dynamic objects
// - Access object properties dynamically
// ======================================================

function forInObjectExample() {
    const user = {
        name: 'Anil',
        age: 30,
        city: 'Delhi'
    };
    for (const key in user) {
        console.log(key, user[key]);
    }
}

forInObjectExample();

// ======================================================
// 9. FOR AWAIT...OF Loop
// ======================================================
// WHY WE USE IT:
// - Used for async iterable objects
// - Handles promises sequentially
// - Common in API/data streaming
// - Advanced asynchronous programming
// ======================================================

async function forAwaitOfExample() {
    const promises = [
        Promise.resolve('One'),
        Promise.resolve('Two'),
        Promise.resolve('Three')
    ];

    for await (const value of promises) {
        console.log(value);
    }
}

forAwaitOfExample();