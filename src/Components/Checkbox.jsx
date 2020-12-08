import React from 'react';
// import BooksIWantToRead from './BooksIWantToRead';

class Checkbox extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {onChange, checked} = this.props;
        return (
            <div>
                <input type="checkbox" onChange={onChange} checked={checked}/>
                <span className="checkbox-select">Read this</span>
            </div>
        )
    }
}

export default Checkbox;
