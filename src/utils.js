import { colorDark, colorLight, modeDark } from "./constants";

const getModeColor = (mode, invert, darkColor=colorDark, lightColor=colorLight)=>{
    let modeColor = mode === modeDark ? darkColor : lightColor;

    if (invert){
        modeColor = modeColor === darkColor ? lightColor : darkColor;
    }

    return modeColor;
}

const getModeTextColor = (mode)=>{
    return getModeColor(mode, true, "black", "#F8F9FA");
}

const getTitleCase = (text)=>{
    let givenText = text.toLowerCase();
    let wordList = givenText.split(/\s+/);

    for (let i = 0; i < wordList.length; i++) {
      wordList[i] = wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1);
    }
    
    return wordList.join(" ");
}

export {getModeColor, getModeTextColor, getTitleCase};