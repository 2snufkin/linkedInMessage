function generateEmail() {
  const language = document.querySelector('input[name="language"]:checked').value;
  const recruiterName = document.getElementById('recruiterName').value;
  const yourName = "Pinhas";
  const companyName = document.getElementById('companyName').value;
  const role = document.getElementById('role').value;

  const emailTemplate = language === 'english' ?
    `Hello ${recruiterName},\n\nMy name is ${yourName}, and I would like to reach out to express my interest in potential opportunities within ${companyName}. I have come across your company and am intrigued by the innovative work you are doing in the industry.\n\nI firmly believe that my skills, professional background, and constant thirst for learning align well with the core values of ${companyName}. May I send you my resume so that you can determine if my profile matches your expectations?\n\nI rely on your experience in the role of ${role} and on your judgment.\n\nBest regards, ${yourName}`
    :
    `Bonjour ${recruiterName},\n\nJe m'appelle ${yourName}, et je souhaite vous contacter pour exprimer mon intérêt pour d'éventuelles opportunités au sein de ${companyName}.\n\nJe suis fermement convaincu que mes compétences, mon parcours professionnel et ma soif constante d'apprentissage sont en adéquation avec les valeurs fondamentales de ${companyName}. Puis-je vous envoyer mon CV afin que vous puissiez déterminer si mon profil correspond à vos attentes?\n\nJe compte sur votre expérience en tant que ${role} et sur votre jugement.\n\nCordialement, ${yourName}`;

  document.getElementById('output').value = emailTemplate;
}

function copyToClipboard() {
  const outputTextarea = document.getElementById('output');
  outputTextarea.select();
  document.execCommand('copy');
  alert('Text copied to clipboard!');
}
