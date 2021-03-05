import React, { Component } from 'react';
import ContentZone from 'components/agility-global/ContentZone'

class OneColumnTemplate extends Component {
    render() {
        return (
        <div className="one-column-template">
            <ContentZone name='SubContentZone' {...this.props} />
        </div>
        );
    }
}

export default OneColumnTemplate;