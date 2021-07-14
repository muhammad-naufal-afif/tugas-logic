
for(var y = 1;  y < 10; y++) {
    for(var x = 1; x < 10; x++) {
        if(x == y) {
            document.write(' 0 ')
        }else {
            if(x + y == 10) {
                document.write(' 0 ')
            }else {
                document.write(' + ')
            }
            if(x && y == 5) {
                document.write(' 0 ')
            }else {
                document.write(' + ') 
            }
            if(y && x == 5) {
                document.write(' 0 ')
            }else {
                document.write(' + ')
            }
        }
    }
    document.write('<p>')
}