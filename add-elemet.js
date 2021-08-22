function setPlayerStyle(player){
    player.style.border='2px solid red';
    player.style.margin='12px';
    player.style.padding='20px';
    player.style.borderRadius='15px';

}

const players=document.getElementsByClassName('player');
for(const player of players){
    setPlayerStyle(player);
    // player.addEventListener('click', function(){
    //     player.style.backgroundColor='yellow';
    // })
    
};
function addPlayer() {
    const playersContainer=document.getElementById('players');
    const player=document.createElement('div');
    player.classList.add('player');
    console.log(player);
    player.innerHTML=`
    
        <h4 class="player-name">player - 1</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ducimus quia officia, sint necessitatibus officiis distinctio minus porro accusantium tempore.</p>
    
    `;
    
    playersContainer.appendChild(player);
    setPlayerStyle(player)
    // player.addEventListener('click', function(){
    //     player.style.backgroundColor='yellow';
    // })
}
document.getElementById('players').addEventListener('click', function(event){
    
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor='yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor='yellow';
    }

})