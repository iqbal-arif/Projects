const audioContext = new AudioContext();

const NOTE_DETAILS = [
  { note: 'C', key: 'Z', frequency: 261.626, active: false },
  { note: 'Db', key: 'S', frequency: 277.183, active: false },
  { note: 'D', key: 'X', frequency: 293.665, active: false },
  { note: 'Eb', key: 'D', frequency: 311.127, active: false },
  { note: 'E', key: 'C', frequency: 329.628, active: false },
  { note: 'F', key: 'V', frequency: 349.228, active: false },
  { note: 'Gb', key: 'G', frequency: 369.994, active: false },
  { note: 'G', key: 'B', frequency: 391.995, active: false },
  { note: 'Ab', key: 'H', frequency: 415.305, active: false },
  { note: 'A', key: 'N', frequency: 440, active: false },
  { note: 'Bb', key: 'J', frequency: 466.164, active: false },
  { note: 'B', key: 'M', frequency: 493.883, active: false },
];

document.addEventListener('keydown', (e) => {
  if (e.repeat) return; //to exit out of function. it's a guard clause.
  console.log('Down Event ', e);
  const keCode = e.code;
  const keNoteDetail = getNoteDetail(keCode);
  if (keNoteDetail == null) return;
  //Adding Active property to NOTE-DETAILS to Play the active notes
  keNoteDetail.active = true;
  //To playNotes()
  playNotes();

  console.log(keNoteDetail);
});
document.addEventListener('keyup', (e) => {
  console.log('Up Event ', e);
  const keCode = e.code;
  const keNoteDetail = getNoteDetail(keCode);
  if (keNoteDetail == null) return;
  keNoteDetail.active = false;
  playNotes();
});

function getNoteDetail(keyBoardCode) {
  return NOTE_DETAILS.find((keyNode) => `Key${keyNode.key}` === keyBoardCode);
}

//Adding Class Nodes
function playNotes() {
  //Applying active notes to predefined keys
  NOTE_DETAILS.forEach((keyNode) => {
    const keyDisplay = document.querySelector(`[data-note=${keyNode.note}]`);
    keyDisplay.classList.toggle('active', keyNode.active);
    console.log(keyDisplay);
    // Node player stop condition if oscillator is connected to note
    if (keyNode.oscillator != null) {
      keyNode.oscillator.stop();
      keyNode.oscillator.disconnect();
    }
  });

  // Getting Notes that are active
  const activeNodes = NOTE_DETAILS.filter((keyNode) => keyNode.active);
  // To divide the tone intensity and keep it a 100% even if more then one note is playing simultaneously
  const gain = 1 / activeNodes.length;
  activeNodes.forEach((keyNode) => {
    startNode(keyNode, gain);
  });
}

// Function to play Audio Frequencies

function startNode(keNoteDetail, gain) {
  // gain is used to determine the volume of out put
  const gainNOde = audioContext.createGain();
  gainNOde.gain.value = gain;
  const oscillator = audioContext.createOscillator();
  oscillator.frequency = keNoteDetail.frequency;
  oscillator.type = 'sine';
  oscillator.connect(gainNOde).connect(audioContext.destination);
  oscillator.start();
  // saving reference to note to check for oscillator connection to stop it
  keNoteDetail.oscillator = oscillator;
}
