import React from "react"
import "./test.css"
class Main extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>Tasks</h1>
        <input type="text" id="searchBox" onKeyUp={this.Search} placeholder="Filter tasks..."></input>
        <div className="tasks">
          <style dangerouslySetInnerHTML={{
            __html: `
            .tasks {width: 25%; float: right;} 
          `}} />
          <div className="panel panel-primary">
            <div className="panel-heading">
              <span className="glyphicon glyphicon-comment"></span>
              <ol id="ListofTasks" className="list-group">
                <li> <a href="#task1">Task 1</a></li>

                <style dangerouslySetInnerHTML={{
                  __html: `
                  .list-group {overflow: auto;
             height: 100 %; word- wrap: break-word;}
      `}} />
              </ol>
            </div>
          </div>
        </div>

      </React.Fragment >
    );
  }
  Search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchBox');
    filter = input.value.toUpperCase();
    ul = document.getElementById("ListofTasks");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

}


export default Main
