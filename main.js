var spruceEl = document.getElementById('spruceButton');
var pineEl = document.getElementById('pineButton');
var oakEl = document.getElementById('oakButton');
var redwoodEl = document.getElementById('redwoodButton');
var sequoiaEl = document.getElementById('sequoiaButton');
var palmEl = document.getElementById('palmButton');
var chestnutEl = document.getElementById('chestnutButton');
var weepingwillowEl = document.getElementById('weepingwillowButton');
var mapleEl = document.getElementById('mapleButton');
var birchEl = document.getElementById('birchButton');
var cedarEl = document.getElementById('cedarButton');
var baobabEl = document.getElementById('baobabButton');
var resultsWrapperEl = document.getElementById('resultsWrapper');
var resultsArray = resultsWrapperEl.children;
var exitButton = document.getElementsByClassName('exitButton');

console.log(resultsArray);

spruceEl.addEventListener('click', function() {
  clearDisplay();
  displayResults('Spruce');
  window.scroll(0, 0); // For Chrome, Firefox, Opera
  document.body.scrollTop = 0; // For Safari
});
pineEl.addEventListener('click', function() {
  clearDisplay();
  displayResults('Pine');
  window.scroll(0, 0);
  document.body.scrollTop = 0;
});
oakEl.addEventListener('click', function() {
  clearDisplay();
  displayResults('Oak');
  window.scroll(0, 0);
  document.body.scrollTop = 0;
});
redwoodEl.addEventListener('click', function() {
  clearDisplay();
  displayResults('Redwood');
  window.scroll(0, 0);
  document.body.scrollTop = 0;
});
sequoiaEl.addEventListener('click', function() {
  clearDisplay();
  displayResults('Sequoia');
  window.scroll(0, 0);
  document.body.scrollTop = 0;
});
palmEl.addEventListener('click', function() {
  clearDisplay();
  displayResults('Palm');
  window.scroll(0, 0);
  document.body.scrollTop = 0;
});
chestnutEl.addEventListener('click', function() {
  clearDisplay();
  displayResults('Chestnut');
  window.scroll(0, 0);
  document.body.scrollTop = 0;
});
weepingwillowEl.addEventListener('click', function() {
  clearDisplay();
  displayResults('Weeping Willow');
  window.scroll(0, 0);
  document.body.scrollTop = 0;
});
mapleEl.addEventListener('click', function() {
  clearDisplay();
  displayResults('Maple');
  window.scroll(0, 0);
  document.body.scrollTop = 0;
});
birchEl.addEventListener('click', function() {
  clearDisplay();
  displayResults('Birch');
  window.scroll(0, 0);
  document.body.scrollTop = 0;
});
cedarEl.addEventListener('click', function() {
  clearDisplay();
  displayResults('Cedar');
  window.scroll(0, 0);
  document.body.scrollTop = 0;
});
baobabEl.addEventListener('click', function() {
  clearDisplay();
  displayResults('Baobab');
  window.scroll(0, 0);
  document.body.scrollTop = 0;
});

for (var i = 0; i < exitButton.length; i++) {
    exitButton[i].addEventListener('click', function() {
        clearDisplay();
        stopAllAudio();
    });
}


// Zodiac algorythm starts here
function calZodiac() {
	birthdateObj = new Date(document.getElementById('birthdateEntry').value);

	var whichYear = birthdateObj.getUTCFullYear();
	var whichMonth = birthdateObj.getUTCMonth();
	var whichDayOfMonth = birthdateObj.getUTCDate();

	whichMonth ++;
	whichDayOfMonth ++;

	var treeType;

	if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
		treeType = 'Spruce';
	} else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        treeType = 'Pine';
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        treeType = 'Oak';
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        treeType = 'Redwood';
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        treeType = 'Sequoia';
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        treeType = 'Palm';
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        treeType = 'Chestnut';
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        treeType = 'Weeping Willow';
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        treeType = 'Maple';
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        treeType = 'Birch';
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        treeType = 'Cedar';
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        treeType = 'Baobab';
    }

    displayResults(treeType);

    return false;
    console.log(birthdateObj);
}
// Zodiac algorythm ends here

var activeTreeId = null;

function timerHide(index) {
    setTimeout(function() {
        console.log("timerIndex",index);
        if(index!==activeTreeId){
            resultsArray[index].classList.remove('display');
        }
    }, 1000);
}

// Display results starts here
function displayResults(treeType) {
  stopAllAudio();

  console.log('displayResults()');
  var i = 0;

  for (var i = 0; i < resultsArray.length; i++) {
      timerHide(i);
  }

  if (treeType === 'Spruce') {
      resultsArray[1].classList.add('resultsOpacityDisplay');
      resultsArray[1].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[1].classList.remove('stackOrder');
          console.log('remove stackOrder class');
      }, 1000);
      activeTreeId = 1;
      document.getElementById('spruceAudio').play();
  } else if (treeType === 'Pine') {
      resultsArray[2].classList.add('resultsOpacityDisplay');
      resultsArray[2].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[2].classList.remove('stackOrder');
      }, 1000);
      activeTreeId= 2;
      document.getElementById('pineAudio').play();
  } else if (treeType === 'Oak') {
      resultsArray[3].classList.add('resultsOpacityDisplay');
      resultsArray[3].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[3].classList.remove('stackOrder');
      }, 1000);
      activeTreeId = 3;
      document.getElementById('oakAudio').play();
  } else if (treeType === 'Redwood') {
      resultsArray[4].classList.add('resultsOpacityDisplay');
      resultsArray[4].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[4].classList.remove('stackOrder');
          console.log('remove stackOrder class');
      }, 1000);
      activeTreeId = 4;
      document.getElementById('andy-audio').play();
  } else if (treeType === 'Sequoia') {
      resultsArray[5].classList.add('resultsOpacityDisplay');
      resultsArray[5].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[5].classList.remove('stackOrder');
          console.log('remove stackOrder class');
      }, 1000);
      activeTreeId = 5;
      document.getElementById('andy-audio').play();
  } else if (treeType === 'Palm') {
      resultsArray[6].classList.add('resultsOpacityDisplay');
      resultsArray[6].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[6].classList.remove('stackOrder');
          console.log('remove stackOrder class');
      }, 1000);
      activeTreeId = 6;
      document.getElementById('andy-audio').play();
  } else if (treeType === 'Chestnut') {
      resultsArray[7].classList.add('resultsOpacityDisplay');
      resultsArray[7].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[7].classList.remove('stackOrder');
          console.log('remove stackOrder class');
      }, 1000);
      activeTreeId = 7;
      document.getElementById('chestnutAudio').play();
  } else if (treeType === 'Weeping Willow') {
      resultsArray[8].classList.add('resultsOpacityDisplay');
      resultsArray[8].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[8].classList.remove('stackOrder');
          console.log('remove stackOrder class');
      }, 1000);
      activeTreeId = 8;
      document.getElementById('weepingwillowAudio').play();
  } else if (treeType === 'Maple') {
      resultsArray[9].classList.add('resultsOpacityDisplay');
      resultsArray[9].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[9].classList.remove('stackOrder');
          console.log('remove stackOrder class');
      }, 1000);
      activeTreeId = 9;
      document.getElementById('').play();
  } else if (treeType === 'Birch') {
      resultsArray[10].classList.add('resultsOpacityDisplay');
      resultsArray[10].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[10].classList.remove('stackOrder');
          console.log('remove stackOrder class');
      }, 1000);
      activeTreeId = 10;
      document.getElementById('birchAudio').play();
  } else if (treeType === 'Cedar') {
      resultsArray[11].classList.add('resultsOpacityDisplay');
      resultsArray[11].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[11].classList.remove('stackOrder');
          console.log('remove stackOrder class');
      }, 1000);
      activeTreeId = 11;
      document.getElementById('cedarAudio').play();
  } else if (treeType === 'Baobab') {
      resultsArray[12].classList.add('resultsOpacityDisplay');
      resultsArray[12].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[12].classList.remove('stackOrder');
          console.log('remove stackOrder class');
      }, 1000);
      activeTreeId = 12;
      document.getElementById('baobabAudio').play();
  } else {
      resultsArray[0].classList.add('resultsOpacityDisplay');
      resultsArray[0].classList.add('stackOrder');
      setTimeout(function() {
          resultsArray[0].classList.remove('stackOrder');
          console.log('remove stackOrder class');
      }, 1000);
      activeTreeId = 0;
  }
}
// Display results ends here

// Clear results starts here
function clearDisplay() {
    for (var i = 0; i < resultsArray.length; i++) {
        resultsArray[i].classList.remove('resultsOpacityDisplay');
        resultsArray[i].classList.remove('stackOrder')
    }
}
function stopAllAudio() {
    var audio = document.getElementsByTagName('audio');
    for (i = 0; i < audio.length; i++) {
        audio[i].pause();
    }
}
// Clear results ends here
