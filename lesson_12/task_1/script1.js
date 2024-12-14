let addLink = document.getElementById('addLink');

addLink.addEventListener('click', () => {
    
    function goLink() {
        let link = prompt('Enter your Link', '');
        if (!link) {
            alert('URL is undefind, please enter try again.')
            return goLink();
        } else {
            let btn = document.createElement('button');
    
            btn.innerText = 'Go to Link';
            document.body.append(btn);
        
            btn.onclick = () => {
                location.href = link;
            };
        };
    }
    goLink();
});