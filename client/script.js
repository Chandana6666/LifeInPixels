const memoryContainer = document.getElementById("memoryContainer");
async function loadMemories() {
    try {
        const response = await fetch("http://localhost:5000/api/memories");

        const result = await response.json();
        memoryCount.textContent = result.data.length;
memoryContainer.innerHTML = ""; 
const happyMemories = result.data.filter(memory =>
    memory.mood.includes("Happy")//only happy memories will be counted
);

happyCount.textContent = happyMemories.length;
result.data.forEach(memory => {
    memoryContainer.innerHTML += `
    <div class="memory-card">
        <h2>${memory.mood}</h2>
        <h3>${memory.title}</h3>
        <p>${memory.description}</p>
        <p>${memory.tags.join(" • ")}</p>
        <span>
         📆 ${new Date(memory.date).toDateString()}
        </span>
        <button class="delete-btn" onclick="deleteMemory('${memory._id}')">
    🗑 Delete
</button>
    </div>

    `;
 });

}

    catch(error){

        console.log(error);

    }

}
const happyCount = document.getElementById("happyCount");
const memoryCount = document.getElementById("memoryCount");
loadMemories();
const memoryForm = document.getElementById("memoryForm");

memoryForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const memory = {

        title: document.getElementById("title").value,

        description: document.getElementById("description").value,

        mood: document.getElementById("mood").value,

        tags: document
                .getElementById("tags")
                .value
                .split(",")
                .map(tag => tag.trim()),

        date: document.getElementById("date").value

    };

    try{

        await fetch("http://localhost:5000/api/memories",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(memory)

        });

        memoryForm.reset();

        loadMemories();

    }

    catch(error){

        console.log(error);

    }

});
async function deleteMemory(id){

    try{

        await fetch(`http://localhost:5000/api/memories/${id}`,{

            method:"DELETE"

        });

        loadMemories();

    }

    catch(error){

        console.log(error);

    }

}
    
const generateTitleBtn = document.getElementById("generateTitleBtn");

generateTitleBtn.addEventListener("click", async () => {
    const description = document.getElementById("description").value.trim();
    const titleInput = document.getElementById("title");

    if (!description) {
        alert("Write your memory description first!");
        return;
    }

    try {
        generateTitleBtn.disabled = true;
        generateTitleBtn.textContent = "✨ Generating...";

        const response = await fetch("http://localhost:5000/api/ai/title", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ description })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to generate title");
        }

        titleInput.value = data.title;
    } catch (error) {
        console.error("Title generation error:", error);
        alert("Couldn't generate a title. Please try again.");
    } finally {
        generateTitleBtn.disabled = false;
        generateTitleBtn.textContent = "✨ Generate Title with AI";
    }
});
