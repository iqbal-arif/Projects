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

const keyDisplay = document.querySelector('[data-note]');
// console.log(keyDisplay);

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

function playNotes() {
  NOTE_DETAILS.forEach((keyNode) => {
    keyDisplay.classList.toggle('active', `keyNode.${keyDisplay.note}`);
    console.log(keyDisplay);
  });
}
//   keyElement.classList.toggle('active', keyDisplay.active);
// console.log(keyElement);
