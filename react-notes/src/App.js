import React, { Component } from 'react';
import './App.css';

//Components
import Activity from './Activity/Activity';
import Header from './Header/header';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      Activities: [
        {activityId: 1, activityTitle: 'Title 1', activityDescription: 'Nota 1'},
        {activityId: 2, activityTitle: 'Title 2', activityDescription: 'Nota 2'},
        {activityId: 3, activityTitle: 'Title 3', activityDescription: 'Nota 3'},
        {activityId: 4, activityTitle: 'Title 4', activityDescription: 'Nota 4'}
      ]
    };
  }
  
  render() {
    return (
      <div>
        <Header 
          headerTitle='Liceo CIEI'
          imgPath='http://www.liceociei.edu.uy/img/logo_ciei.png'

        />

          <div id='activities'className="activitysBody mt-4">
          <ul className="list-group">
          {
              this.state.Activities.map(activity => {
                  return (
                    <Activity 
                      activityDescription={activity.activityDescription}
                      activityTitle={activity.activityTitle}
                      activityId={activity.activityId}
                      key={activity.activityId} 
                    />
                    
                  )
              })

            }
          </ul>
          

          </div>      

          <div className="activitysFooter">

          </div>
      </div>
      
    );
  }
}

export default App;
