const matrix = (rows, columns, rStart, cStart) => {
    const output = [];
    let route = 0;
    let cur = 0;
    let motion = 1;
    while (output.length !== rows * columns) {
        if (0 <= rStart && rStart < rows && 0 <= cStart && cStart < columns) output.push([rStart,cStart]);
        if (cur < motion) {
            if (route === 0) cStart++;
            else if (route === 1) rStart++;
            else if (route === 2) cStart--;
            else rStart--;
            cur++;
        }
        if (cur === motion) {
            if (route & 1) motion++;
            route = (route + 1) % 4;
            cur = 0;
        }
    }
    return output;
};