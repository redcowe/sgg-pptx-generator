import pptxgen from "pptxgenjs";
import { encode, toASCII } from "punycode";


async function downloadGIF() {
    
}
// 1. Create a Presentation
let pres = new pptxgen();


//getting kanji and the gif associated with it
const kanji = "奏"
const input = kanji.charCodeAt(0).toString(16).toLowerCase()
const gif_path = `http://img.kakijun.com/kanjiphoto/gif/${input}.gif `



// 2. Add a Slide to the presentation
let slide = pres.addSlide();



console.log(input);

// 3. Add 1+ objects (Tables, Shapes, etc.) to the Slide
slide.addImage({path: gif_path})

const second_slide = pres.addSlide();

second_slide.addText("Slide two from PptxGenJS...", {
    x: 1.5,
    y: 1.5,
    color: "363636",
    fill: { color: "F1F1F1" },
    align: pres.AlignH.center,
});
// 4. Save the Presentation
pres.writeFile({ fileName: "test-presentaion.pptx" });