// 1. WhatsApp Order Function
function orderWhatsApp(perfumeName) {
    const phoneNumber = "923406492802";
    const message = `Hello YM PERFUME, I would like to order: ${perfumeName}. Please provide details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// 2. EasyPaisa Payment Function
function payEasyPaisa() {
    const number = "03406492802";
    // Copy to clipboard
    navigator.clipboard.writeText(number).then(() => {
        alert("EasyPaisa Number (03406492802) copied to clipboard!\n\nPlease send the payment and share the screenshot on WhatsApp.");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// 3. Reveal Animation on Scroll
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Event Listeners
window.addEventListener("scroll", reveal);

// Run once on load to show elements already in view
window.onload = reveal;
