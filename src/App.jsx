import "./App.css";
import Grandpa from "./components/Grandpa";
import LayOutComponent from "./components/LayOutComponent";
// import HookForm from "./components/HookForm";
// import RefForm from "./components/RefForm";
// import ReusableForm from "./components/ReusableForm";
// import Simple_form from "./components/Simple_form";
// import StateFull from "./components/StateFull";

function App() {
  // const handleSingUp = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.name.value, e.target.email.value, e.target.pass.value)
  // };
  // const handleUpdateProfile = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.name.value, e.target.email.value, e.target.pass.value)
  // };

  return (
    <>
      <h1>Form Master</h1>
      {/* <Simple_form></Simple_form> */}
      {/* <StateFull></StateFull> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        title={"Sign Up"}
        handleSubmit={handleSingUp}
        submitText="Submit"
      >
        <div>
          <h1>Sign Up please</h1>
        </div>
      </ReusableForm>
      <ReusableForm
        title={"Update Profile"}
        handleSubmit={handleUpdateProfile}
        submitText="Update"
      >
        <div>
          <h1>Update your profile</h1>
        </div>
      </ReusableForm> */}
      {/* <Grandpa></Grandpa> */}
      <LayOutComponent></LayOutComponent>
    </>
  );
}

export default App;
