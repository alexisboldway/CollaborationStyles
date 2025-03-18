document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Initialize scores for each collaboration style.
    const scores = {
      1: 0, // Assertive Collaborator
      2: 0, // Passive Participant
      3: 0, // Conflict Avoidant
      4: 0  // Direct Problem-Solver
    };
  
    // Collect answers from the form.
    const formData = new FormData(this);
    for (let answer of formData.values()) {
      scores[Number(answer)]++;
    }
  
    // Determine which style has the highest score.
    let highestScore = 0;
    let selectedStyle = null;
    for (const style in scores) {
      if (scores[style] > highestScore) {
        highestScore = scores[style];
        selectedStyle = style;
      }
    }
  
    // Map numeric style to descriptive text.
    const styleMap = {
      1: "Assertive Collaborator",
      2: "Passive Participant",
      3: "Conflict Avoidant",
      4: "Direct Problem-Solver"
    };
  
    // Show the result in the #result div.
    document.getElementById('result').textContent =
      "Your collaboration style is: " + styleMap[selectedStyle];
  });
  