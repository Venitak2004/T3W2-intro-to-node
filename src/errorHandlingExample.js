//try, catch, throw, finally

try {
    let a = 15, b = 0;
    if (b === 0);{
        // throw "Trying to divide by zero...";
        throw new Error("New error: Division by Zero!");
    }

} catch (error){
    console.error("cannot divide by zero!!");
    console.log(error);
} finally { // this will always run regardless of errors or not
    console.log("I always run!")
}