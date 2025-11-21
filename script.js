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

const signatures = [
    'Nani ♥',
    'Jonny ♥',
    'Jonathan ♥',
    'JRFB ♥',
    'O amor da sua vida ♥'
]

function updateLTitle() {
    document.getElementById('ltitle').innerHTML = loveLetters[Math.floor(Math.random() * 100) % loveLetters.length];
    document.getElementById('lsignature').innerHTML = signatures[Math.floor(Math.random() * 100) % signatures.length];
}

setInterval(updateLTitle, 5000)



function getTimePassed() {
    // The exact moment you gave:
    const start = new Date("2022-10-03T22:00:00");
    const now = new Date();

    let diff = Math.floor((now - start) / 1000); // difference in seconds

    const years = Math.floor(diff / (3600 * 24 * 365));
    diff -= years * 3600 * 24 * 365;

    const months = Math.floor(diff / (3600 * 24 * 30.4375)); 
    diff -= Math.floor(months * 3600 * 24 * 30.4375);

    const days = Math.floor(diff / (3600 * 24));
    diff -= days * 3600 * 24;

    const hours = Math.floor(diff / 3600);
    diff -= hours * 3600;

    const minutes = Math.floor(diff / 60);
    diff -= minutes * 60;

    const seconds = diff;

    document.getElementById('timer').innerHTML = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
};

setInterval(getTimePassed, 1000)