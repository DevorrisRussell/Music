import React, {Component} from "react";
import MusicFinder from "./Music/MusicFinder";
import axios from "axios";
import NavBar from "./NavBar/NavBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.songPick();
    }

    async songPick(){
        try {
            let reponse = await axios.get("http://www.devcodecampmusiclibrary.com/api/music")
            console.log(reponse)
        } catch (error) {
            console.log(error)
        }
    }
render() {
    return (
        <div className="container-fluid">
            <title/>
            
        </div>
    )
}


}



export default App;
