async function bubbleSort() {
    let del = 300 / (speed * size);
    for (let i = size - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            addcol(bars[j], "red");
            addcol(bars[j + 1], "red")

            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
            }
            await new Promise(resolve =>
                setTimeout(() => {
                  resolve();
                }, del)
                );
            addcol(bars[j],"yellow");
            addcol(bars[j+1],"yellow")
        }
        addcol(bars[i],"green");
    }

}