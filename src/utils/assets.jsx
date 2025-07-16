import bell_icon from '/assets/Icons/bell.png'
import home_icon from '/assets/Icons/home.png'
import like_icon from '/assets/Icons/like.png'
import loop_icon from '/assets/Icons/loop.png'
import mic_icon from '/assets/Icons/mic.png'
import next_icon from '/assets/Icons/next.png'
import play_icon from '/assets/Icons/play.png'
import pause_icon from '/assets/Icons/pause.png'
import plays_icon from '/assets/Icons/plays.png'
import prev_icon from '/assets/Icons/prev.png'
import search_icon from '/assets/Icons/search.png'
import shuffle_icon from '/assets/Icons/shuffle.png'
import speaker_icon from '/assets/Icons/speaker.png'
import library_icon from '/assets/Icons/library.png'
import zoom_icon from '/assets/Icons/zoom.png'
import plus_icon from '/assets/Icons/plus.png'
import arrow_icon from '/assets/Icons/arrow.png'
import mini_player_icon from '/assets/Icons/mini-player.png'
import queue_icon from '/assets/Icons/queue.png'
import volume_icon from '/assets/Icons/volume.png'
import arrow_right from '/assets/Icons/right_arrow.png'
import arrow_left from '/assets/Icons/left_arrow.png'
import spotify_logo from '/assets/Icons/spotify_logo.png'
import clock_icon from '/assets/Icons/clock_icon.png'

import cover1 from '/assets/SpotifyAlbum/img1.jpg'
import cover2 from '/assets/SpotifyAlbum/img2.jpg'
import cover3 from '/assets/SpotifyAlbum/img3.jpg'
import cover4 from '/assets/SpotifyAlbum/img4.jpg'
import cover5 from '/assets/SpotifyAlbum/img5.jpg'
import cover6 from '/assets/SpotifyAlbum/img6.jpg'
import cover7 from '/assets/SpotifyAlbum/img7.jpg'
import cover8 from '/assets/SpotifyAlbum/img8.jpg'

import album1 from '/assets/Album/naa ready.jpg'
import album2 from '/assets/Album/ordinary-person.jpg'
import album3 from '/assets/Album/mahaan.jpg'
import album4 from '/assets/Album/soorarai pottru.jpeg'
import album5 from '/assets/Album/vikram.jpeg'
import album6 from '/assets/Album/jailer.jpg'
import album7 from '/assets/Album/kaithi.jpg'
import album8 from '/assets/Album/vip.jpg'
import album9 from '/assets/Album/coolie.jpg'
import album10 from '/assets/Album/mankatha.jpeg'
import album11 from '/assets/Album/meesaya murukku.jpeg'

import song1 from '/Music/Naa Ready.mp3'
import song2 from '/Music/Ordinary Person.mp3'
import song3 from '/Music/Naan naan.mp3'
import song4 from '/Music/Maara Theme.mp3'
import song5 from '/Music/Lokiverse.mp3'
import song6 from '/Music/Hukum.mp3'
import song7 from '/Music/Night is Dark.mp3'
import song8 from '/Music/VIP - Title song.mp3'
import song9 from '/Music/Meesaya Murukku.mp3'
import song10 from '/Music/Coolie Disco.mp3'
import song11 from '/Music/Mankatha Theme Music.mp3'
import song12 from '/Music/What A Karavad.mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    library_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {
        id: 0,
        name: "Top 50 Global",
        image: cover1,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#2a4365"
    },
    {
        id: 1,
        name: "Top 50 India",
        image: cover2,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#22543d"
    },
    {
        id: 2,
        name: "Mega Hits",
        image: cover3,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#234e52"
    },
    {
        id: 3,
        name: "Meditation",
        image: cover4,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#F5B474"
    },
    {
        id: 4,
        name: "Sleep",
        image: cover5,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#0C2144"
    },
    {
        id: 5,
        name: "Favorites",
        image: cover6,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#744210"
    },
    {
        id: 6,
        name: "Study Beats",
        image: cover7,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#00939A"
    },
    {
        id: 7,
        name: "Lofi Beats",
        image: cover8,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#F68D8D"
    }
]

export const songsData = [
    {
        id: 0,
        name: "Naa Ready",
        artist: "Anirudh",
        image: album1,
        file: song1,
        album: 'Leo',
        desc: "From Leo",
        duration: "4:08"
    },
    {
        id: 1,
        name: "Ordinary Person",
        artist: "Anirudh",
        image: album2,
        file: song2,
        album: 'Leo',
        desc: "From Leo",
        duration: "2:18"
    },
    {
        id: 2,
        name: "Naan naan",
        artist: "Santhosh Narayanan",
        image: album3,
        file: song3,
        album: 'Mahaan',
        desc: "From Mahaan",
        duration: "4:08"
    },
    {
        id: 3,
        name: "Maara Theme",
        artist: "G V Prakash",
        image: album4,
        file: song4,
        album: 'Soorarai Pottru',
        desc: "From Soorarai Pottru",
        duration: "1:10"
    },
    {
        id: 4,
        name: "Lokiverse",
        artist: "Anirudh",
        image: album5,
        file: song5,
        album: 'Vikram',
        desc: "From Vikram",
        duration: "2:36"
    },
    {
        id: 5,
        name: "Hukum - Jailer",
        artist: "Anirudh",
        image: album6,
        file: song6,
        album: 'Jailer',
        desc: "From Jailer",
        duration: "3:27"
    },
    {
        id: 6,
        name: "Night Is Dark",
        artist: "Sam C S",
        image: album7,
        file: song7,
        album: 'Kaithi',
        desc: "From Kaithi",
        duration: "1:53"
    },
    {
        id: 7,
        name: "VIP - Title Track",
        artist: "Anirudh",
        image: album8,
        file: song8,
        album: 'Velai illa Pattathari',
        desc: "From VIP",
        duration: "3:56"
    },
    {
        id: 8,
        name: "Meesaya Murukku",
        artist: "Hip Hop Tamizha",
        image: album11,
        file: song9,
        album: 'Meesaya Murukku',
        desc: "From Meesaya Murukku",
        duration: "3:42"
    },
    {
        id: 9,
        name: "Coolie - Disco",
        artist: "Anirudh",
        image: album9,
        file: song10,
        album: 'Coolie',
        desc: "From Coolie",
        duration: "2:09"
    },
    {
        id: 10,
        name: "Mankatha Theme Music",
        artist: "Yuvan Shankar Raja",
        image: album10,
        file: song11,
        album: 'Mankatha',
        desc: "From Mankatha",
        duration: "3:04"
    },
    {
        id: 11,
        name: "What a Karavad",
        artist: "Anirudh",
        image: album8,
        file: song12,
        album: 'Velai illa Pattathari',
        desc: "From VIP",
        duration: "4:27"
    }
]