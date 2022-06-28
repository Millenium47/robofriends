import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchflied: ''
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.cypress.io/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChanged = (event) => {
        this.setState({ searchflied: event.target.value })
    }

    render() {
        const {robots, searchflied } = this.state;
        const filterRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchflied.toLowerCase())
        })
        
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChanged={this.onSearchChanged}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;