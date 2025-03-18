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
  
    // Determine the style with the highest score.
    let highestScore = 0;
    let selectedStyle;
    for (const style in scores) {
      if (scores[style] > highestScore) {
        highestScore = scores[style];
        selectedStyle = style;
      }
    }
  
    // Map the score to a descriptive style.
    const styleMap = {
      1: "Assertive Collaborator",
      2: "Passive Participant",
      3: "Conflict Avoidant",
      4: "Direct Problem-Solver"
    };
  
    // Display the result.
    document.getElementById('result').textContent = "Your collaboration style is: " + styleMap[selectedStyle];
  });
  