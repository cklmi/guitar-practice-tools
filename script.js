var key = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Pentatonic scale
var pentatonic_scale = ['Major Pentatonic', 'Minor Pentatonic'];
var pentatonic_root_position = ['6弦ルート:低', '6弦ルート:高', '5弦ルート:低', '5弦ルート:高','4弦ルート:低', '4弦ルート:高', '3弦ルート:低', '3弦ルート:高', '2弦ルート:低', '2弦ルート:高'];

// Mode scale
var mode_scale = ['Ionian'];
var mode_root_position = ['6弦ルート:低', '6弦ルート:中', '6弦ルート:高', '5弦ルート:低', '5弦ルート:中', '5弦ルート:高', '4弦ルート:低', '4弦ルート:中', '4弦ルート:高', '3弦ルート:低', '3弦ルート:中', '3弦ルート:高', '2弦ルート:低', '2弦ルート:中', '2弦ルート:高'];

// Interval

// Chord tone

// ---
document.addEventListener('keydown', keydown_event);
function keydown_event(e) {
    if (e.code == 'ArrowRight') {
        let result;
        for(let i=0; i<1; i++) {
            // penta
            var scale_size = pentatonic_scale.length;
            var random_scale_num = Math.floor(Math.random() * scale_size);
            var position_size = pentatonic_root_position.length;
            var random_position_num = Math.floor(Math.random() * position_size);
            result = pentatonic_scale[random_scale_num] + ": " + pentatonic_root_position[random_position_num];

            // mode
            var scale_size = mode_scale.length;
            var random_scale_num = Math.floor(Math.random() * scale_size);
            var position_size = mode_root_position.length;
            var random_position_num = Math.floor(Math.random() * position_size);
            result = mode_scale[random_scale_num] + ": " + mode_root_position[random_position_num];
        }
        // penta
        root = key[Math.floor(Math.random() * 12)]
        document.getElementById('penta').textContent = root + " " + result;

        // mode
        root = key[Math.floor(Math.random() * 12)]
        document.getElementById('mode').textContent = root + " " + result;
    } else {
        return false;
    }
}
