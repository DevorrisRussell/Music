import React, {Component} from "react";
import Music from "./Music/Music";
import axios from "axios";
import NavBar from "./NavBar/NavBar";
import reactDom from "react-dom";
import Footer from "./Footer/Footer";
import Search from "./Search"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            music: [],
      };
    }

    
    componentDidMount() {
        this.musicPick();
    }

         
    

    async musicPick(){
        try {
            let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
                console.log(response.data);
                this.setState({
                    music: response.data,
                });
            
           
            }
         catch (error) {
            console.log(error);
        }
    
        
    }
    displaySearch(){
        alert("hello")
    }

render() {
  console.log(this.state);
    return (
        <div className="App">

        <NavBar/>
         <Music newMusic= {this.state.music}/>   

         <Footer/>
         <FilterSearch filterSearch={this.displaySearch}/>
         
        </div>
      
    )
}


}



export default App;
