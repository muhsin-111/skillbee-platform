// 1. WhatsApp Purchase Redirection
function buyCourse(courseName) {
    const phoneNumber = "917907287563"; 
    const message = `Hi SkillBee, I would like to enroll in the ${courseName} course. Please guide me with payment.`;
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}

// 2. Access Code Verification Logic
function verifyCode() {
    const enteredCode = document.getElementById('studentCode').value.trim().toUpperCase();
    
    // Valid codes you send to students after payment
    const validCodes = ["SB2026", "OFFICE79", "LEARN100", "SUCCESS22"];

    if (validCodes.includes(enteredCode)) {
        document.getElementById('videoArea').style.display = 'block';
        alert("Verification successful! Enjoy your class.");
        document.getElementById('videoArea').scrollIntoView();
    } else {
        alert("Invalid code. Please contact SkillBee office at 7907287563.");
    }
}