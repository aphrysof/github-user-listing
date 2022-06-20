const fetchUserByusername = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}`)
  const data = await res.json()
  console.log(data)
}

export {fetchUserByusername}
