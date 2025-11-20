const loveLetters = [
    'I love you.',
    'I need you.',
    'Iky my love.',
    'You make me happy.',
    'You are my safe place.',
    'I miss you.',
    'I think about you all the time.',
    'My heart belongs to you.',
    'You are everything to me.',
    'I want you forever.',
    'You make my world brighter.',
    'You are my favorite person.',
    'I can’t stop loving you.',
    'You’re the best part of my day.',
    'You’re always on my mind.',
    'I adore you.',
    'You’re my sunshine.',
    'I’m grateful for you.',
    'You’re perfect to me.',
    'I choose you every day.',
    'You’re my reason to smile.',
    'You make life beautiful.',
    'I’m proud of you.',
    'I’m always with you.',
    'I love your mind.',
    'I love your voice.',
    'I love your smile.',
    'I love everything about you.',
    'You’re my favorite feeling.',
    'You are loved. Always.'
];

function updateLTitle() {
    document.getElementById('ltitle').innerHTML = loveLetters[Math.floor(Math.random() * 100) % loveLetters.length];
}

setInterval(updateLTitle, 5000)