const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`


const func = async () => {
  const response = await window.versions.ping()
  const info2 = document.getElementById('info2')
  info2.innerText = `ping response is: ${response}`

}

func()