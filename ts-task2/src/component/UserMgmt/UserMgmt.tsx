import { useState } from "react";
import styles from "./UserMgmt.module.scss";
import "./userMgmt.scss";

type companyType = "Infosys" | "TCS";
type userType = {
  name: string;
  age: number;
  company: companyType;
};

const UserMgmt: React.FC<{
  isLogging: boolean;
}> = ({ isLogging }) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [company, setCompany] = useState<companyType>("Infosys");

  const userArr: userType[] = [
    {
      name: "Aman",
      age: 24,
      company: "Infosys",
    },
  ];

  const [userData, setUserData] = useState<userType[]>(userArr);

  const saveUserData = (): void => {
    console.log(name, age, company);
    // userArr.push({ name, age, company });
    // setUserData([{name, age, company}])
    const newArr: userType[] = [...userData, { name, age, company }];
    setUserData(newArr);
    console.log(userArr);
  };

  //   const classValue = isLogging ? styles.maincontainer : styles.maincontainer2;

//     const userArrData = userData.map((user) => {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Company</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {userData.map((user) => (
//                     <tr key={user.name}>
//                         <td>{user.name}</td>
//                         <td>{user.age}</td>
//                         <td>{user.company}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
//   });

    const userArrData = userData.map((user) => (
        <div className="user-data" key={user.name}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Company: {user.company}</p>
        </div>
    ));

//   const userArrData = userData.map((user) => {
//     return (
//       <div>
//         <p>Name: {user.name}</p>
//         <p>Age : {user.age}</p>
//         <p>Company : {user.company}</p>
//       </div>
//     );
//   });

  return (
    <div className="maincontainer">
        
        <h3>Enter your details</h3>
      <div className="indi-div">
        <label htmlFor="name" className="labels">
          Enter Name :
        </label>
        <div>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="inputs"
        />
        </div>
      </div>
      <div className="indi-div">
      <label htmlFor="age" className="labels">
        Enter Age : 
      </label>
      <div>
      <input
        type="number"
        id="age"
        name="age"
        value={age}
        onChange={(e) => setAge(parseFloat(e.target.value))}
        className="inputs"
      />
      </div>
      </div>
     <div className="indi-div">
     <label htmlFor="cmp" className="labels">
        Enter Company :
      </label>
     <div>
     <input
        type="text"
        name="company"
        value={company}
        onChange={(e) => {
          const newVal: any = e.target.value;
          setCompany(newVal);
        }}
        className="inputs"
      />
     </div>
     </div>
      <div className="save-btn-div">
      <button onClick={saveUserData} className="save-btn">Save Data</button>
      </div>
      <div className="data-disp">
        <p className="para">See your details here 👇</p>
        {userArrData}
        </div>
    </div>
  );
};

export default UserMgmt;
