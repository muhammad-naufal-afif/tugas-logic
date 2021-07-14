
for(var y = 1;  y < 10; y++) {
    for(var x = 1; x < 10; x++) {
        if(x == y) {
            document.write(' + ')
        }else {
            if(x + y == 10) {
                document.write(' + ')
            }else {
                document.write(' - ')
            }
            document.write(' - ')
        }
    }
    document.write('<p>')
}