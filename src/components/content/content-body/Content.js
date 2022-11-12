import React from 'react';

import Profile from './profile/Profile';
import Wall from './Wall';
import SearchResultsWrap from './search-results/SearchResultsWrap';
import '../../../styles/content.css';
import { layoutTypes } from '../../../globalConstants';
import { contentContext } from '../../../contexts';

const Content = (props) => {
    //console.log('content');

    let layoutBasedComponent;
    switch (props.content_props.layout_type){
        case layoutTypes.both:
            layoutBasedComponent = <>
                <Profile />
                <Wall wall_width={ props.content_props.wall_width } />
            </>;
            break;
        case layoutTypes.profile:
            layoutBasedComponent = <Profile />;
            break;
        case layoutTypes.post:
            layoutBasedComponent = <Wall wall_width={ props.content_props.wall_width } />;
            break;
        case layoutTypes.search:
            layoutBasedComponent = <SearchResultsWrap search_results_width={ props.content_props.search_results_width } />;
            break;
    }

    return (
        <div id="Content" className="d-flex w-100">
            <contentContext.Provider value={ {
                enable_settings: props.content_props.layout_type != layoutTypes.both,
                another_profile: props.content_props.another_profile
            } }>
            {
                layoutBasedComponent
            }
            </contentContext.Provider>
        </div>
    )
}

export default Content;