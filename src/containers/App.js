import "./App.css";
import React, {Component} from "react";
import CardList from "../components/cardList.js";
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import {setSearchField, requestRobots} from "../actions.js";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
};

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }


    render() {

        const {searchField, onSearchChange, robots, isPending,} = this.props;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return isPending ?
            <h1>Loading...</h1> :
            (
                <div className="tc">
                    <div>
                        <h1>RoboFriends</h1>
                        <SearchBox searchChange={onSearchChange}/>
                    </div>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
