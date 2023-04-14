let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');

let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');

let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#audio');
let present = document.querySelector('#present');

let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let all_song = [
    {
        name: "Gallowdance",
        path: "audio/Gallowdance.mp3",
        img: "img/gallowdance.jpg",
        singer: "Lebanon Hanover"
    },
    {
        name: "Hall Of Ice",
        path: "audio/Gallowdance.mp3",
        img: "img/gallowdance.jpg",
        singer: "Lebanon Hanover"
    },
    {
        name: "Your Fork Moves",
        path: "audio/Gallowdance.mp3",
        img: "img/gallowdance.jpg",
        singer: "Lebanon Hanover"
    },
    {
        name: "Sadness Is Rebellion",
        path: "audio/Gallowdance.mp3",
        img: "img/gallowdance.jpg",
        singer: "Lebanon Hanover"
    }
]

function load_track(index_no) {
    track.src = all_song[index_no].path;
    title.innerHTML = all_song[index_no].name;
    track_image.src = all_song[index_no].img;
    artist.innerHTML = all_song[index_no].singer;
    track.load();

    total.innerHTML = all_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider, 1000);


}

load_track(index_no);

function justplay() {
    if (playing_song == false) {
        playSong();
    } else {
        pauseSong();
    }
}

function playSong() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

function pauseSong() {
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

function next_song() {
    if (index_no < all_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playSong();
    } else {
        index_no = 0;
        load_track(index_no);
        playSong();
    }
}

function previous_song() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playSong();
    } else {
        index_no = all_song.length - 1;
        load_track(index_no);
        playSong();
    }
}

function volume_change() {
    volume_show.innerHTML = recent_volume.value;
    track_volume = recent_volume.value / 100;
}

function duration_change() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function range_slider() {
    let position = 0;

    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    if (track.ended) {
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        if (autoplay == 1) {
            index_no += 1;
            load_track(index_no);
            playSong();
        }
    }
}

function autoplay_switch() {
    if (autoplay == 1) {
        autoplay = 0;
        auto_play.style.background = "rgba(255, 255, 255, 0.2)";
    } else {
        autoplay = 1;
        auto_play.style.background = "#FF8A65";
    }
}