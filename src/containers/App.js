import React, {useEffect, useState} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

export default function App() {
    const [robots, setRobots] = useState([]);
    const [searchflied, setSearchflied] = useState('');
    
    useEffect(()=> {
        fetch('https://jsonplaceholder.cypress.io/users')
            .then(response => response.json())
            .then(users => this.setRobots(users));
    }, [])

    const onSearchChanged = (event) => {
        setSearchflied(event.target.value)
    }

    const filterRobots = robots.filter( robot => {
        return robot.name.toLowerCase().includes(searchflied.toLowerCase())
    });
        
    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChanged={onSearchChanged}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filterRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}
