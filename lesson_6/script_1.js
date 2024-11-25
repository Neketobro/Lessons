const message = prompt('Enter yor strinng', 'Hello World');
const chars = prompt('Enter some chars for removing', 'l');

function foo(message, chars) {
    let result = '';
    for (let i = 0; i < message.length; i++) {
        let shouldRemove = false;
        for (let j = 0; j < chars.length; j++) {
            if (message[i] === chars[j]) {
                shouldRemove = true;
            };
        };
        if (!shouldRemove) {
            result += message[i];
        };
    };
    return result;
};

const result = foo(message, chars);

alert(result);