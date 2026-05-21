import { useState } from "react";
import catImg from "./assets/image.png";
import "./ProfileCard.css";

const ProfileCard = ({ name, id, sClass, major, hobbies, status }) => {
	const [isOnline, setIsOnline] = useState(false);
	const [likeCount, setLikeCount] = useState(0);
	const [isLightMode, setIsLightMode] = useState(true);

	return (
		<div className="student">
			<div className="student__info">
				<img src={catImg}></img>
				<h4>Full name: {name}</h4>
				<h4>Student ID: {id}</h4>
				<h4>Class name: {sClass}</h4>
				<h4>Major: {major}</h4>
			</div>
			<div className="student__hobbies">
				<div className="student__hobbies-title">
					<h3>My Hobbies</h3>
				</div>
				<div className="student__hobbies-wrapper">
					<ul>
						{hobbies ? (
							hobbies.map((h, index) => (
								<li key={index} className="student__hobbies-item">
									<p>{h}</p>
								</li>
							))
						) : (
							<p>I have no hobbies!</p>
						)}
					</ul>
				</div>
			</div>

			<div className="student__status">
				<p>Status: <span>{status}</span></p>
				<button
					data-status={isOnline ? "Online" : "Offline"}
					onClick={() => setIsOnline(!isOnline)}
				>
					{isOnline ? "Online" : "Offline"}
				</button>
			</div>

			<div className="student__like">
				<p>Click to Like: <span>{status}</span></p>
				<button onClick={() => setLikeCount((prev) => prev + 1)}>
					Likes: {likeCount}
				</button>
			</div>

			<div className="modeToggle">
				Mode:
				<button onClick={() => setIsLightMode(!isLightMode)}>{isLightMode ? "Light" : "Dark"}</button>
			</div>
		</div>
	);
};

export default ProfileCard;
