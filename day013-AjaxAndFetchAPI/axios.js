// LOAD ALL USERS

const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

async function getUsers(e) {
  e.preventDefault();

  // 느낌 있게 구조분해로 받음
  const { data } = await axios.get("./userinfo/users.json");

  console.log(data);

  rendering(data);
}

// 렌더링용 함수로 분리함
function rendering(data) {
  let output = "";
  data.forEach((user) => {
    // 문자열끼리 계속 더한 것을 innerHTML로 밀어넣음
    output += `
                <hr>
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Age: ${user.age}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `;
  });

  document.getElementById("users").innerHTML = output;
}
