import { useState } from "react";

const FirstInput = () => {
  const initialstate = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialstate);
  const [userdetail, setuserdetail] = useState([]);
  console.log(data, "data");
  console.log(userdetail, "userdetail");

  const Handelchange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setData({
      ...data,
      [name]: value,
    });
  };
  const Handelsubmit = (event) => {
    event.preventDefault();
    console.log(data, 123);
    setuserdetail([...userdetail, data]);
  };
  const { name, email, password } = data;
  return (
    <>
      <form onSubmit={Handelsubmit}>
        <h1>ragistration form</h1>
        <div>
          <input
            name="name"
            type="text"
            value={name}
            placeholder="enter your name"
            onChange={Handelchange}
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            value={email}
            placeholder="enter your email"
            onChange={Handelchange}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            value={password}
            placeholder="enter your password"
            onChange={Handelchange}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>password</th>
          </tr>
          {userdetail?.map((value, i) => (
            <tr key={i}>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
export default FirstInput;
