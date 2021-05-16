const div__body = document.createElement('div')

const para__box = document.createElement('p')
para__box.innerText = 'Deadline'

const input__box = document.createElement('input')
// input__box.setAttribute = ("value", 0)
input__box.value = 0



const button__box = document.createElement('button')

const print = document.createElement('button')
print.innerText = 'print'
print.onclick = function(){
  var p__tag = document.createElement('p')
  p__tag.innerText = input__box.value
  console.log(p__tag)

  div__body.append(p__tag)
}

button__box.innerText = 'reset'



button__box.onclick = function(){
          input__box.value = ''
}


div__body.append(para__box,input__box,button__box,print)

document.body.append(div__body)
