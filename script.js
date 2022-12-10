var key = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Pentatonic scale
var pentatonic_scale = ['Major Pentatonic', 'Minor Pentatonic'];
var pentatonic_root_position = ['6弦ルート:低', '6弦ルート:高', '5弦ルート:低', '5弦ルート:高','4弦ルート:低', '4弦ルート:高', '3弦ルート:低', '3弦ルート:高', '2弦ルート:低', '2弦ルート:高', '1弦ルート:低', '1弦ルート:高'];

document.addEventListener('keydown', keydown_event);

function keydown_event(e) {
    if (e.code == 'ArrowRight') {
        let result;
        for(let i=0; i<1; i++) {
            var scale_size = pentatonic_scale.length;
            var scale_num = Math.floor(Math.random() * scale_size);
        
            var position_size = pentatonic_root_position.length;
            var position_num = Math.floor(Math.random() * position_size);
            result = pentatonic_scale[scale_num] + ": " + pentatonic_root_position[position_num];
        }
        root = key[Math.floor(Math.random() * 12)]
        document.getElementById('penta').textContent = root + " " + result;
    } else {
        return false;
    }
}

// Mode scale
var mode_scale = ['Ionian', 'Dorian', 'Mixolydian', 'Aeolian'];
var mode_root_position = [];

// Interval

// Chord tone
