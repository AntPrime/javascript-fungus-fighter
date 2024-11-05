// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
onReady()
// putting HP and AP into an object
let currentState =[
    {type: "player", ap: 100}
    {type: "enemy", hp: 100}
];

const attacks = [
    {type: "arcame-scepter" , apCost: 20, hpDamage: 30}
    {type: "entangle" , apCost: 20, hpDamage: 30}
    {type: "dragon-blade" , apCost: 20, hpDamage: 30}
    {type: "star-fire" , apCost: 20, hpDamage: 30}
]

