
function recommend() {

    let skin = document.getElementById("skinType").value;
    let result = document.getElementById("result");

    if (skin === "oily") {
        result.innerHTML =
        "Your skin type is Oily! ♡<br>" +
        "Recommended: Gentle cleanser, oil-free moisturizer, and sunscreen.";

    } else if (skin === "dry") {
        result.innerHTML =
        "Your skin type is Dry! ♡<br>" +
        "Recommended: Hydrating cleanser, rich moisturizer, and sunscreen.";

    } else if (skin === "combination") {
        result.innerHTML =
        "Your skin type is Combination! ♡<br>" +
        "Recommended: Gentle cleanser, lightweight moisturizer, and sunscreen.";

    } else if (skin === "sensitive") {
        result.innerHTML =
        "Your skin type is Sensitive! ♡<br>" +
        "Recommended: Fragrance-free gentle cleanser, moisturizer, and sunscreen.";

    } else {
        result.innerHTML =
        "Please select your skin type first! ♡";
    }
}
