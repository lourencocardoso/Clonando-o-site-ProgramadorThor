document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt(".animete",{
            speed: 200,
            loop: true
    }).type('Programador Web', {delay: 900}).delete(15).type('Beckend', {delay: 500})
    .go()
})
