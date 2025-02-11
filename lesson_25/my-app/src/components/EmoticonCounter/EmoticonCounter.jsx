import React from "react";
import "./EmoticonCounter.css";

export class EmoticonCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: JSON.parse(localStorage.getItem("votes")) || {
                joy: 0,
                happiness: 0,
                cool: 0,
                starsEyes: 0,
                lovingEyes: 0,
            },
            showResults: false,
        };
    }

    updateVotes(emoticon) {
        this.setState(
            (prevState) => {
                const updatedVotes = { ...prevState.votes, [emoticon]: prevState.votes[emoticon] + 1 };
                localStorage.setItem("votes", JSON.stringify(updatedVotes));
                return { votes: updatedVotes };
            }
        );
    }

    findTopEmoticon() {
        const { votes } = this.state;
        let maxVotes = Math.max(...Object.values(votes));
        let topEmoticon = Object.keys(votes).find((key) => votes[key] === maxVotes);

        return { topEmoticon, maxVotes };
    }

    showResults = () => {
        this.setState({ showResults: true });
    };

    clearResults = () => {
        localStorage.removeItem("votes");
        this.setState({ 
            votes: { joy: 0, happiness: 0, cool: 0, starsEyes: 0, lovingEyes: 0 },
            showResults: false,
        });
    };

    render() {
        const { votes, showResults } = this.state;
        const { topEmoticon, maxVotes } = this.findTopEmoticon();

        return (
            <>
                <h1>Голосуй за найкращий смайлик</h1>
                <div className="wrapper-emoji">
                    <div>
                        <button onClick={() => this.updateVotes("joy")} className="emojy">😄</button>
                        <p>{votes.joy}</p>
                    </div>
                    <div>
                        <button onClick={() => this.updateVotes("happiness")} className="emojy">😁</button>
                        <p>{votes.happiness}</p>
                    </div>
                    <div>
                        <button onClick={() => this.updateVotes("cool")} className="emojy">😎</button>
                        <p>{votes.cool}</p>
                    </div>
                    <div>
                        <button onClick={() => this.updateVotes("starsEyes")} className="emojy">🤩</button>
                        <p>{votes.starsEyes}</p>
                    </div>
                    <div>
                        <button onClick={() => this.updateVotes("lovingEyes")} className="emojy">😍</button>
                        <p>{votes.lovingEyes}</p>
                    </div>
                </div>
                <div className="display-flex-center">
                    <button onClick={this.showResults} className="btn-show-results btn btn-success btn-lg">Show Results</button>
                    <button onClick={this.clearResults} className="btn btn-danger btn-lg">Очистити результати</button>
                </div>

                {showResults && (
                    <>
                        <h2>Результат голосування:</h2>
                        <div className="display-flex-center">
                            {maxVotes > 0 ? (
                                <>
                                    <h3>Переможець: </h3>
                                    <div>
                                        {topEmoticon === "joy" && "😄"}
                                        {topEmoticon === "happiness" && "😁"}
                                        {topEmoticon === "cool" && "😎"}
                                        {topEmoticon === "starsEyes" && "🤩"}
                                        {topEmoticon === "lovingEyes" && "😍"}
                                    </div>
                                    <p>Кількість голосів: {maxVotes}</p>
                                </>
                            ) : (
                                <p>Немає голосів</p>
                            )}
                        </div>
                    </>
                )}
            </>
        );
    }
}