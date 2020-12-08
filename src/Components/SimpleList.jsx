import React from 'react';

class SimpleList extends React.Component {
    render() {
        return (
            <div>
                {this.props.booksToRead.map((b, index) => (
                    <div key={index}>{b.title}</div>
                  ))}
            </div>
        )
    }
}
export default SimpleList