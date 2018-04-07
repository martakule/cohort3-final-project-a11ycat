import React, { Component } from 'react';
import { apiService } from '../../shared/services/api-service';
import { ListItemContainer } from '../list-item/list-item.container';
import { SearchBarContainer } from '../search-bar/search-bar.container';
import { AutoCompleteListContainer } from '../auto-complete-list/auto-complete-list.container';
import { Link } from 'react-router-dom';
import { Heading } from '../../ui-kit/heading';
import { List } from '../../ui-kit/list';

export class App extends Component {
  componentDidMount() {
    apiService
      .get('/someModels')
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.locationCall();
  }

  locationCall = async () => {
    await this.props.getLocation();
    this.props.fetchInitialPlaces(this.props.lat, this.props.lon);
  };

  render() {
    const { showAutoComplete, listLocations } = this.props;
    return (
      <div className="App">
        <SearchBarContainer />
        {showAutoComplete && <AutoCompleteListContainer />}
        <Heading> Nearby locations </Heading>
        <List>
          {listLocations.map((location, index) => (
            <ListItemContainer key={index} location={location} />
          ))}
        </List>
        <hr />
        <Link to="/map">Maps</Link>
      </div>
    );
  }
}
