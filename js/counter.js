let a = 0;

increment.onclick = () => {
    a++;
    document.querySelector('h1').innerHTML = a;
}

decrement.onclick = () => {
    if (a > 0) {
        a--;
    }
    document.querySelector('h1').innerHTML = a;
}