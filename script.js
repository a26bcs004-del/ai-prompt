
/* ===== Get HTML Elements ===== */

const roleInput = document.getElementById("role");
const taskInput = document.getElementById("task");
const contextInput = document.getElementById("context");
const constraintsInput = document.getElementById("constraints");
const formatInput = document.getElementById("format");

const generateBtn = document.getElementById("generateBtn");
const sampleBtn = document.getElementById("sampleBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

const outputBox = document.getElementById("output");


/* ===== Generate Prompt ===== */

generateBtn.addEventListener("click", function () {

    const role = roleInput.value.trim();
    const task = taskInput.value.trim();
    const context = contextInput.value.trim();
    const constraints = constraintsInput.value.trim();
    const format = formatInput.value.trim();

    // Task is required
    if (!task) {
        alert("Please enter a task before generating the prompt.");
        taskInput.focus();
        return;
    }

    // Create the prompt
    let prompt = "";

    if (role) {
        prompt += `Role:\n${role}\n\n`;
    }

    prompt += `Task:\n${task}\n\n`;

    if (context) {
        prompt += `Context:\n${context}\n\n`;
    }

    if (constraints) {
        prompt += `Constraints:\n${constraints}\n\n`;
    }

    if (format) {
        prompt += `Output Format:\n${format}\n\n`;
    }

    prompt += "Please provide a clear, accurate, and well-organized response.";

    // Display the generated prompt
    outputBox.textContent = prompt;

});


/* ===== Sample Prompt ===== */

sampleBtn.addEventListener("click", function () {

    roleInput.value = "Act as an experienced Data Science teacher";

    taskInput.value = "Explain Machine Learning to a beginner.";

    contextInput.value =
        "I am a college student learning Data Science. " +
        "I have basic programming knowledge but no experience with Machine Learning.";

    constraintsInput.value =
        "Use simple English, explain step by step, " +
        "include real-world examples, and avoid complicated technical terms.";

    formatInput.value =
        "Introduction, key concepts, real-world examples, " +
        "advantages, and a short summary.";

    // Automatically generate the sample prompt
    generateBtn.click();

});


/* ===== Clear All Fields ===== */

clearBtn.addEventListener("click", function () {

    roleInput.value = "";
    taskInput.value = "";
    contextInput.value = "";
    constraintsInput.value = "";
    formatInput.value = "";

    outputBox.innerHTML =
        '<p class="placeholder">Your generated prompt will appear here...</p>';

});


/* ===== Copy Prompt ===== */

copyBtn.addEventListener("click", async function () {

    const prompt = outputBox.innerText.trim();

    // Check if prompt is available
    if (!prompt || prompt === "Your generated prompt will appear here...") {
        alert("Please generate a prompt before copying.");
        return;
    }

    try {
        await navigator.clipboard.writeText(prompt);

        copyBtn.textContent = "✅ Copied!";

        setTimeout(function () {
            copyBtn.textContent = "📋 Copy Prompt";
        }, 2000);

    } catch (error) {
        alert("Unable to copy. Please select and copy the prompt manually.");
    }

});
