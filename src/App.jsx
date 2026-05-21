import ProfileCard from "./ProfileCard";

const App = () => {
	const student = {name: "Viet Anh", age: 20, id: "AnhLVHE200455", sClass:"SE2004", major:"Software Engineering", hobbies:["Games", "Music", "Cooking"]};
	const {name, age, id, sClass, major, hobbies} = student;

	return (
		<ProfileCard
			name={name}
			age={age}
			id={id}
			sClass={sClass}
			major={major}
      		hobbies={hobbies}
		></ProfileCard>
	);
};

export default App;
