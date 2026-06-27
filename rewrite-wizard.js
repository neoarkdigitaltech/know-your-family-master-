const fs = require('fs');

let html = fs.readFileSync('data-sheet.html', 'utf8');

// 1. Update CSS
const newCSS = `
        /* Wizard Form Styles */
        .ds-page-body {
            background: linear-gradient(135deg, #f2f3f8 0%, #fef8f3 100%);
            padding: 4rem 2rem 6rem;
            position: relative;
        }

        .ds-progress {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 800px;
            margin: 0 auto 4rem;
            position: relative;
        }

        .ds-progress::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 5%;
            right: 5%;
            height: 1px;
            background: #cbd0d6;
            z-index: 1;
        }

        .ds-progress-step {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            position: relative;
            z-index: 2;
            /* Use a solid color or gradient to hide the line behind it? */
            /* Since background is gradient, we use a radial gradient or solid near white */
            background: #f8f6f5; 
            padding: 0 15px;
            border-radius: 20px;
        }

        .ds-progress-dot {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 1px solid #a0aab2;
            color: #a0aab2;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.85rem;
            font-weight: 600;
            background: transparent;
        }

        .ds-progress-label {
            font-size: 0.85rem;
            font-weight: 600;
            color: #a0aab2;
        }

        .ds-progress-step.active .ds-progress-dot {
            border-color: #4b3c9b;
            color: #4b3c9b;
        }

        .ds-progress-step.active .ds-progress-label {
            color: #4b3c9b;
        }

        .ds-form-card {
            max-width: 960px;
            margin: 0 auto;
            position: relative;
            background: transparent;
            box-shadow: none;
        }

        .ds-form-card::before, .ds-form-card::after { display: none; }
        .ds-form-inner { padding: 0; }

        .ds-field-label {
            display: block;
            font-family: 'Outfit', sans-serif;
            font-size: 0.8rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 0.4rem;
        }

        .ds-input, .ds-select, .ds-textarea {
            width: 100%;
            background: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 6px;
            color: #333;
            font-family: 'Outfit', sans-serif;
            font-size: 0.95rem;
            padding: 0.85rem 1rem;
            transition: all 0.3s ease;
        }

        .ds-input:focus, .ds-select:focus, .ds-textarea:focus {
            outline: none;
            border-color: #4b3c9b;
            box-shadow: 0 0 0 2px rgba(75, 60, 155, 0.1);
        }

        .wizard-step {
            display: none;
            animation: fadeIn 0.4s ease;
        }
        .wizard-step.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .wizard-nav {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 3rem;
        }

        .wizard-btn {
            background: #4b3c9b;
            color: white;
            padding: 0.75rem 2.5rem;
            font-family: 'Outfit', sans-serif;
            font-size: 1rem;
            font-weight: 500;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        .wizard-btn:hover { background: #3a2e7c; }
        .wizard-btn.btn-prev { background: #e0e0e0; color: #333; }
        .wizard-btn.btn-prev:hover { background: #d0d0d0; }
`;

// Replace CSS block
// The CSS is currently defined between <style> and </head>.
// Let's replace the .ds-page-body to .ds-form-inner and .ds-field and .ds-input
const styleStart = html.indexOf('<style>');
const styleEnd = html.indexOf('</style>');
if (styleStart !== -1 && styleEnd !== -1) {
    let styleBlock = html.substring(styleStart, styleEnd);
    
    // Replace everything from .ds-page-body { to the end of .ds-submit-note {
    const pageBodyStart = styleBlock.indexOf('.ds-page-body {');
    const submitNoteEnd = styleBlock.indexOf('.ds-submit-note {');
    if (pageBodyStart !== -1 && submitNoteEnd !== -1) {
        const nextClosing = styleBlock.indexOf('}', submitNoteEnd) + 1;
        styleBlock = styleBlock.substring(0, pageBodyStart) + newCSS + styleBlock.substring(nextClosing);
        html = html.substring(0, styleStart) + styleBlock + html.substring(styleEnd);
    }
}

// 2. Rewrite Progress Bar
const newProgressHTML = `
        <div class="ds-progress">
            <div class="ds-progress-step active" id="step-nav-1">
                <div class="ds-progress-dot">1</div>
                <span class="ds-progress-label">Personal Info</span>
            </div>
            <div class="ds-progress-step" id="step-nav-2">
                <div class="ds-progress-dot">2</div>
                <span class="ds-progress-label">Ancestry</span>
            </div>
            <div class="ds-progress-step" id="step-nav-3">
                <div class="ds-progress-dot">3</div>
                <span class="ds-progress-label">Migration</span>
            </div>
            <div class="ds-progress-step" id="step-nav-4">
                <div class="ds-progress-dot">4</div>
                <span class="ds-progress-label">Education</span>
            </div>
            <div class="ds-progress-step" id="step-nav-5">
                <div class="ds-progress-dot">5</div>
                <span class="ds-progress-label">Declaration</span>
            </div>
        </div>
`;

const progStart = html.indexOf('<!-- Progress Steps -->');
const progEnd = html.indexOf('<!-- ═══ FORM ═══ -->');
if (progStart !== -1 && progEnd !== -1) {
    html = html.substring(0, progStart) + '<!-- Progress Steps -->\n' + newProgressHTML + '\n        ' + html.substring(progEnd);
}

// 3. Convert Accordion to Wizard Steps
// Remove <div class="ds-accordion"> and </div> <!-- End of ds-accordion container -->
html = html.replace(/<div class="ds-accordion">/, '');
html = html.replace(/<\/div>\s*<!-- End of ds-accordion container -->/, '');

// Replace accordion items with wizard steps
// We have 5 sections: <div class="ds-accordion-item">
let stepIndex = 1;
html = html.replace(/<div class="ds-accordion-item">/g, (match) => {
    let cl = stepIndex === 1 ? 'wizard-step active' : 'wizard-step';
    let id = `wizard-step-${stepIndex}`;
    stepIndex++;
    return `<div class="${cl}" id="${id}">`;
});

// Remove accordion headers completely
html = html.replace(/<div class="ds-accordion-header[^>]*>[\s\S]*?<\/div>/g, '');

// Remove <div class="ds-accordion-content"[^>]*>
html = html.replace(/<div class="ds-accordion-content"[^>]*>/g, '<div class="wizard-content">');

// 4. Update the Submit Section and add Next/Prev buttons
// Instead of one submit button at the end, the buttons should be controlled by JS.
const newButtonsHTML = `
                    <!-- Wizard Navigation -->
                    <div class="wizard-nav">
                        <button type="button" class="wizard-btn btn-prev" id="btn-prev" style="display: none;" onclick="prevStep()">Previous</button>
                        <button type="button" class="wizard-btn" id="btn-next" onclick="nextStep()">Next</button>
                        <button type="submit" class="wizard-btn" id="btn-submit" style="display: none;">Submit</button>
                    </div>
`;

const submitStart = html.indexOf('<!-- Submit -->');
const submitEnd = html.indexOf('</form>');
if (submitStart !== -1 && submitEnd !== -1) {
    html = html.substring(0, submitStart) + newButtonsHTML + '\n                ' + html.substring(submitEnd);
}

// 5. Update JS logic
const scriptStart = html.indexOf('// Scroll-based progress indicator');
const scriptEnd = html.indexOf('</script>', scriptStart);
if (scriptStart !== -1 && scriptEnd !== -1) {
    const newJS = `
        // Wizard Logic
        let currentStep = 1;
        const totalSteps = 5;

        function updateWizardUI() {
            // Hide all steps
            document.querySelectorAll('.wizard-step').forEach(step => step.classList.remove('active'));
            // Show current step
            document.getElementById('wizard-step-' + currentStep).classList.add('active');

            // Update Progress Bar
            document.querySelectorAll('.ds-progress-step').forEach((step, index) => {
                if (index + 1 === currentStep) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });

            // Update Buttons
            const btnPrev = document.getElementById('btn-prev');
            const btnNext = document.getElementById('btn-next');
            const btnSubmit = document.getElementById('btn-submit');

            if (currentStep === 1) {
                btnPrev.style.display = 'none';
            } else {
                btnPrev.style.display = 'block';
            }

            if (currentStep === totalSteps) {
                btnNext.style.display = 'none';
                btnSubmit.style.display = 'block';
            } else {
                btnNext.style.display = 'block';
                btnSubmit.style.display = 'none';
            }
        }

        function nextStep() {
            if (currentStep < totalSteps) {
                currentStep++;
                updateWizardUI();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function prevStep() {
            if (currentStep > 1) {
                currentStep--;
                updateWizardUI();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Initialize UI
        updateWizardUI();
    `;
    html = html.substring(0, scriptStart) + newJS + '\n    ' + html.substring(scriptEnd);
}

// Remove the inline numbers from labels since the wizard has numbers at top, but actually the fields still have numbering like "1. Full Name".
// The new screenshot shows "First Name*" without numbers.
// Let's remove the numbering from the labels using regex.
// Regex looks for "number. " at the start of the label text.
html = html.replace(/<label class="ds-field-label">\d+\.\s*(.*?)<\/label>/g, '<label class="ds-field-label">$1</label>');

fs.writeFileSync('data-sheet.html', html);
console.log('Script completed');
