var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");


Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(e){
       const up = e.target.dataset.up
       console.log(this.parentNode.parentNode.childNodes)
       const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[1].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'up': up,
            'thumbUp': thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(e){
    const down = e.target.dataset.down
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[1].innerText)
    fetch('thumbDown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'down': down,
        'thumbUp': thumbUp,
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true) 
    })
  });
});





Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(e){
        const trash = e.target.dataset.delete
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'trash': trash,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

