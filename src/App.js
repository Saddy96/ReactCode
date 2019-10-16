import React, {Component} from 'react';
import { render} from 'react-dom';
import Profile from './Profile';
import './App.css';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import SplitterLayout from 'react-splitter-layout';


class App extends Component {
    
    constructor(props){
        super(props);
        this.state={
            data:[{
                name:"John",
                id:"123"
            },
            {
                name:"Doe",
                id:"3"
            }]
        }
        this.getProfile = this.getProfile.bind(this);
    }

    getProfile(name , id , index){
        console.log("Test",name,id);
        return (<div>
                <Profile name={name} id={id} index={index} />
            </div>);
    }

    render() {
        return(

            <SplitterLayout>
                

                <div>

                <div className = "bg-image">
                <h1>FIRST APP</h1>
                <div className = "app">


                    {/* <fieldset>
                        <legend>Add Task</legend>

                        <label>Title:
                        <input type="text" name = "title" required/>
                        </label> <br/>

                        <label>Description:
                            <input type="text" name = "task" required/>
                        </label> <br/>
<label>Items to buy:
                        <select value="Item">
                            <option value="Orange">Phone</option>
                            <option value="Radish">Fruits</option>
                            <option value="Cherry">Vegetables</option>
                        </select>

</label><br/>

                        <label>Date:
                            <input type="datetime-local" name = "title" required/>
                        </label> <br/>
                        <button type="submit">Add</button>
                    </fieldset> */} 
                {this.state.data.map((profile,index) => {
                    console.log("called");
                    return this.getProfile(profile.name,profile.id ,index);
                })}
                </div>
            </div>
                </div>
                
            </SplitterLayout>

            );
    }

} 

export default App;