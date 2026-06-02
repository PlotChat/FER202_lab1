import { Component } from "react";
import catImg from "./assets/image.png";
import "./ProfileCard.css";

class ProfileCardClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: false,
            likeCount: 0,
            isLightMode: true
        };
    }

    render() {
        const { name, id, sClass, major, hobbies, status } = this.props;
        const { isOnline, likeCount, isLightMode } = this.state;

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
                        onClick={() => this.setState((prev) => ({ isOnline: !prev.isOnline }))}
                    >
                        {isOnline ? "Online" : "Offline"}
                    </button>
                </div>

                <div className="student__like">
                    <p>Click to Like: <span>{status}</span></p>
                    <button onClick={() => this.setState((prev) => ({ likeCount: prev.likeCount + 1 }))}>
                        Likes: {likeCount}
                    </button>
                </div>

                <div className="modeToggle">
                    Mode:
                    <button onClick={() => this.setState((prev) => ({ isLightMode: !prev.isLightMode }))}>
                        {isLightMode ? "Light" : "Dark"}
                    </button>
                </div>
            </div>
        );
    }
}

export default ProfileCardClass;