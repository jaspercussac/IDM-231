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
var exitButton = document.getElementsByClassName("resultsCard-exit");

console.log(resultsArray);

spruceEl.addEventListener('click', function() {
    displayResults('Spruce');
});
pineEl.addEventListener('click', function() {
    displayResults('Pine');
});
oakEl.addEventListener('click', function() {
    displayResults('Oak');
});
redwoodEl.addEventListener('click', function() {
    displayResults('Redwood');
});
sequoiaEl.addEventListener('click', function() {
  displayResults('Sequoia');
});
palmEl.addEventListener('click', function() {
    displayResults('Palm');
});
chestnutEl.addEventListener('click', function() {
    displayResults('Chestnut');
});
weepingwillowEl.addEventListener('click', function() {
    displayResults('Weeping Willow');
});
mapleEl.addEventListener('click', function() {
    displayResults('Maple');
});
birchEl.addEventListener('click', function() {
    displayResults('Birch');
});
cedarEl.addEventListener('click', function() {
    displayResults('Cedar');
});
baobabEl.addEventListener('click', function() {
    displayResults('Baobab');
});


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

function timerHide(index) {
    setTimeout(function() {
        console.log("timerIndex",index);
        if(index!==activeCharacterId){
            resultsArray[index].classList.remove('display');
        }
    }, 1000);
}


var activeCharacterId = null;


function displayResults(treeType) {

    stopAllAudio();

    console.log('displayResults()');
    var i = 0;
    for (var i = 0; i < resultsArray.length; i++) {
        // resultsArray[i].classList.remove('display');
        timerHide(i);
    }

    if (treeType === 'Spruce') {
        resultsArray[1].classList.add('display');
        resultsArray[1].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[1].classList.remove('stackOrder');
            console.log('remove stackOrder class');
        }, 1000);
        activeCharacterId = 1;
    } else if (treeType === 'Pine') {
        resultsArray[2].classList.add('display');
        resultsArray[2].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[2].classList.remove('stackOrder');
        }, 1000);
        activeCharacterId= 2;
    } else if (treeType === 'Oak') {
        resultsArray[3].classList.add('display');
        resultsArray[3].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[3].classList.remove('stackOrder');
        }, 1000);
        activeCharacterId = 3;
    } else if (treeType === 'Redwood') {
        resultsArray[4].classList.add('display');
        resultsArray[4].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[4].classList.remove('stackOrder');
            console.log('remove stackOrder class');
        }, 1000);
        activeCharacterId = 4;
    } else if (treeType === 'Sequoia') {
        resultsArray[5].classList.add('display');
        resultsArray[5].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[5].classList.remove('stackOrder');
            console.log('remove stackOrder class');
        }, 1000);
        activeCharacterId = 5;
    } else if (treeType === 'Palm') {
        resultsArray[6].classList.add('display');
        resultsArray[6].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[6].classList.remove('stackOrder');
            console.log('remove stackOrder class');
        }, 1000);
        activeCharacterId = 6;
    } else if (treeType === 'Chestnut') {
        resultsArray[7].classList.add('display');
        resultsArray[7].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[7].classList.remove('stackOrder');
            console.log('remove stackOrder class');
        }, 1000);
        activeCharacterId = 7;
    } else if (treeType === 'Weeping Willow') {
        resultsArray[8].classList.add('display');
        resultsArray[8].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[8].classList.remove('stackOrder');
            console.log('remove stackOrder class');
        }, 1000);
        activeCharacterId = 8;
    } else if (treeType === 'Maple') {
        resultsArray[9].classList.add('display');
        resultsArray[9].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[9].classList.remove('stackOrder');
            console.log('remove stackOrder class');
        }, 1000);
        activeCharacterId = 9;
    } else if (treeType === 'Birch') {
        resultsArray[10].classList.add('display');
        resultsArray[10].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[10].classList.remove('stackOrder');
            console.log('remove stackOrder class');
        }, 1000);
        activeCharacterId = 10;
    } else if (treeType === 'Cedar') {
        resultsArray[11].classList.add('display');
        resultsArray[11].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[11].classList.remove('stackOrder');
            console.log('remove stackOrder class');
        }, 1000);
        activeCharacterId = 11;
    } else if (treeType === 'Baobab') {
        resultsArray[12].classList.add('display');
        resultsArray[12].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[12].classList.remove('stackOrder');
            console.log('remove stackOrder class');
        }, 1000);
        activeCharacterId = 12;
    } else {
        resultsArray[0].classList.add('display');
        resultsArray[0].classList.add('stackOrder');
        setTimeout(function() {
            resultsArray[0].classList.remove('stackOrder');
            console.log('remove stackOrder class');
        }, 1000);
        activeCharacterId = 0;
    }
}


function stopAllAudio() {
    var audio = document.getElementsByTagName('audio');
    for (i = 0; i < audio.length; i++) {
        audio[i].pause();
    }
}

function clearDisplay() {
    for (var i = 0; i < resultsArray.length; i++) {
        resultsArray[i].classList.remove('display');
    }
}
