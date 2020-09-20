//Element tanımlamaları
const player= document.querySelector('.player');
const elements={
    progress:player.querySelector('.progress'),
    video:player.querySelector('.viewer'),
    progressBar:player.querySelector('.progress__filled'),
    skipButtons:player.querySelectorAll('[data-skip]'),
    ranges:player.querySelectorAll('.player__slider'),
};

// Event Tanımlamaları