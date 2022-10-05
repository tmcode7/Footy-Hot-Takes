const deleteBtn = document.querySelectorAll('.del')
const takeLike = document.querySelectorAll('span.likes')
const takeDislike = document.querySelectorAll('span.dislikes')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTake)
})

Array.from(takeLike).forEach((el)=>{
    el.addEventListener('click', likeTake)
})

Array.from(takeDislike).forEach((el)=>{
    el.addEventListener('click', dislikeTake)
})

async function deleteTake(){
    const takeId = this.parentNode.dataset.id
    try{
        const response = await fetch('takes/deleteTakes', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'takeIdFromJSFile': takeId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function likeTake(){
   
    const takeId = Number(this.parentNode.dataset.id)
    console.log('liked')
    
    try{
        const response = await fetch('takes/likeTake', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'takeIdFromJSFile': takeId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}


async function dislikeTake(){
    const takeId = this.parentNode.dataset.id
    try{
        const response = await fetch('takes/dislikeTake', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'takeIdFromJSFile': takeId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}