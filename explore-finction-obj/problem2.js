function printName(name, len) {
    if(len == name.length) {
        return;
    }
    process.stdout.write(name[len]);
    printName(name, len+1);
}


var name = 'Tomal';

printName(name, 0);
