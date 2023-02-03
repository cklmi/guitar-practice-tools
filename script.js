var keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
var root_position = ['6th string', '5th string', '4th string', '3rd string', '2nd string', '1st string',];

// Interval

// Chord tone

// Chord

document.addEventListener('keydown', keydown_event);

function keydown_event(e) {
    if (e.code == 'ArrowRight') {
        let result;
        
        for(let i=0; i<1; i++) {
            var root_position_size = root_position.length;
            var random_root_position_num = Math.floor(Math.random() * root_position_size);
            result = "Root: " + root_position[random_root_position_num];
        }

        key = keys[Math.floor(Math.random() * 12)]
        document.getElementById('scale').textContent = 'Key: ' + key + ' / ' + " " + result;
    } else {
        return false;
    }
}
