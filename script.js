const button1 = document.querySelector('.button1');
const content1 = document.querySelector('.one');

const button2 = document.querySelector('.button2');
const content2 = document.querySelector('.two');

const button3 = document.querySelector('.button3');
const content3 = document.querySelector('.three');

const button4 = document.querySelector('.button4');
const content4 = document.querySelector('.four');

const close1 = document.querySelector('.close-1');
const close2 = document.querySelector('.close-2');
const close3 = document.querySelector('.close-3');
const close4 = document.querySelector('.close-4');



button1.addEventListener('click', () => {
    content1.style.display = 'block';
});

button2.addEventListener('click', () => {
    content2.style.display = 'block';
});

button3.addEventListener('click', () => {
    content3.style.display = 'block';
});

button4.addEventListener('click', () => {
    content4.style.display = 'block';
});


close1.addEventListener('click', () => {
    content1.style.display = 'none';
})

close2.addEventListener('click', () => {
    content2.style.display = 'none';
})

close3.addEventListener('click', () => {
    content3.style.display = 'none';
})

close4.addEventListener('click', () => {
    content4.style.display = 'none';
})


