var key = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Pentatonic scale
var pentatonic_scale = ['Major pentatonic', 'Minor Pentatonic'];
var pentatonic_root_position = ['6弦ルート小指', '6弦ルート人差し指', '5弦ルート薬指', '5弦ルート人差し指','4弦ルート人差し指', '4弦ルート中指', '3弦ルート薬指', '3弦ルート人差し指', '2弦ルート人差し指', '2弦ルート小指', '1弦ルート小指', '1弦ルート人差し指'];

document.addEventListener('keydown', keydown_event);

function keydown_event(e) {
    if (e.code == 'ArrowRight') {
        let result;
        for(let i=0; i<1; i++) {
            var scale_size = pentatonic_scale.length;
            var scale_num = Math.floor(Math.random() * scale_size);
        
            var position_size = pentatonic_root_position.length;
            var position_num = Math.floor(Math.random() * position_size);
        
            console.log(pentatonic_scale[scale_num] + ": " + pentatonic_root_position[position_num]);
            result = pentatonic_scale[scale_num] + ": " + pentatonic_root_position[position_num];
        }
        document.getElementById('penta').textContent = result;
    } else {
        return false;
    }
}

// Mode scale
var mode_scale = ['Ionian', 'Dorian', 'Mixolydian', 'Aeolian'];
var mode_root_position = [];

// Interval

// Chord tone