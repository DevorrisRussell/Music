import axios from "axios";
import React, {useEffect, useState} from "react";


const FilterSearch = (props) => {
    state = {
        idSong: "",
        artistSong: "",
        genreSong: "",
        releaseDataSong: "",

    }
    handleChange = (event) => {
        this.setState ({

        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render(){
    return(
        <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Example label</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
              </input>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Another label</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
        </input>
        </div>
      </form>
     ); }}

     export default FilterSearch;
