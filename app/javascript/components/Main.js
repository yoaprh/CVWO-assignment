import React, { useState } from "react"
import "../../assets/stylesheets/application.css"
import Body from "./Body.js";
import Search from "./Search.js"
class Main extends React.Component {

  render() {

    return (
      <React.Fragment>
        <h1>Tasks</h1>
        <Search /> <button onClick={this.SearchTags}>Filter</button>
        <div className="tasks">
          <style dangerouslySetInnerHTML={{
            __html: `
            .tasks {width: 25%; float: right;} 
          `}} />
          <div className="panel panel-primary">
            <div className="panel-heading">
              <span className="glyphicon glyphicon-comment"></span>
              <ol id="ListofTasks" className="list-group">
                <Body />
                <style dangerouslySetInnerHTML={{
                  __html: `
                  .list-group {overflow: auto;
             height: 100 %; word- wrap: break-word;}
      `}} />
              </ol>
              <div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment >
    );
  }


  SearchTags() {
    var input, filter, ol, li, a, i, x, tagslist, tags, txtValue, match;
    input = document.getElementById('searchBox');
    filter = input.value.toUpperCase();
    ol = document.getElementById("ListofTasks");
    tagslist = document.getElementById("tagsList");
    tags = tagslist.getElementsByTagName('li');
    li = ol.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      match = (txtValue.toUpperCase().indexOf(filter) > -1)
      for (x = 0; x < tags.length; x++) {
        match = (match && (txtValue.toUpperCase().indexOf(tags[x].textContent.toUpperCase()) > -1))
      }
      if (match) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

}


export default Main
