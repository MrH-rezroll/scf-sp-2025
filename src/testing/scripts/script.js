const audio_url = document.getElementById('AudioPlayer');

async function fetchWordDefinition(word_search) {
  try {
    console.log("Step 1");
    const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/cogent");
    console.log("Step 2");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("Step 3");
    const data = await response.json();
    console.log(data);

    const phonetics = data[0]?.phonetics || [];
    const audioUrl = phonetics.find(p => p.audio)?.audio;

    if (audioUrl) {
      get_audio(audioUrl);
    } else {
      console.warn("No audio URL found for this word.");
    }

  } catch (error) {
    console.error('Error fetching the word definition:', error.message);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const word_search = document.getElementById('TextBox');
  const searchBtn = document.getElementById('SearchBtn');

  searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let inputValue = word_search.value.trim().toLowerCase();
    fetchWordDefinition(inputValue);
    console.log('Input value:', inputValue);
  });
});

function get_audio(audio_address) {
  if (!audio_address) {
    alert("No audio is found.");
  } else {
    audio_url.src = audio_address;
    audio_url.play().catch((err) => {
      console.warn("Audio playback failed:", err);
    });
  }
}
