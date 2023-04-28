import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>

`;
const api_url = "https://jsonplaceholder.typicode.com/users";
async function getapi(url) {
  const response = await fetch(url);
  const result = await response.json();
  console.warn(result);

  document.getElementById("userData").innerHTML = result
    .map(
      (user) =>
        `<tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>
        <td>${user.website}</td>
        <td>${user.phone}</td>
    </tr>`
    )
    .join("");
}
getapi(api_url);
